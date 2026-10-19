import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const sizes = new Map<string, { width: number; height: number } | null>();

/** Размеры картинки из public/ — чтобы браузер заранее знал пропорции и страница не прыгала. */
export async function imageSize(src: string) {
  if (sizes.has(src)) return sizes.get(src)!;
  let size: { width: number; height: number } | null = null;
  const file = path.join(process.cwd(), 'public', decodeURI(src));
  if (src.startsWith('/') && fs.existsSync(file)) {
    const meta = await sharp(file, { limitInputPixels: false }).metadata();
    if (meta.width && meta.height) size = { width: meta.width, height: meta.height };
  }
  sizes.set(src, size);
  return size;
}

/**
 * Готовит HTML тела кейса: всем картинкам, кроме первой, — ленивую загрузку,
 * картинкам с height: auto — width/height из файла.
 */
export async function prepareBody(html: string) {
  const tags = [...html.matchAll(/<img\b[^>]*>/g)];
  let out = '';
  let last = 0;
  for (const [i, m] of tags.entries()) {
    let tag = m[0];
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1];
    if (src && !/\swidth="/.test(tag) && /height:\s*auto/.test(tag)) {
      const size = await imageSize(src);
      if (size) tag = tag.replace('<img', `<img width="${size.width}" height="${size.height}"`);
    }
    if (i > 0 && !/\sloading="/.test(tag)) tag = tag.replace('<img', '<img loading="lazy" decoding="async"');
    out += html.slice(last, m.index) + tag;
    last = m.index! + m[0].length;
  }
  return out + html.slice(last);
}

/** Пункты «в этом кейсе» из <section id="…"><h2>…</h2>, если toc не задан во frontmatter. */
export function tocFromBody(html: string) {
  return [...html.matchAll(/<section id="([^"]+)"[^>]*>\s*<h2[^>]*>(.*?)<\/h2>/gs)].map((m) => ({
    id: m[1],
    label: m[2].replace(/<[^>]+>/g, '').replace(/ /g, ' '),
  }));
}
