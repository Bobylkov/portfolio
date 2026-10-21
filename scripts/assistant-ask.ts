// Отладка одного вопроса: node scripts/assistant-ask.ts "вопрос" [тема]
import fs from 'node:fs';
import { kb } from '../src/data/assistant.ts';
import { buildBrain, buildIndex, respond } from '../src/lib/assistant-search.ts';
const idx = buildIndex(JSON.parse(fs.readFileSync(new URL('../dist/assistant-index.json', import.meta.url), 'utf8')));
const [q, topic] = process.argv.slice(2);
const r = respond(q, buildBrain(kb), idx, { topic, asked: [] }, true);
console.log(r.via, r.id ?? '', '\n', r.html.replace(/<[^>]+>/g, ''), '\n→', r.suggest.join(', '));
