// Индекс для поиска ассистента: тексты кейсов и блоков компаний, разбитые на разделы.
// Собирается при сборке в статичный файл /assistant-index.json — сервер и модели не нужны.
import type { APIRoute } from 'astro';
import { caseUrl, getAllCases, getCompanies } from '../lib/content';
import type { Chunk } from '../lib/assistant-search';

const ENT: Record<string, string> = { nbsp: ' ', amp: '&', quot: '"', laquo: '«', raquo: '»', mdash: '—', ndash: '–', hellip: '…', lt: '<', gt: '>', rarr: '→' };
const plain = (html: string) =>
  html
    .replace(/<(svg|script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<img[^>]*\salt="([^"]+)"[^>]*>/g, ' $1. ') // подписи картинок тоже ищутся
    .replace(/<\/(p|li|div|h\d|tr|figcaption|blockquote|span)>/g, '$&. ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#\d+|[a-z]+);/g, (m, e: string) => (e[0] === '#' ? String.fromCharCode(+e.slice(1)) : ENT[e] ?? m))
    .replace(/\u00a0/g, ' ')
    .replace(/\s+([.,:;!?])/g, '$1')
    .replace(/([.!?…:;,])\.+/g, '$1')
    .replace(/(^|\s)\.\s/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const GET: APIRoute = async () => {
  const chunks: Chunk[] = [];
  for (const c of await getAllCases()) {
    const d = c.data;
    const url = d.draft ? `/#case-${c.id}` : caseUrl(c);
    const caseTitle = d.title;
    // обзор кейса: шапка и карточка с главной
    chunks.push({ url, caseTitle, section: d.heading ?? d.card.title, text: plain([d.meta, d.lead, d.note, d.card.title, d.card.lead, ...(d.card.nums ?? []).map((n) => `${n.value} ${n.label}`)].filter(Boolean).join('. ')) });
    if (d.draft || !c.body) continue;
    // разделы тела: <section id="…"><h2>…</h2> … </section>
    for (const m of c.body.matchAll(/<section id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)) {
      const [, id, inner] = m;
      const h2 = inner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1] ?? caseTitle;
      const text = plain(inner.replace(/<h2[^>]*>[\s\S]*?<\/h2>/, ''));
      if (text) chunks.push({ url: `${url}#${id}`, caseTitle, section: plain(h2), text });
    }
  }
  for (const co of await getCompanies()) {
    const d = co.data;
    const text = plain([d.meta, ...d.paragraphs, d.tags?.join(', '), d.findings && `${d.findings.title}: ${d.findings.items.join('. ')}`].filter(Boolean).join('. '));
    chunks.push({ url: `/#${d.anchor}`, caseTitle: d.name, section: plain(d.title), text });
  }
  return new Response(JSON.stringify(chunks), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
