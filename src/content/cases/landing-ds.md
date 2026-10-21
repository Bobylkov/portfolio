---
title: "Дизайн-система лендингов Ozon"
company: ozon
year: "2022"
order: 7
nextCase: null
seoTitle: "Дизайн-система лендингов Ozon — кейс"
meta: "Ozon · один из трёх дизайнеров · 2022 · web"
heading: "Дизайн-система для лендингов Ozon"
lead: "В Ozon каждый день десятки дизайнеров собирают лендинги и промо-страницы. Нам поручили сделать дизайн-систему со свежим визуалом, чтобы страницы собирались быстрее и выглядели современно. Нас было трое, я отвечал в основном за интерфейсную часть и структуру."
tags: ["Дизайн-система", "Figma", "Адаптив", "Документация"]
toc:
  - id: start
    label: "Точка старта"
  - id: structure
    label: "Структура"
  - id: style
    label: "Стилистика"
  - id: components
    label: "Компоненты"
  - id: rules
    label: "Правила и адаптив"
  - id: result
    label: "Результат"
card:
  layout: compact
  cover:
    kind: image
    src: "/media/ds/cover.jpg"
    alt: "Лендинг «Что такое бренд Ozon» на ноутбуке и телефоне, собранный на новой дизайн-системе"
  meta: "Ozon · 2022 · кейс"
  title: "Дизайн-система для лендингов: страница за пару минут →"
  lead: "Конструктор из блоков и карточек вместо 250 устаревших компонентов: крупная типографика, варианты под контент и адаптив в трёх брейкпоинтах."
  summary:
    - label: "Задача"
      text: "Десятки дизайнеров Ozon собирали лендинги на устаревшем UI kit из 250 компонентов."
    - label: "Что сделал"
      text: "Втроём собрали новую систему: крупная типографика, 70 цветовых стилей, блоки-конструктор с вариантами и адаптивом в трёх брейкпоинтах. Я отвечал за интерфейсную часть и структуру."
    - label: "Итог"
      text: "Экран собирается за пару минут. На системе уже собраны Ozon Seller, Ozon Реклама и Ozon Rocket."
---

<img data-cover src="/media/ds/cover.jpg" alt="Лендинг «Что такое бренд Ozon» на ноутбуке и телефоне, собранный на новой дизайн-системе" style="display: block; width: 100%; height: auto; border-radius: 24px; background: #2E3038">

<section id="start" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Точка старта</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Начали с базы: старый UI kit и сотни лендингов, которые давно от него ушли. Разобрали компоненты — каких не хватает, что обновить, а что оставить в прошлом. Потом изучили самые популярные блоки и приёмы на живых лендингах: важно было сохранить привычные решения и освежить их новыми стилями.</p>
  <div class="nums" style="margin-top: 8px">
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">250</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">старых компонентов</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">12</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">шрифтовых пар</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">300</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">созвонов в Teams</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">672 ч</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">в Jira</span></div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px">
    <span style="font-size: 13px; color: #8A8A86">Кусочек старого UI kit</span>
    <img src="/media/ds/fragment-starogo-ui-kit.jpg" alt="Фрагмент старого UI kit: блоки с текстом, картинками, иконками и видео" style="display: block; width: 100%; height: auto; border-radius: 24px; background: #2E3038">
  </div>

</section>

<section id="structure" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Структура</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Сделали документацию, вынесли шрифты и цвета в отдельные файлы и разложили компоненты по страницам Figma по атомарному подходу. На каждой странице — заголовок раздела, ссылка на документацию и шаблоны с примером использования.</p>
  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px">
    <img src="/media/ds/tri-fayla-biblioteki-v.jpg" alt="Три файла библиотеки в Figma: компоненты, цвета и шрифты для лендингов" style="display: block; width: 100%; height: auto; border-radius: 24px; background: #2E3038">
    <img src="/media/ds/stranitsa-knopok-razmery-36.jpg" alt="Страница кнопок: размеры 36, 40, 48 и 56 с дизайном, документацией и шаблонами" style="display: block; width: 100%; height: auto; border-radius: 24px; background: #2E3038">
  </div>

</section>

<section id="style" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Стилистика</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Визуал разделили на три части: типографика, цвета и эффекты, скругления. Главная фишка — новая крупная акцентная типографика: гарнитура работает на полную, и «вау» получается без лишних украшений. Ещё собрали 70 цветовых стилей по сценариям, новые блюры и плашки, сглаживание углов и систему теней.</p>
  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px">
    <div class="g2"><img src="/media/ds/tipografika-krupnye-promo-stili.jpg" alt="Типографика: крупные промо-стили Promo 1–3 и примеры лендингов" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"><img src="/media/ds/tsveta-aktsentov-bylo-i.jpg" alt="Цвета акцентов: было и стало, градиенты вместо плоских цветов" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"></div>
    <div class="g2"><img src="/media/ds/blyury-dlya-knopok-plashek.jpg" alt="Блюры для кнопок, плашек и фонов на примере лендинга брендирования автомобилей" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"><img src="/media/ds/sglazhivanie-uglov-kartochek-i.jpg" alt="Сглаживание углов карточек и новые тени" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"></div>
  </div>

</section>

<section id="components" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Компоненты</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">В основе — наборы готовых решений, из которых дизайнер собирает страницу как из «Лего». Шаблон выбирается через экземпляры под свой контент, а у каждого компонента есть варианты: размер шрифта, выравнивание, высота, иллюстрация. Экран собирается за пару минут.</p>
  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px">
    <span style="font-size: 13px; color: #8A8A86">Топ-баннер: шаблон и готовый блок</span>
    <img src="/media/ds/top-banner-shablon-title.jpg" alt="Топ-баннер: шаблон Title Promo 3 и готовый блок с контентом" style="display: block; width: 100%; height: auto; border-radius: 24px; background: #2E3038">
    <div class="g2"><img src="/media/ds/varianty-top-bannera-svetlyy.jpg" alt="Варианты топ-баннера: светлый, тёмный, брендовый, с картинкой и видео" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"><img src="/media/ds/panel-variantov-komponenta-v.jpg" alt="Панель вариантов компонента в Figma: заголовок, высота, текст, кнопка, картинка, размер" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"></div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px">
    <span style="font-size: 13px; color: #8A8A86">Мы нарисовали очень много карточек</span>
    <div class="g2"><img src="/media/ds/kartochki-s-kartinkoy-i.jpg" alt="Карточки с картинкой и текстом: шаблоны и примеры с контентом" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"><img src="/media/ds/vertikalnye-kartochki-shablony-i.jpg" alt="Вертикальные карточки: шаблоны и вариант с фото на фоне" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"></div>
    <div class="g2"><div style="display: flex; flex-direction: column; gap: 8px; min-width: 0"><span style="font-size: 13px; color: #8A8A86">Сборка страницы из готовых блоков</span><img src="/media/ds/sborka-stranitsy-v-figma.jpg" alt="Сборка страницы в Figma: блок меняется в пару кликов" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"></div><div style="display: flex; flex-direction: column; gap: 8px; min-width: 0"><span style="font-size: 13px; color: #8A8A86">И компоненты поменьше</span><img src="/media/ds/melkie-komponenty-avatary-beydzhi.jpg" alt="Мелкие компоненты: аватары, бейджи, чипсы, тултипы, модалки, табы, переключатели" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"></div></div>
  </div>

</section>

<section id="rules" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Правила и адаптив</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Прописали правила построения: колонки, отступы, размеры, цвета и типографику. Они держат консистентность и помогают быстрее ввести в курс дела новых дизайнеров. Каждый компонент и шаблон адаптивен в трёх брейкпоинтах — у дизайнеров остаётся время на креатив и логику, а не на ресайзы.</p>
  <a href="https://www.youtube.com/watch?v=OfxrPDL7RDQ" style="align-self: flex-start; font-weight: 500">Видео: как работает адаптив ↗</a>
  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px">
    <div class="g2"><img src="/media/ds/dokumentatsiya-s-pravilami-postroeniya.jpg" alt="Документация с правилами построения: колонки, отступы, размеры, скругления, цвета, типографика" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"><img src="/media/ds/odin-shablon-v-breykpointah.jpg" alt="Один шаблон в брейкпоинтах: десктоп, планшет и мобильная версия" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"></div>
  </div>

</section>

<section id="result" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Результат</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">На новом UI kit уже собрали сайты Ozon Seller, Ozon Реклама, Ozon Rocket и промо брендирования авто. Следующий шаг — масштабировать компоненты на все команды и завести единый Storybook.</p>
  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px">
    <div style="display: flex; flex-direction: column; gap: 12px"><img src="/media/ds/lendingi-ozon-seller-i.jpg" alt="Лендинги Ozon Seller и Ozon Реклама, собранные на новом UI kit" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"><img src="/media/ds/lendingi-ozon-rocket-i.jpg" alt="Лендинги Ozon Rocket и брендирования автомобилей на новом UI kit" style="display: block; width: 100%; height: auto; border-radius: 18px; background: #2E3038"></div>
  </div>

</section>

<a href="Main.dc.html" style="display: flex; justify-content: space-between; gap: 12px; padding: 20px 0; border-top: 1px solid #EDEDEA; text-decoration: none; font-weight: 500">
  <span>Все кейсы</span><span>→</span>

</a>
