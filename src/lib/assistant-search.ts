// «Мозг» ассистента: работает прямо в браузере, без нейросетей и внешних сервисов.
//
// Как выбирается ответ (функция respond):
// 1. В вопросе ищутся тема (кейс или компания) и сторона (метрики, исследование, команда…).
//    Если темы нет, но это продолжение разговора («а метрики какие?»), берётся тема прошлого ответа.
//    Тема + сторона → готовый ответ этой пары, например «карточка врача — метрики».
// 2. Иначе вопрос сравнивается с примерами формулировок у каждого готового ответа и с ключевыми словами.
// 3. Если готового ответа нет — ищем по текстам кейсов (/assistant-index.json) и показываем нужное место со ссылкой.
// 4. Если ничего не нашлось — честно говорим и предлагаем вопросы.
// База ответов, тем и сторон — src/data/assistant.ts.

export type Answer = {
  id: string;
  q: string; // текст кнопки-вопроса
  a: string; // ответ, можно со ссылками
  keys?: string[]; // ключевые слова (начала слов; «=слово» — только целое слово)
  examples?: string[]; // примеры, как об этом спрашивают
  topic?: string; // к какому кейсу или компании относится
  facet?: string; // какая это сторона темы
  related?: string[]; // что предложить следом
  chip?: boolean; // показывать кнопкой при открытии чата
  strict?: boolean; // выбирать только по ключевым словам (приветствие, спасибо), не по похожести
};
// own — стороны, которые входят в само название темы (у «дизайн-системы Ozon» слова «дизайн-система» — это тема, а не сторона ds)
// broad — тема-компания: на вопрос «что делал в Сбере» лучше обзор, чем случайная цитата из одного кейса
export type Topic = { id: string; name: string; urls: string[]; keys: string[]; overview: string; own?: string[]; broad?: boolean };
// priority — если в вопросе нашлось несколько сторон, выигрывает более конкретная: «как изменились метрики» — это метрики, а не решение
export type Facet = { id: string; keys: string[]; general?: string; fallback?: string[]; priority?: number };
// synonyms — разговорные слова и их «книжные» замены: если в вопросе есть ключ, к нему добавляется замена
export type KB = { answers: Answer[]; topics: Topic[]; facets: Facet[]; synonyms?: [string, string][] };
export type Chunk = { url: string; caseTitle: string; section: string; text: string };
export type State = { topic?: string; asked: string[] };
export type Reply = { html: string; suggest: string[]; via: 'faq' | 'pair' | 'search' | 'more' | 'none'; id?: string; topic?: string };

export const norm = (s: string) => s.toLowerCase().replace(/ё/g, 'е');

const STOP = new Set(
  ('и в во не что он на я с со как а то все она так его но да ты к у же вы за бы по только ее мне было вот от меня еще нет о ' +
    'из ему когда даже ну ли если уже или ни быть был него до вас нибудь уж вам ведь там потом себя ничего ей может они тут где ' +
    'есть надо ней для мы тебя их чем была сам чтоб без чего раз тоже себе под будет ж тогда кто этот того потому этого какой ' +
    'какая какие каким какую ним здесь этом один почти мой тем чтобы нее сейчас были куда зачем всех можно при об хоть над тот ' +
    'через эти нас про всего них много эту моя этой том им всю это ему свой свои своих был ли расскажи расскажите скажи скажите ' +
    'подскажи подскажите покажи покажите интересно хочу хотел хотела узнать знать вопрос пожалуйста глеб глеба глебу глебом ' +
    'такой такая такое такие эта весь вся сколько почему зачем что-то кто-то показывал показывали показать показали делал делали ' +
    'сделал сделали делает работал работали работает было были бывает твой твоя твои твоих его ваш ваша вообще ' +
    'какого каком каких какому какими каков какова каковы ' +
    'what is the a an do does did you your he his him have has in of to for about with are how can tell me i it on at').split(' '),
);

// Упрощённый стеммер: отрезает частые окончания, чтобы «исследования», «исследованиях» и «исследованием»
// превращались в одну основу. Основа не короче 4 букв. Для английских слов — s, ing, ed.
const ENDINGS = [
  'иями', 'ями', 'ами', 'иях', 'ях', 'ах', 'ием', 'ией', 'ого', 'его', 'ому', 'ему', 'ыми', 'ими', 'ых', 'их', 'ую', 'юю',
  'ая', 'яя', 'ое', 'ее', 'ые', 'ие', 'ой', 'ей', 'ий', 'ый', 'ом', 'ем', 'ам', 'ям', 'ов', 'ев', 'ия', 'ию', 'ии', 'ье', 'ья',
  'ешь', 'ишь', 'ете', 'ите', 'ет', 'ит', 'ут', 'ют', 'ат', 'ят', 'ла', 'ло', 'ли', 'ть', 'ти', 'а', 'я', 'о', 'е', 'ы', 'и',
  'у', 'ю', 'ь', 'й', 'л',
];
export function stem(word: string) {
  if (/^[a-z]+$/.test(word)) return word.length > 4 ? word.replace(/(ing|ed|es|s)$/, '') : word;
  const w = word.replace(/(ся|сь)$/, '');
  if (w.length < 4) return w;
  for (const e of ENDINGS) if (w.endsWith(e) && w.length - e.length >= 4) return w.slice(0, -e.length);
  return w;
}

// слова через дефис добавляются и целиком, и по частям: «карточка-франкенштейн» → «карточка», «франкенштейн»
export const tokens = (s: string) =>
  (norm(s).match(/[a-zа-я0-9]+(?:[-/][a-zа-я0-9]+)*/g) ?? []).flatMap((w) => (/[-/]/.test(w) ? [w, ...w.split(/[-/]/)] : [w]));
export const terms = (s: string) => tokens(s).filter((t) => t.length > 1 && !/[-/]/.test(t) && !STOP.has(t)).map(stem);

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
// опечатки прощаются только в длинных словах и только если совпадает первая буква:
// иначе «записаться» путается с «написать», а «редизайн» — с «релиз»
const allowed = (len: number) => (len >= 10 ? 2 : len >= 7 ? 1 : 0);
const allowedSearch = allowed;

/** Похоже ли слово из вопроса на ключ-префикс (с учётом опечаток). */
function keyHit(word: string, key: string) {
  if (word.startsWith(key)) return true;
  const tol = allowed(key.length);
  if (!tol || word[0] !== key[0]) return false;
  for (let n = key.length - tol; n <= key.length + tol; n++) {
    if (n > 0 && n <= word.length && dist(word.slice(0, n), key, tol) <= tol) return true;
  }
  return false;
}

/** Сумма длин совпавших ключей. Ключ из нескольких слов засчитывается, только если совпали все слова.
 *  Короткие ключи (до 3 букв) и ключи с «=» совпадают только целым словом. */
function keyScore(keys: string[] | undefined, text: string, words: string[]) {
  if (!keys) return 0;
  const part = (p: string) =>
    p.startsWith('=') ? words.includes(p.slice(1)) : words.some((w) => (p.length <= 3 ? w === p || w.startsWith(p + '-') : keyHit(w, p)));
  let score = 0;
  for (const raw of keys) {
    const k = raw.replace(/^\+/, '');
    const hit = /[^a-zа-я0-9 =-]/.test(k) ? text.includes(k) : k.split(' ').every(part);
    if (hit) score += k.replace(/[\s=]/g, '').length;
  }
  return score;
}

// основы считаются одним словом, если совпадают, если одна — начало другой (короткая основа — только почти целиком,
// чтобы «метр» из «метро» не совпадал с «метрик») или если отличаются одной опечаткой
const prefixOf = (a: string, b: string) => {
  const [s, l] = a.length <= b.length ? [a, b] : [b, a];
  return l.startsWith(s) && (s.length >= 5 || (s.length >= 4 && l.length - s.length <= 1));
};
const near = (a: string, b: string) =>
  a === b || prefixOf(a, b) || (a.length >= 6 && b.length >= 6 && a[0] === b[0] && dist(a, b, 1) <= 1);

// ——— Классификатор по примерам: косинусная близость наборов основ, взвешенных по редкости ———
export type Brain = { kb: KB; ex: { answer: Answer; t: string[]; norm: number }[]; idf: Map<string, number> };

export function buildBrain(kb: KB): Brain {
  const raw = kb.answers.filter((a) => !a.strict).flatMap((answer) => [answer.q, ...(answer.examples ?? [])].map((s) => ({ answer, t: [...new Set(terms(s))] })));
  const df = new Map<string, number>();
  for (const e of raw) for (const t of e.t) df.set(t, (df.get(t) ?? 0) + 1);
  const idf = new Map([...df].map(([t, n]) => [t, Math.log(1 + raw.length / n)]));
  const w = (t: string) => idf.get(t) ?? Math.log(1 + raw.length);
  return { kb, idf, ex: raw.filter((e) => e.t.length).map((e) => ({ ...e, norm: Math.sqrt(e.t.reduce((s, t) => s + w(t) ** 2, 0)) })) };
}

function classify(question: string, brain: Brain) {
  const q = [...new Set(terms(question))];
  if (!q.length) return [];
  const w = (t: string) => brain.idf.get(t) ?? Math.log(1 + brain.ex.length);
  const qNorm = Math.sqrt(q.reduce((s, t) => s + w(t) ** 2, 0));
  const best = new Map<string, { answer: Answer; sim: number }>();
  for (const e of brain.ex) {
    let dot = 0;
    for (const t of q) {
      const m = e.t.find((x) => near(t, x));
      if (m) dot += w(t) * w(m) * (m === t ? 1 : 0.85);
    }
    // пример из одного значимого слова («что было до сбера» → «сбер») не должен перебивать вопрос из нескольких слов
    const sim = (dot / (qNorm * e.norm)) * (e.t.length === 1 && q.length > 1 ? 0.75 : 1);
    if (sim > (best.get(e.answer.id)?.sim ?? 0)) best.set(e.answer.id, { answer: e.answer, sim });
  }
  return [...best.values()].sort((a, b) => b.sim - a.sim);
}

function detect<T extends { id: string; keys: string[] }>(items: T[], question: string) {
  const text = norm(question);
  const words = tokens(question);
  const ranked = items.map((it) => ({ it, s: keyScore(it.keys, text, words) })).filter((r) => r.s > 0).sort((a, b) => b.s - a.s);
  if (!ranked.length || (ranked[1] && ranked[1].s === ranked[0].s)) return undefined;
  return ranked[0].it;
}

// ——— Поиск по текстам кейсов (BM25) ———
export type SearchIndex = { chunks: Chunk[]; docs: Map<string, number>[]; lens: number[]; df: Map<string, number>; avg: number; vocab: string[] };

export function buildIndex(chunks: Chunk[]): SearchIndex {
  const df = new Map<string, number>();
  const docs = chunks.map((c) => {
    const tf = new Map<string, number>();
    // заголовок раздела весит больше текста
    for (const t of [...terms(c.section), ...terms(c.section), ...terms(c.caseTitle), ...terms(c.text)]) tf.set(t, (tf.get(t) ?? 0) + 1);
    for (const t of tf.keys()) df.set(t, (df.get(t) ?? 0) + 1);
    return tf;
  });
  const lens = docs.map((tf) => [...tf.values()].reduce((s, n) => s + n, 0));
  return { chunks, docs, lens, df, avg: lens.reduce((s, n) => s + n, 0) / Math.max(1, lens.length), vocab: [...df.keys()] };
}

function expand(q: string[], idx: SearchIndex) {
  const out = new Map<string, number>();
  for (const t of q) {
    if (idx.df.has(t)) { out.set(t, Math.max(out.get(t) ?? 0, 1)); continue; }
    const tol = allowedSearch(t.length);
    for (const v of idx.vocab) {
      if (t.length >= 5 && (v.startsWith(t) || t.startsWith(v)) && v.length >= 4) out.set(v, Math.max(out.get(v) ?? 0, 0.7));
      else if (tol && v[0] === t[0] && Math.abs(v.length - t.length) <= tol && dist(t, v, tol) <= tol) out.set(v, Math.max(out.get(v) ?? 0, 0.8));
    }
  }
  return out;
}

export function search(question: string, idx: SearchIndex, urls?: string[]) {
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
        s += w * Math.log(1 + (N - df + 0.5) / (df + 0.5)) * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * idx.lens[i]) / idx.avg)));
      }
      return { chunk: idx.chunks[i], score: s * (1 + 0.25 * Math.max(0, hits.size - 1)), hits };
    })
    .filter((r) => r.score > 0 && (!urls || urls.some((u) => r.chunk.url.startsWith(u))))
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

/** Какая доля слов вопроса встречается в тексте. */
function coverage(q: string[], text: string) {
  if (!q.length) return 0;
  const t = terms(text);
  return q.filter((x) => t.some((y) => near(x, y))).length / q.length;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const KEY_SURE = 4; // столько букв ключей должно совпасть, чтобы уверенно выбрать готовый ответ
const SIM_SURE = 0.62; // близость к примеру, при которой ответ выбирается сразу
const SIM_OK = 0.45; // близость, при которой ответ подходит, если нет ничего лучше
const SEARCH_MIN = 2.2; // минимальная оценка BM25, ниже — в кейсах ответа нет
const FOLLOW = new Set(['там', 'тут', 'этом', 'этот', 'этого', 'эта', 'это', 'эту', 'нем', 'ней', 'него', 'нее', 'них', 'а', 'ещё', 'еще', 'тоже']);
const MORE = ['подробн', 'еще', 'больше', 'детал', 'дальше', 'продолж', 'more'];
const SOFT = new Set(['overview', 'problem', 'solution', 'timeline']);

/** Что предложить следом: другие стороны той же темы, потом связанные вопросы. */
function suggestIds(kb: KB, state: State, a?: Answer, t?: Topic) {
  const ids = [...(t ? kb.answers.filter((x) => x.topic === t.id && x.id !== a?.id).map((x) => x.id) : []), ...(a?.related ?? [])];
  return ids.filter((id, i) => ids.indexOf(id) === i && id !== a?.id && !state.asked.includes(id) && kb.answers.some((x) => x.id === id)).slice(0, 3);
}

/** Ответ готовым ответом — и на свой вопрос, и на нажатие кнопки-вопроса. */
export function replyFor(a: Answer, kb: KB, state: State): Reply {
  const t = kb.topics.find((x) => x.id === a.topic);
  return { via: 'faq', html: a.a, id: a.id, topic: t?.id, suggest: suggestIds(kb, state, a, t) };
}

/** Главная функция: что ответить на вопрос посетителя. */
/** Дописывает к вопросу «книжные» синонимы разговорных слов: «айфон» → «ios», «тг» → «telegram». */
export function withSynonyms(question: string, kb: KB) {
  const text = norm(question);
  const words = tokens(question);
  const add = (kb.synonyms ?? []).filter(([k]) => (k.startsWith('=') ? words.includes(k.slice(1)) : text.includes(k))).map(([, v]) => v);
  return add.length ? `${question} ${add.join(' ')}` : question;
}

export function respond(rawQuestion: string, brain: Brain, idx: SearchIndex | undefined, state: State, debug = false): Reply {
  const { kb } = brain;
  const question = withSynonyms(rawQuestion, kb);
  const byId = (id?: string) => kb.answers.find((a) => a.id === id);
  const topicOf = (id?: string) => kb.topics.find((t) => t.id === id);
  const words = tokens(question);
  const q = terms(question);

  const explicit = detect(kb.topics, question);
  const facet = (() => {
    const text = norm(question);
    const found = kb.facets
      .filter((f) => !explicit?.own?.includes(f.id))
      .map((f) => ({ f, s: keyScore(f.keys, text, words) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => (b.f.priority ?? 0) - (a.f.priority ?? 0) || b.s - a.s);
    return found[0]?.f;
  })();
  const ctx = topicOf(state.topic);
  // похожие примеры и ключевые слова считаем сразу: уверенно узнанный общий вопрос («когда сможешь выйти», «как связаться»)
  // не должен становиться продолжением темы прошлого ответа
  const sims = classify(question, brain);
  const kw = kb.answers.map((a) => ({ a, s: keyScore(a.keys, norm(question), words) })).filter((r) => r.s > 0).sort((x, y) => y.s - x.s);
  const standalone = (a?: Answer) => !!a && !a.topic && !a.facet;
  const offTopic = (kw[0] && kw[0].s >= 8 && standalone(kw[0].a)) || (sims[0] && sims[0].sim >= SIM_SURE && standalone(sims[0].answer));
  const followUp = !explicit && !!ctx && !offTopic && (!!facet || words.some((w) => FOLLOW.has(w)) || words.length <= 4);
  const topic = explicit ?? (followUp ? ctx : undefined);

  const suggestFor = (a?: Answer, t?: Topic) => suggestIds(kb, state, a, t);
  const faq = (a: Answer, via: Reply['via'] = 'faq'): Reply => ({ ...replyFor(a, kb, state), via });
  const fromSearch = (found: ReturnType<typeof search>, t?: Topic): Reply => {
    const best = found[0];
    const { chunk } = best;
    const where = chunk.url.startsWith('/#')
      ? `На главной, в блоке про ${esc(chunk.caseTitle)}`
      : `В кейсе «${esc(chunk.caseTitle)}»${chunk.section !== chunk.caseTitle ? `, раздел «${esc(chunk.section)}»` : ''}`;
    let html = `${where}:<span class="asst-quote">${esc(snippet(chunk.text, best.hits))}</span><a href="${chunk.url}">Перейти к этому месту →</a>`;
    const more = found.slice(1).find((r) => r.score >= best.score * 0.6 && r.chunk.url.split('#')[0] !== chunk.url.split('#')[0]);
    if (more && !t) html += `<br>Ещё про это: <a href="${more.chunk.url}">${esc(more.chunk.caseTitle)}</a>`;
    const owner = t ?? kb.topics.find((x) => x.urls.some((u) => chunk.url.startsWith(u)) && !x.urls.includes('/#sberhealth'));
    return { via: 'search', html, topic: owner?.id, suggest: suggestFor(undefined, owner).concat(['best', 'contact']).filter((id, i, a) => a.indexOf(id) === i && !state.asked.includes(id)).slice(0, 3) };
  };

  // 0. «подробнее» в продолжение темы — меню её сторон
  const wordCount = norm(question).match(/[a-zа-я0-9]+(?:[-/][a-zа-я0-9]+)*/g)?.length ?? 0;
  if (ctx && !explicit && (!facet || facet.id === 'overview') && wordCount <= 4 && words.some((w) => MORE.some((m) => w.startsWith(m)))) {
    const ids = kb.answers.filter((a) => a.topic === ctx.id && a.facet !== 'overview' && !state.asked.includes(a.id)).map((a) => a.id).slice(0, 4);
    const url = kb.answers.find((a) => a.id === ctx.overview)?.a.match(/href="(\/cases\/[^"#]+)"/)?.[1] ?? ctx.urls[0];
    return { via: 'more', id: 'more', topic: ctx.id, html: `Что рассказать про «${esc(ctx.name)}»? Выберите ниже или <a href="${url}">откройте кейс целиком</a>.`, suggest: ids };
  }

  // «подробнее» без темы разговора — не к чему относить, поиск по слову «подробно» бессмыслен
  if (!ctx && !explicit && wordCount <= 3 && words.every((w) => MORE.some((m) => w.startsWith(m)) || STOP.has(w) || w.startsWith('расскаж'))) {
    return { via: 'none', html: '', suggest: ['about', 'best', 'contact'].filter((id) => !state.asked.includes(id)) };
  }

  // 1. Тема известна: выбираем среди ответов этой темы тот, что лучше покрывает слова вопроса.
  //    Сторона из вопроса («метрики», «команда») даёт ответу бонус; цепочка запасных сторон — «сроки» → «статус» → «обзор».
  const chain: string[] = [];
  const walk = (id: string) => {
    if (chain.includes(id)) return;
    chain.push(id);
    for (const f of kb.facets.find((x) => x.id === id)?.fallback ?? []) walk(f);
  };
  if (facet) walk(facet.id);
  // «лишние» слова вопроса — всё, кроме названия темы, слов-признаков сторон и слова «кейс»: по ним видно,
  // о какой детали спрашивают («цена», «пины в одном здании»). Сравниваются исходные слова с ключами-началами слов.
  const mentioned = kb.topics.filter((t) => keyScore(t.keys, norm(question), words) > 0);
  // ключи темы с «+» только узнают тему («+учён степен» → карточка врача), но сами слова остаются деталью вопроса
  const keyParts = (keys: string[]) => keys.filter((k) => !k.startsWith('+')).flatMap((k) => k.split(' ')).filter((p) => p.length > 3 || p.startsWith('='));
  const facetParts = keyParts(kb.facets.flatMap((f) => f.keys));
  const extraOf = (t: Topic) => {
    const parts = [...keyParts(t.keys), ...keyParts(mentioned.flatMap((m) => m.keys)), ...facetParts];
    const rest = words.filter((w) => !STOP.has(w) && w.length > 1 && !/[-/]/.test(w) && !/^кейс/.test(w) && !parts.some((p) => (p.startsWith('=') ? w === p.slice(1) : keyHit(w, p))));
    // слова, которые встречаются почти во всех кейсах («пользователь», «дизайн»), детали не указывают
    const common = (t: string) => !!idx && (idx.df.get(t) ?? 0) / idx.docs.length >= 0.3;
    return rest.map(stem).filter((t) => !common(t));
  };
  const plain = (a: Answer) => `${a.q} ${a.a.replace(/<a [^>]*>(Читать кейс|Подробнее|Смотреть макеты) →<\/a>/g, '').replace(/<[^>]+>/g, ' ')}`;
  if (topic) {
    const extra = extraOf(topic);
    const ranked = kb.answers
      .filter((a) => a.topic === topic.id)
      .map((a) => {
        const i = chain.indexOf(a.facet ?? '');
        // «мягкие» стороны (обзор, проблема, решение) часто угадываются по общим словам вроде «что за», «как решили»,
        // поэтому их бонус меньше: конкретные слова вопроса могут перевесить
        const soft = SOFT.has(facet?.id ?? '');
        const bonus = i === 0 ? (soft ? 0.35 : 0.6) : i > 0 ? Math.max(0.12, 0.3 - 0.06 * i) * (soft ? 0.6 : 1) : 0;
        const cov = coverage(extra, plain(a));
        // при равенстве конкретная сторона лучше общего обзора
        return { a, cov, bonus, s: bonus + 0.6 * cov - (a.facet === 'overview' && extra.length ? 0.05 : 0) };
      })
      .sort((x, y) => y.s - x.s);
    const found = idx ? search(question, idx, topic.urls) : [];
    // при равенстве — ответ, который ведёт в тот же раздел, что нашёл поиск
    const anchor = found[0]?.chunk.url;
    const tied = ranked.filter((r) => ranked[0] && Math.abs(r.s - ranked[0].s) < 0.01);
    const rankOf = (a: Answer) => {
      const i = found.findIndex((f) => a.a.includes(`href="${f.chunk.url}"`));
      return i < 0 ? Infinity : i;
    };
    const top = tied.length > 1 && anchor ? [...tied].sort((x, y) => rankOf(x.a) - rankOf(y.a))[0] : ranked[0];
    if (debug) console.log({ step: 1, topic: topic.id, facet: facet?.id, chain, extra, ranked: ranked.slice(0, 4).map((r) => `${r.a.id}:${r.s.toFixed(2)}(cov ${r.cov.toFixed(2)})`) });
    const sCov = found[0] ? coverage(extra, `${found[0].chunk.section} ${found[0].chunk.text}`) : 0;
    const extraHits = found[0] ? [...found[0].hits].filter((h) => extra.some((t) => near(t, h))).length : 0;
    const searchBetter = !!found[0] && found[0].score >= SEARCH_MIN * 0.6 && extra.length > 0 && sCov - (top?.cov ?? 0) >= 0.5 && extraHits >= (topic.broad ? 2 : 1);
    // прямо названная сторона («метрики», «команда») не уступает цитате; остальное — уступает, если цитата покрывает вопрос заметно лучше
    if (top && (top.bonus > 0 || top.cov >= 0.5) && !(searchBetter && top.bonus < 0.6)) {
      // общий обзор компании (broad) уступает цитате, если спрашивают про конкретную деталь, а не «что это»
      const detail = topic.broad && top.a.facet === 'overview' && facet?.id !== 'overview' && found[0] && found[0].score >= SEARCH_MIN * 0.6 && extraHits >= 1;
      if (!detail) return faq(top.a, 'pair');
    }
    if (searchBetter || (facet && found[0] && found[0].score >= SEARCH_MIN * 0.6 && topic.broad)) return fromSearch(found, topic);
    if (facet && chain.includes('overview') && byId(topic.overview)) return faq(byId(topic.overview)!, 'pair');
  }

  // 2. похожие примеры и ключевые слова
  // тема названа, а ничего конкретного не спросили — обзор темы (если только нет уверенного общего ответа: «что было до Сбера»)
  if (explicit && !facet && !extraOf(explicit).length && byId(explicit.overview) && !(kw[0] && kw[0].s >= 8 && !kw[0].a.topic)) return faq(byId(explicit.overview)!);
  let cand: Answer | undefined;
  // явное длинное ключевое совпадение важнее похожести на пример, если пример похож не слишком сильно
  if (kw[0] && kw[0].s >= 10 && sims[0]?.answer !== kw[0].a && (sims[0]?.sim ?? 0) < 0.8) cand = kw[0].a;
  else if (sims[0] && sims[0].sim >= SIM_SURE) cand = sims[0].answer;
  else if (kw[0] && kw[0].s >= KEY_SURE) cand = sims[0] && sims[0].sim >= SIM_OK && kw.some((r) => r.a === sims[0].answer) ? sims[0].answer : kw[0].a;
  else if (sims[0] && sims[0].sim >= SIM_OK) cand = sims[0].answer;
  // общий ответ про сторону («как исследуешь?») в разговоре о кейсе заменяем ответом этого кейса
  if (cand && topic && !cand.topic && (facet || cand.facet)) {
    const f = facet?.id ?? cand.facet;
    const pair = kb.answers.find((x) => x.topic === topic.id && x.facet === f);
    if (pair) cand = pair;
  }
  // ответ из другой темы, когда тема названа явно, — не подходит
  if (cand && explicit && cand.topic && cand.topic !== explicit.id && !explicit.broad) cand = undefined;
  // «дизайн-система» в вопросе про дизайн-систему Ozon — это тема, а не повод для общего ответа про дизайн-системы
  if (cand && explicit && !cand.topic && cand.facet && explicit.own?.includes(cand.facet)) cand = undefined;
  // общий ответ при явно названной теме берём, только если он подходит уверенно; иначе отвечаем про тему
  if (cand && explicit && !cand.topic) {
    const sure = (sims[0]?.answer === cand && sims[0].sim >= 0.75) || kw.some((r) => r.a === cand && r.s >= 8);
    if (!sure) cand = undefined;
  }

  const found = idx ? search(question, idx, topic?.urls) : [];
  const best = found[0];
  if (debug) console.log({ explicit: explicit?.id, facet: facet?.id, topic: topic?.id, sims: sims.slice(0, 3).map((r) => `${r.answer.id}:${r.sim.toFixed(2)}`), kw: kw.slice(0, 3).map((r) => `${r.a.id}:${r.s}`), cand: cand?.id, best: best && `${best.chunk.url}:${best.score.toFixed(1)}` });
  if (cand) {
    // уточняющие вопросы («почему убрали баннер…») лучше закрывает конкретное место из кейса
    const faqCover = coverage(q, cand.a.replace(/<[^>]+>/g, ' ') + ' ' + cand.q + ' ' + (cand.examples ?? []).join(' '));
    const searchCover = best ? coverage(q, `${best.chunk.section} ${best.chunk.text}`) : 0;
    const strong = (sims[0]?.answer === cand && sims[0].sim >= SIM_SURE) || (kw[0]?.a === cand && kw[0].s >= 12);
    const searchWins = !!best && best.score >= SEARCH_MIN && best.hits.size >= 2 && faqCover < 0.5 && searchCover - faqCover >= (cand.topic ? 0.5 : 0.34) && !strong;
    if (!searchWins) return faq(cand);
  }

  // 3. названа только тема: место из кейса, если в вопросе есть что-то кроме темы, иначе обзор
  if (explicit) {
    const topicTerms = new Set(terms(explicit.keys.join(' ').replace(/=/g, '')));
    const extra = q.filter((t) => ![...topicTerms].some((x) => near(t, x)));
    const extraHits = best ? [...best.hits].filter((h) => extra.some((t) => near(t, h))).length : 0;
    if (best && best.score >= SEARCH_MIN && extraHits >= (explicit.broad ? 2 : 1)) return fromSearch(found, explicit);
    const o = byId(explicit.overview);
    if (o) return faq(o);
  }

  // 4. поиск по кейсам: без темы нужно совпадение хотя бы двух слов вопроса, чтобы не отвечать на «погоду в Москве»
  const enough = (r?: ReturnType<typeof search>[number]) => !!r && r.hits.size >= Math.min(2, q.length);
  if (best && best.score >= (topic ? SEARCH_MIN * 0.8 : SEARCH_MIN) && (topic || enough(best))) return fromSearch(found, topic);
  if (followUp && ctx) {
    const any = idx ? search(question, idx) : [];
    if (any[0] && any[0].score >= SEARCH_MIN && enough(any[0])) return fromSearch(any);
  }
  if (kw[0]) return faq(kw[0].a);

  // 5. ничего не нашлось
  const fallback = ['about', 'best', 'contact'].filter((id) => !state.asked.includes(id));
  return { via: 'none', html: '', topic: state.topic, suggest: fallback.length ? fallback : ['experience', 'skills', 'contact'] };
}
