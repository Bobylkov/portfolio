import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), href: z.string() });
const image = z.object({ src: z.string(), alt: z.string().default('') });

// Обложка карточки на главной. kind выбирает компонент из src/components/covers.
const cover = z.discriminatedUnion('kind', [
  // обычная картинка во всю ширину, высота по пропорциям файла
  z.object({ kind: z.literal('image'), src: z.string(), alt: z.string() }),
  // видео 16:10 без звука, по кругу; trim: true чуть увеличивает кадр, чтобы спрятать тёмную рамку по краю файла
  z.object({ kind: z.literal('video'), src: z.string(), poster: z.string().optional(), alt: z.string(), trim: z.boolean().default(false) }),
  // видео + рукописные метрики шрифтом Caveat справа
  z.object({
    kind: z.literal('doctor-metrics'),
    src: z.string(),
    alt: z.string(),
    metrics: z.array(z.object({ value: z.string(), note: z.string().optional() })),
  }),
  // телефон, в котором по очереди сменяются 4 экрана
  z.object({ kind: z.literal('map-slides'), slides: z.array(image).length(4) }),
  // скриншот профиля с пометками маркером
  z.object({ kind: z.literal('profile'), src: z.string(), alt: z.string() }),
]);

const cases = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/cases' }),
  schema: z.object({
    // короткое название: меню «кейсы» и «Следующий кейс»
    title: z.string(),
    company: z.enum(['sberhealth', 'dolyami', 'ozon']),
    year: z.string(),
    // порядок в ленте и в меню
    order: z.number(),
    // своя иконка вместо иконки компании
    icon: z.string().optional(),
    // черновик: карточка на главной с подписью «Кейс скоро», без страницы и без пункта в меню
    draft: z.boolean().default(false),
    // slug следующего кейса; если не указан — следующий по order; null — без ссылки
    nextCase: z.string().nullable().optional(),

    // шапка страницы кейса
    seoTitle: z.string().optional(),
    meta: z.string().optional(),
    heading: z.string().optional(),
    lead: z.string().optional(),
    note: z.string().optional(),
    links: z.array(link).optional(),
    tags: z.array(z.string()).optional(),
    tocTitle: z.string().default('в этом кейсе'),
    // пункты «в этом кейсе»: id секции в теле и подпись; если не указать — соберутся из <section id> + <h2>
    toc: z.array(z.object({ id: z.string(), label: z.string() })).optional(),

    // карточка в ленте на главной
    card: z.object({
      layout: z.enum(['full', 'compact']).default('full'),
      cover,
      meta: z.string(),
      title: z.string(),
      lead: z.string(),
      nums: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
      images: z.array(image).optional(),
      cta: z.string().default('Читать кейс →'),
      links: z.array(link).optional(),
    }),
  }),
});

// Блоки компаний на главной и пункты «опыт» в сайдбаре
const companies = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/companies' }),
  schema: z.object({
    name: z.string(),
    anchor: z.string(),
    order: z.number(),
    role: z.string(),
    period: z.string(),
    icon: z.string(),
    iconAlt: z.string(),
    iconBorder: z.boolean().default(false),
    badge: z.string().optional(),
    badgeAlt: z.string().optional(),
    cover: z.object({
      kind: z.enum(['image', 'video']),
      src: z.string(),
      alt: z.string(),
      style: z.string(),
    }),
    meta: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    findings: z.object({ title: z.string(), items: z.array(z.string()) }).optional(),
  }),
});

export const collections = { cases, companies };
