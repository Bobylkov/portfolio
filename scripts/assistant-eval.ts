// Проверка ассистента на наборах вопросов.
// Запуск: npm run build && npm run eval:assistant
//   -v — показать и верные ответы; --holdout, --holdout2, --holdout3 — контрольные наборы, по которым ассистента не настраивали
import fs from 'node:fs';
import { kb } from '../src/data/assistant.ts';
import { buildBrain, buildIndex, respond } from '../src/lib/assistant-search.ts';
import { evalSet } from './assistant-eval-set.ts';
import { holdoutSet } from './assistant-holdout-set.ts';
import { holdout2Set } from './assistant-holdout2-set.ts';
import { holdout3Set } from './assistant-holdout3-set.ts';

const brain = buildBrain(kb);
const idx = buildIndex(JSON.parse(fs.readFileSync(new URL('../dist/assistant-index.json', import.meta.url), 'utf8')));
const verbose = process.argv.includes('-v');
const set = process.argv.includes('--holdout3') ? holdout3Set : process.argv.includes('--holdout2') ? holdout2Set : process.argv.includes('--holdout') ? holdoutSet : evalSet;

let ok = 0;
const fails: string[] = [];
for (const c of set) {
  const r = respond(c.q, brain, idx, { topic: c.ctx, asked: [] });
  const got = r.via === 'search' ? 'search:' + (r.html.match(/href="([^"]+)"/)?.[1] ?? '') : r.via === 'none' ? 'none' : r.id ?? '?';
  const exp = Array.isArray(c.expect) ? c.expect : [c.expect];
  const pass = exp.some((e) => (e.startsWith('search:') ? got.startsWith(e) : got === e));
  if (pass) ok++;
  const line = `${pass ? '✓' : '✗'} ${c.q}${c.ctx ? ` [тема: ${c.ctx}]` : ''}\n    получено: ${got}${pass ? '' : `   ожидалось: ${exp.join(' | ')}`}`;
  if (!pass) fails.push(line);
  else if (verbose) console.log(line);
}
console.log(fails.join('\n'));
console.log(`\nТочных ответов: ${ok} из ${set.length} — ${Math.round((ok / set.length) * 100)}%`);
