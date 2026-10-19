import { getCollection, type CollectionEntry } from 'astro:content';

export type Case = CollectionEntry<'cases'>;
export type Company = CollectionEntry<'companies'>;

export const caseUrl = (c: Case) => `/cases/${c.id}/`;

export async function getCompanies() {
  return (await getCollection('companies')).sort((a, b) => a.data.order - b.data.order);
}

/** Все кейсы по порядку, включая черновики (для ленты на главной). */
export async function getAllCases() {
  return (await getCollection('cases')).sort((a, b) => a.data.order - b.data.order);
}

/** Кейсы со страницей (для меню, «Следующий кейс» и генерации страниц). */
export async function getPublishedCases() {
  return (await getAllCases()).filter((c) => !c.data.draft);
}

export function nextCaseOf(c: Case, published: Case[]) {
  const { nextCase } = c.data;
  if (nextCase === null) return undefined;
  if (nextCase) return published.find((p) => p.id === nextCase);
  const i = published.findIndex((p) => p.id === c.id);
  return published[i + 1];
}

/** Иконка кейса: своя или иконка компании. */
export function iconOf(c: Case, companies: Company[]) {
  const company = companies.find((co) => co.id === c.data.company)!;
  return { src: c.data.icon ?? company.data.icon, border: c.data.icon ? false : company.data.iconBorder };
}
