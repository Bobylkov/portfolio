// Поиск для ассистента: работает прямо в браузере, без моделей и внешних сервисов.
// 1) Готовые ответы (src/data/assistant.ts) сопоставляются по ключевым словам с допуском опечаток.
// 2) Если готового ответа нет — ищем по текстам кейсов (/assistant-index.json) ранжированием BM25
//    и показываем самое подходящее место с ссылкой на раздел кейса.

export type Answer = { id: string; q: string; a: string; keys: string[]; related?: string[]; chip?: boolean };
export type Chunk = { url: string; caseTitle: string; section: string; text: string };

export const norm = (s: string) => s.toLowerCase().replace(/ё/g, 'е');

const STOP = new Set(
  ('и в во не что он на я с со как а то все она так его но да ты к у же вы за бы по только ее мне было вот от меня еще нет о ' +
    'из ему когда даже ну ли если уже или ни быть был него до вас нибудь уж вам ведь там потом себя ничего ей может они тут где ' +
    'есть надо ней для мы тебя их чем была сам чтоб без чего раз тоже себе под будет ж тогда кто этот того потому этого какой ' +
    'какая какие каким какую ним здесь этом один почти мой тем чтобы нее сейчас были куда зачем всех можно при об хоть над тот ' +
    'через эти нас про всего них много эту моя этой том им всю это ему свой свои своих был ли расскажи расскажите скажи скажите ' +
    'подскажи подскажите покажи покажите интересно хочу хотел хотела узнать знать вопрос пожалуйста привет здравствуйте глеб глеба ' +
    'глебу глебом ты вы у тебя у вас такой такая такое такие это эта весь вся сколько почему зачем что-то кто-то ' +
    'показывал показывали показать показали делал делали сделал сделали делает работал работали работает было были бывает').split(' '),
);

// Упрощённый стеммер для русского: отрезает частые окончания, чтобы «исследования», «исследованиях»
// и «исследованием» превращались в одну основу. Основа не короче 4 букв.
const ENDINGS = [
  'иями', 'ями', 'ами', 'иях', 'ях', 'ах', 'ием', 'ией', 'ого', 'его', 'ому', 'ему', 'ыми', 'ими', 'ых', 'их', 'ую', 'юю',
  'ая', 'яя', 'ое', 'ее', 'ые', 'ие', 'ой', 'ей', 'ий', 'ый', 'ом', 'ем', 'ам', 'ям', 'ов', 'ев', 'ия', 'ию', 'ии', 'ье', 'ья',
  'ешь', 'ишь', 'ете', 'ите', 'ет', 'ит', 'ут', 'ют', 'ат', 'ят', 'ла', 'ло', 'ли', 'ть', 'ти', 'а', 'я', 'о', 'е', 'ы', 'и',
  'у', 'ю', 'ь', 'й', 'л',
];
export function stem(word: string) {
  let w = word.replace(/(ся|сь)$/, '');
  if (w.length < 4) return w;
  for (const e of ENDINGS) {
    if (w.endsWith(e) && w.length - e.length >= 4) return w.slice(0, -e.length);
  }
  return w;
}

export const tokens = (s: string) => norm(s).match(/[a-zа-я0-9]+(?:-[a-zа-я0-9]+)*/g) ?? [];
export const terms = (s: string) => tokens(s).filter((t) => !STOP.has(t)).map(stem);

// Расстояние Дамерау — Левенштейна с ранним выходом: нужно только «0, 1 или 2 опечатки»
export function dist(a: string, b: string, max = 2) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    let rowMin = Infinity;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      rowMin = Math.min(rowMin, d[i][j]);
    }
    if (rowMin > max) return max + 1;
  }
  return d[a.length][b.length];
}
const allowed = (len: number) => (len >= 8 ? 2 : len >= 5 ? 1 : 0);
const allowedSearch = (len: number) => (len >= 8 ? 2 : len >= 6 ? 1 : 0);

/** Похоже ли слово из вопроса на ключ-префикс (с учётом опечаток). */
function keyHit(word: string, key: string) {
  if (word.startsWith(key)) return true;
  const tol = allowed(key.length);
  if (!tol) return false;
  for (let n = key.length - tol; n <= key.length + tol; n++) {
    if (n > 0 && n <= word.length && dist(word.slice(0, n), key, tol) <= tol) return true;
  }
  return false;
}

/** Оценка готовых ответов: сумма длин совпавших ключей. Ключ из нескольких слов засчитывается, только если совпали все его слова.
 *  Короткие ключи («ии», «тг», «cv») должны совпасть целым словом, чтобы «ии» не находилось внутри «компании». */
export function scoreAnswers(question: string, answers: Answer[]) {
  const text = norm(question);
  const words = tokens(question);
  const part = (p: string) => words.some((w) => (p.length <= 3 ? w === p || w.startsWith(p + '-') : keyHit(w, p)));
  return answers
    .map((a) => {
      let score = 0;
      for (const k of a.keys) {
        const hit = /[^a-zа-я0-9 -]/.test(k) ? text.includes(k) : k.split(' ').every(part);
        if (hit) score += k.replace(/\s/g, '').length;
      }
      return { answer: a, score };
    })
    .filter((r) => r.score > 0)
    .sort((x, y) => y.score - x.score);
}

export type SearchIndex = { chunks: Chunk[]; docs: Map<string, number>[]; lens: number[]; df: Map<string, number>; avg: number; vocab: string[] };

export function buildIndex(chunks: Chunk[]): SearchIndex {
  const df = new Map<string, number>();
  const docs = chunks.map((c) => {
    const tf = new Map<string, number>();
    // заголовок раздела и название кейса весят больше текста
    for (const t of [...terms(c.section), ...terms(c.section), ...terms(c.caseTitle), ...terms(c.text)]) tf.set(t, (tf.get(t) ?? 0) + 1);
    for (const t of tf.keys()) df.set(t, (df.get(t) ?? 0) + 1);
    return tf;
  });
  const lens = docs.map((tf) => [...tf.values()].reduce((s, n) => s + n, 0));
  return { chunks, docs, lens, df, avg: lens.reduce((s, n) => s + n, 0) / Math.max(1, lens.length), vocab: [...df.keys()] };
}

/** Слова вопроса → основы из словаря кейсов (с допуском опечаток и по префиксу). */
function expand(q: string[], idx: SearchIndex) {
  const out = new Map<string, number>(); // основа → вес
  for (const t of q) {
    if (idx.df.has(t)) { out.set(t, Math.max(out.get(t) ?? 0, 1)); continue; }
    const tol = allowedSearch(t.length);
    for (const v of idx.vocab) {
      if (t.length >= 5 && (v.startsWith(t) || t.startsWith(v)) && v.length >= 4) out.set(v, Math.max(out.get(v) ?? 0, 0.7));
      else if (tol && Math.abs(v.length - t.length) <= tol && dist(t, v, tol) <= tol) out.set(v, Math.max(out.get(v) ?? 0, 0.8));
    }
  }
  return out;
}

export function search(question: string, idx: SearchIndex) {
  const q = expand(terms(question), idx);
  const N = idx.docs.length;
  const k1 = 1.4, b = 0.75;
  return idx.docs
    .map((tf, i) => {
      let s = 0;
      const hits = new Set<string>();
      for (const [t, w] of q) {
        const f = tf.get(t);
        if (!f) continue;
        hits.add(t);
        const df = idx.df.get(t) ?? 1;
        const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
        s += w * idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * idx.lens[i]) / idx.avg)));
      }
      // бонус, если совпало несколько разных слов вопроса
      return { chunk: idx.chunks[i], score: s * (1 + 0.25 * Math.max(0, hits.size - 1)), hits };
    })
    .filter((r) => r.score > 0)
    .sort((x, y) => y.score - x.score);
}

/** Одно-два самых подходящих предложения из фрагмента. */
export function snippet(text: string, hits: Set<string>, max = 280) {
  const sentences = text.match(/[^.!?…]+[.!?…]*/g)?.map((s) => s.trim()).filter(Boolean) ?? [text];
  let best = 0, bestScore = -1;
  sentences.forEach((s, i) => {
    // строки-подписи вида «Долями · Т-Банк · 2023» хуже полноценных предложений, длинные чуть лучше коротких
    const sc = terms(s).filter((t) => hits.has(t)).length + Math.min(s.length, 200) / 1000 - (s.includes(' · ') ? 0.8 : 0);
    if (sc > bestScore) { bestScore = sc; best = i; }
  });
  let out = sentences[best];
  if (out.length < 140 && sentences[best + 1]) out += ' ' + sentences[best + 1];
  return out.length > max ? out.slice(0, max).replace(/\s+\S*$/, '') + '…' : out;
}

/** Какая доля слов вопроса встречается в тексте (по основам, с учётом префиксов). */
function coverage(q: string[], text: string) {
  if (!q.length) return 0;
  const t = terms(text);
  const near = (a: string, b: string) => a === b || (Math.min(a.length, b.length) >= 4 && (a.startsWith(b) || b.startsWith(a)));
  return q.filter((x) => t.some((y) => near(x, y))).length / q.length;
}

export type Reply = { html: string; suggest: string[]; via: 'faq' | 'search' | 'none' };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const FAQ_SURE = 4; // столько букв ключей должно совпасть, чтобы уверенно выбрать готовый ответ
const SEARCH_MIN = 2.2; // минимальная оценка BM25, ниже — считаем, что в кейсах ответа нет

/** Главная функция: что ответить на вопрос посетителя. */
export function respond(question: string, answers: Answer[], idx?: SearchIndex, asked: string[] = []): Reply {
  const ranked = scoreAnswers(question, answers);
  const top = ranked[0];
  const pick = (ids: string[]) => ids.filter((id, i) => !asked.includes(id) && ids.indexOf(id) === i && answers.some((a) => a.id === id)).slice(0, 3);

  const found = idx ? search(question, idx) : [];
  const best = found[0];
  // Готовый ответ уверенный, если совпали ключи и он сам отвечает на вопрос не хуже найденного в кейсах.
  // Уточняющие вопросы («почему убрали баннер…») лучше закрывает конкретное место из кейса.
  const q = terms(question);
  const faqCover = top ? coverage(q, top.answer.a.replace(/<[^>]+>/g, ' ')) : 0;
  const searchCover = best ? coverage(q, `${best.chunk.section} ${best.chunk.text}`) : 0;
  const searchWins = !!best && best.score >= SEARCH_MIN && best.hits.size >= 2 && searchCover - faqCover >= 0.5 && (top?.score ?? 0) < 10;
  if (top && top.score >= FAQ_SURE && !searchWins) {
    return { via: 'faq', html: top.answer.a, suggest: pick([...(top.answer.related ?? []), ...ranked.slice(1).map((r) => r.answer.id)]) };
  }
  if (best && best.score >= SEARCH_MIN) {
    const { chunk } = best;
    const where = chunk.url.startsWith('/#')
      ? `На главной, в блоке про ${esc(chunk.caseTitle)}`
      : `В кейсе «${esc(chunk.caseTitle)}»${chunk.section !== chunk.caseTitle ? `, раздел «${esc(chunk.section)}»` : ''}`;
    let html = `${where}:<span class="asst-quote">${esc(snippet(chunk.text, best.hits))}</span><a href="${chunk.url}">Перейти к этому месту →</a>`;
    const more = found.slice(1).find((r) => r.score >= best.score * 0.6 && r.chunk.url.split('#')[0] !== chunk.url.split('#')[0]);
    if (more) html += `<br>Ещё про это: <a href="${more.chunk.url}">${esc(more.chunk.caseTitle)}</a>`;
    return { via: 'search', html, suggest: pick([...ranked.filter((r) => r.score >= FAQ_SURE).map((r) => r.answer.id), 'best', 'contact']) };
  }
  if (top) return { via: 'faq', html: top.answer.a, suggest: pick(top.answer.related ?? []) };
  return { via: 'none', html: '', suggest: pick(['about', 'best', 'contact']) };
}
