---
title: "Экран «Вы записаны»"
company: sberhealth
year: "2025"
order: 1
nextCase: doctor-card
seoTitle: "Экран «Вы записаны» — кейс"
meta: "СберЗдоровье · ведущий дизайнер · 2025 · mobile + web"
heading: "Экран «Вы записаны»: как вырастить метрики и не перегрузить человека рекламой"
lead: "Финальный экран после записи к врачу только подтверждал запись. Вместе с продуктом, исследованиями и разработкой сделал его понятнее для пациента, полезнее для бизнеса и собрал из него компонент для всех продуктов."
links:
  - label: "Статья на Хабре ↗"
    href: "https://habr.com/ru/companies/docdoc/articles/1019088/"
toc:
  - id: problem
    label: "Проблема"
  - id: research
    label: "Исследование"
  - id: solution
    label: "Решение"
  - id: component
    label: "Компонент в дизайн-системе"
  - id: banner
    label: "Баннер приложения"
  - id: result
    label: "Итог"
card:
  cover:
    kind: video
    src: "/media/success/cover.mp4"
    poster: "/media/success/cover-poster.webp"
    alt: "Экран «Вы записаны» на телефоне: дата, клиника, быстрые действия"
    trim: true
  meta: "СберЗдоровье · ведущий дизайнер · 2025 · mobile + web"
  title: "Сделал экран «Вы записаны» точкой роста без рекламной перегрузки"
  lead: "Разделил информацию и рекламу по итогам интервью и юзабилити-тестов, переписал CTA приложения с «скидки» на «пользу» и собрал модульный компонент для трёх продуктов."
  nums:
    - value: "+34%"
      label: "кросс-переходов"
    - value: "+28%"
      label: "установок приложения"
    - value: "+33%"
      label: "кликов по офферам"
    - value: "64%"
      label: "кросс-заявок за 1–2 дня"
  images:
    - src: "/media/success/struktura-mobilnogo-ekrana.webp"
      alt: "Структура мобильного экрана «Вы записаны»"
    - src: "/media/success/desktop-karta-i-napominanie.webp"
      alt: "Десктопная версия экрана с картой и напоминанием"
  links:
    - label: "Статья на Хабре ↗"
      href: "https://habr.com/ru/companies/docdoc/articles/1019088/"
---

<div style="display: flex; flex-direction: column; gap: 12px">
  <div style="aspect-ratio: 16 / 10; border-radius: 24px; overflow: hidden; background: #F4F4F2"><video src="/media/success/cover.mp4" poster="/media/success/cover-poster.webp" autoplay muted loop playsinline aria-label="Экран «Вы записаны» на телефоне: дата, клиника, быстрые действия" style="display: block; width: 100%; height: 100%; object-fit: cover; transform: scale(1.01)"></video></div>
  <div class="nums">
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">+34%</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">кросс-переходов</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">+28%</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">установок приложения</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">0,9→1,2%</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">кликов по офферам</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">64%</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">кросс-заявок за 1–2 дня</span></div>
  </div>

</div>

<section id="problem" style="display: flex; flex-direction: column; gap: 12px; max-width: 620px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Проблема</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px">Экран подтверждал запись — и всё. Места для рекомендаций не было, следующие шаги (куда идти, что взять) считывались не сразу, а у разных продуктов финальные экраны выглядели по-разному.</p>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px">Бизнес хотел сделать из экрана точку роста. Мы боялись другого: в медицине важны контроль и доверие, а на первых итерациях офферы занимали слишком много места.</p>

</section>

<section id="research" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Исследование</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">С исследователем провели интервью и юзабилити-тесты нескольких версий экрана. Что выяснили:</p>
  <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.55; font-size: 16px; max-width: 620px">
    <span>✦ календарь и маршрут прятались за кнопкой «О приёме» — их не находили</span>
    <span>✦ фото и ФИО врача уже знакомы по прошлым шагам и почти ничего не дают</span>
    <span>✦ подтверждению нужны крупная дата и иллюстрация</span>
    <span>✦ нужны быстрые действия: поделиться, в календарь, в приложение</span>
    <span>✦ приложение лучше продаёт польза, а не «−50%»</span>
  </div>
  <img src="/media/success/tsitaty-respondentov-pro-gradienty.webp" alt="Цитаты респондентов: про градиенты и про то, куда ведёт крестик" style="display: block; width: 100%; height: auto; margin-top: 12px; border-radius: 24px; background: #F4F4F2">

</section>

<section id="solution" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Решение</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Разделили информацию и рекламу. Наверху — статус, дата, адрес и быстрые действия. Офферы — отдельной секцией ниже. Тексты — короче и спокойнее. На десктопе отдельно проработали карту и напоминание о приёме.</p>
  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px">
    <img src="/media/success/struktura-mobilnogo-ekrana.webp" alt="Структура мобильного экрана: быстрые действия, саммери записи, рекламный и рекомендательный блоки, менеджмент записи" style="display: block; width: 100%; height: auto; border-radius: 24px; background: #F4F4F2">
    <img src="/media/success/desktop-karta-i-napominanie.webp" alt="Десктопная версия: напоминание о приёме и маршрут с картой" style="display: block; width: 100%; height: auto; border-radius: 24px; background: #F4F4F2">
  </div>

</section>

<section id="component" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Компонент в дизайн-системе</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">С Егором Гороховым из команды дизайн-системы собрали модульный компонент: фиксированный каркас и секции, которые включаются под сценарий, плюс правила по порядку секций, статусам и промо. Им собраны финальные экраны трёх продуктов и экраны ошибок — новый сценарий теперь занимает дни, а не недели.</p>
  <img src="/media/success/dokumentatsiya-komponenta-anatomiya-svoystva.webp" alt="Документация компонента: анатомия, свойства и пресеты фона" style="display: block; width: 100%; height: auto; margin-top: 12px; border-radius: 24px; background: #F4F4F2">

</section>

<section id="banner" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Баннер приложения</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Баннер приложения теперь начинает с пользы — заключения врача в приложении, — а скидка стала дополнением, а не главным обещанием. Установки с экрана выросли на 28%.</p>
  <img src="/media/success/banner-prilozheniya-na-ekrane.webp" alt="Баннер приложения на экране «Вы записаны»: заключение врача и скидки в приложении" style="display: block; width: 100%; height: auto; margin-top: 12px; border-radius: 24px; background: #F4F4F2">

</section>

<section id="result" style="display: flex; flex-direction: column; gap: 12px; max-width: 620px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Итог</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px">Пользователь видит понятный статус и следующие шаги, бизнес получает рост кросс-переходов и установок, команда — компонент для масштабирования. Важная оговорка: рост — это связка поведения, а не строгая причинность. Дальше — A/B-тесты офферов и персонализация.</p>

</section>
