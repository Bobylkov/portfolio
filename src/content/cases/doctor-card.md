---
title: "Карточка врача"
company: sberhealth
year: "2026"
order: 2
nextCase: doctor-map
seoTitle: "Карточка врача — кейс"
meta: "СберЗдоровье · ведущий дизайнер · 2026 · mobile"
heading: "Редизайн карточки врача на выдаче"
lead: "Обновил карточку врача на выдаче СберЗдоровья: после запуска CR1 вырос на 10%, bounce rate выдачи снизился на 8%, а карточка полностью перешла на новую дизайн-систему."
toc:
  - id: context
    label: "Контекст"
  - id: approach
    label: "Подход"
  - id: findings
    label: "Что выяснили"
  - id: solution
    label: "Решение"
  - id: result
    label: "Финальный результат"
  - id: takeaways
    label: "Выводы"
card:
  cover:
    kind: doctor-metrics
    src: "/media/doctor/cover.mp4"
    alt: "Анимация карточки врача: фото, рейтинг, цена со скидкой и свободные слоты"
    metrics:
      - value: "CR1 +10%"
      - value: "26% → 46%"
        note: "понимают цену (comprehension rate)"
      - value: "−8%"
        note: "bounce rate выдачи"
  meta: "СберЗдоровье · ведущий дизайнер · 2026 · mobile"
  title: "Обновил карточку врача после семи A/B-тестов без результата"
  lead: "Вместо восьмого теста провели 9 интервью и два опроса по 100 человек, собрали гибрид из двух редизайнов и перевели карточку на новую дизайн-систему."
  summary:
    - label: "Задача"
      text: "Семь A/B-тестов карточки врача подряд не дали результата."
    - label: "Что сделал"
      text: "Вместо восьмого теста провели 9 интервью и два опроса по 100 человек, сравнили два редизайна и собрали гибрид из сильных сторон обоих на новой дизайн-системе."
    - label: "Итог"
      text: "CR1 +10%, цену понимают 46% вместо 26%, bounce rate выдачи −8%."
---

<div style="position: relative; aspect-ratio: 16 / 10; background: #F4F4F4; border-radius: 24px; overflow: hidden; container-type: inline-size">
  <video src="/media/doctor/cover.mp4" autoplay muted loop playsinline aria-label="Анимация карточки врача: фото, рейтинг, цена со скидкой и свободные слоты" style="display: block; width: 100%; height: 100%; object-fit: cover"></video>
  <div style="position: absolute; left: 57%; right: 4%; top: 50%; transform: translateY(-50%) rotate(-3deg); display: flex; flex-direction: column; gap: 3.2cqw; font-family: Caveat, 'Comic Sans MS', cursive; color: #1C4FD8; line-height: 1">
    <div style="display: flex; flex-direction: column; gap: 0.6cqw"><span style="font-size: 6.4cqw; font-weight: 700; white-space: nowrap">CR1 +10%</span></div>
    <div style="display: flex; flex-direction: column; gap: 0.6cqw"><span style="font-size: 6.4cqw; font-weight: 700; white-space: nowrap">26%<svg aria-hidden="true" viewBox="0 0 50 22" style="display: inline-block; width: 1.25em; height: 0.6em; margin: 0 0.12em; vertical-align: 0.08em; overflow: visible"><path d="M2 13 C 13 10, 28 9.5, 45 11.5" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/><path d="M35 3.5 C 40 6.5, 44 9, 47.5 11.5 C 43.5 14, 39.5 16.5, 35.5 19.5" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>46%</span><span style="font-size: 3.4cqw; font-weight: 500; color: #3A3A38">понимают цену (comprehension rate)</span></div>
    <div style="display: flex; flex-direction: column; gap: 0.6cqw"><span style="font-size: 6.4cqw; font-weight: 700; white-space: nowrap">−8%</span><span style="font-size: 3.4cqw; font-weight: 500; color: #3A3A38">bounce rate выдачи</span></div>
  </div>

</div>

<section id="context" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Контекст</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Карточка врача на выдаче — место, где пользователь сравнивает врачей и решает, к кому записаться. К началу работы у неё накопились две проблемы.</p>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px"><b style="color: #111111; font-weight: 600">Семь A/B-тестов без полноценного успеха.</b> Последние два закончились дефолтным результатом. Отдельные фичи не двигали CR1, но улучшали более чувствительные метрики, и их выкатывали по одной. Решения принимали по бизнес-метрикам: в последних тестах не считали даже переходы на страницу врача и переток трафика.</p>
  <figure style="margin: 12px 0 0; display: flex; flex-direction: column; gap: 10px">
    <div class="trio">
      <div style="aspect-ratio: 3 / 4; background: #F4F4F2; border-radius: 20px; padding: 14px; box-sizing: border-box; display: flex; align-items: center; justify-content: center"><img src="/media/doctor/prodovaya-kartochka-vracha.webp" alt="Продовая карточка врача" style="display: block; max-width: 100%; max-height: 100%; object-fit: contain"></div>
      <div style="aspect-ratio: 3 / 4; background: #F4F4F2; border-radius: 20px; padding: 14px; box-sizing: border-box; display: flex; align-items: center; justify-content: center"><img src="/media/doctor/kartochka-iz-6-go.webp" alt="Карточка из 6-го A/B-теста" style="display: block; max-width: 100%; max-height: 100%; object-fit: contain"></div>
      <div style="aspect-ratio: 3 / 4; background: #F4F4F2; border-radius: 20px; padding: 14px; box-sizing: border-box; display: flex; align-items: center; justify-content: center"><img src="/media/doctor/kartochka-iz-7-go.webp" alt="Карточка из 7-го A/B-теста" style="display: block; max-width: 100%; max-height: 100%; object-fit: contain"></div>
    </div>
    <figcaption style="font-size: 13px; color: #6B6B6B; line-height: 1.4">Прод, 6-й и 7-й эксперименты: у последних двух дефолтный результат.</figcaption>
  </figure>
  <p style="margin: 12px 0 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px"><b style="color: #111111; font-weight: 600">Карточка-франкенштейн.</b> Она собрана из компонентов старой и новой дизайн-систем. Поддерживать такую карточку дорого: правки и новые фичи занимают больше времени и у разработчиков, и у дизайнеров.</p>

</section>

<section id="approach" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Подход</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Вместо восьмого теста мы с продуктовым исследователем проверили, как пользователи воспринимают карточку.</p>
  <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.55; font-size: 16px; max-width: 620px">
    <span>✦ Сравнивали четыре варианта: прод, неудачный A/B-вариант и два редизайна.</span>
    <span>✦ Провели 9 модерируемых интервью с пользователями и не пользователями сервиса.</span>
    <span>✦ Запустили два опроса по 100 человек: «редизайны против прода» и «битва редизайнов».</span>
  </div>
  <figure style="margin: 12px 0 0; display: flex; flex-direction: column; gap: 10px">
    <div style="background: #F4F4F2; border-radius: 24px; padding: 20px 16px; box-sizing: border-box">
      <img src="/media/doctor/chetyre-testiruemye-kartochki-na.webp" alt="Четыре тестируемые карточки на телефонах: прод, A/B-вариант, редизайн 1 и редизайн 2" style="display: block; width: 100%; height: auto; mix-blend-mode: multiply">
    </div>
    <figcaption style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; font-size: 13px; color: #6B6B6B; line-height: 1.3; text-align: center"><span>Прод</span><span>A/B-вариант без роста CR</span><span>Редизайн 1</span><span>Редизайн 2</span></figcaption>
  </figure>

</section>

<section id="findings" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Что выяснили</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Прод проигрывает редизайнам почти во всех вопросах опроса: его чаще всего называли устаревшим, а цену, акцию и рейтинг в нём понимали хуже.</p>
  <div style="overflow-x: auto; margin-top: 4px">
    <table class="survey" style="width: 100%; min-width: 520px; border-collapse: collapse; font-size: 14px; line-height: 1.4">
      <thead>
        <tr><th>Вопрос опроса, n=100</th><th class="n">Прод</th><th class="n">Редизайн 1</th><th class="n">Редизайн 2</th></tr>
      </thead>
      <tbody>
        <tr><td>Какой вариант самый устаревший</td><td class="n" style="font-weight: 600">49%</td><td class="n">23%</td><td class="n">28%</td></tr>
        <tr><td>Какой вариант самый современный</td><td class="n">21%</td><td class="n" style="font-weight: 600">43%</td><td class="n">36%</td></tr>
        <tr><td>Где проще понять рейтинг врача</td><td class="n">27%</td><td class="n" style="font-weight: 600">41%</td><td class="n">32%</td></tr>
        <tr><td>Где проще понять итоговую цену со скидками</td><td class="n">26%</td><td class="n" style="font-weight: 600">46%</td><td class="n">28%</td></tr>
        <tr><td>Где акция лучше связана с ценой</td><td class="n">24%</td><td class="n" style="font-weight: 600">51%</td><td class="n">25%</td></tr>
        <tr><td>Где проще понять расположение клиники</td><td class="n">29%</td><td class="n">22%</td><td class="n" style="font-weight: 600">49%</td></tr>
        <tr><td>Где информация о клинике менее перегружена</td><td class="n">20%</td><td class="n">34%</td><td class="n" style="font-weight: 600">46%</td></tr>
      </tbody>
    </table>
  </div>
  <p style="margin: 0; font-size: 13px; color: #6B6B6B; line-height: 1.4; max-width: 620px">Жирным — лидер по вопросу. Единственное исключение — расположение клиники: прод опередил редизайн 1, но уступил редизайну 2.</p>
  <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px; max-width: 620px">
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px"><b style="color: #111111; font-weight: 600">Слишком много всего.</b> Мелкое фото, мелкий шрифт и плотные элементы: важные данные теряются, а выбор врача утомляет.</p>
    <blockquote style="margin: 0; padding: 18px 20px; background: #F4F4F2; border-radius: 16px; font-size: 16px; line-height: 1.55">«Это очень много информации. Я вот сижу на работе, захотела записаться ко врачу, открою на обеденном перерыве вот такой высоконагруженный интерфейс и закрою его.»<span style="display: block; margin-top: 8px; font-size: 13px; color: #6B6B6B">— респондент, 35 лет</span></blockquote>
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px"><b style="color: #111111; font-weight: 600">Рейтинг в процентах не читается.</b> 64% хотят видеть оценку числом, 26% — звёздами без цифры. Один респондент заметил, что «97% рекомендуют» работает как тёмный паттерн: звучит почти как 100%, хотя это 4,5 из 5.</p>
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px"><b style="color: #111111; font-weight: 600">Цена и акция живут отдельно.</b> Бейдж «Зимние скидки» стоит далеко от цены, и непонятно, суммируются ли акции. Сезонную акцию путали с постоянной скидкой на первый приём.</p>
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px"><b style="color: #111111; font-weight: 600">Метро подходит не всем.</b> Пользователям из регионов схема веток и названия станций ничего не говорят. По расстоянию мнения разделились: по времени удобнее 29%, по метрам 29%, оба формата — 36%.</p>
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px"><b style="color: #111111; font-weight: 600">Не все элементы помогают выбирать.</b> Категорию врача 57% считают скорее важной, но 50% не до конца понимают, что она значит, а 12% не понимают совсем. Баннер «Гарантия качества» выглядел как реклама и вызывал сомнения в качестве услуги.</p>
  </div>

</section>

<section id="solution" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Решение</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Оба редизайна получили позитивную реакцию, но выигрывали в разном: редизайн 1 в понятности и быстром сравнении врачей, редизайн 2 в доверии и эмоциях, а его фото и блок клиники понравились больше. В «битве редизайнов» голоса разделились почти поровну: 52% и 48%. Финальную карточку я собрал как гибрид.</p>
  <img src="/media/doctor/finalnaya-kartochka-vracha-foto.webp" alt="Финальная карточка врача: фото среднего размера, рейтинг числом, цена со скидкой в одной строке, слоты и клиника с метро" style="display: block; width: 100%; height: auto; margin-top: 12px; border-radius: 24px; background: #F4F4F2">
  <div style="display: flex; flex-wrap: wrap; gap: 24px 40px; margin-top: 12px">
    <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 8px">
      <span style="font-weight: 600; font-size: 15px">Что вошло</span>
      <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.5; font-size: 15px; color: #444444">
        <span>✦ Компактная структура из редизайна 1 и фото среднего размера. Крупное фото перетягивало внимание с цены и клиники.</span>
        <span>✦ Рейтинг числом рядом с количеством отзывов.</span>
        <span>✦ Цена, старая цена и скидка в одной строке: акция читается как часть цены.</span>
        <span>✦ Слоты записи компактнее: одна строка вместо двух.</span>
        <span>✦ Название клиники со ссылкой и расстояние до метро в метрах и километрах вместо минут.</span>
        <span>✦ Избранное в привычном месте справа вверху.</span>
      </div>
    </div>
    <div style="flex: 1 1 240px; display: flex; flex-direction: column; gap: 8px">
      <span style="font-weight: 600; font-size: 15px">Что убрали</span>
      <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.5; font-size: 15px; color: #444444">
        <span>✕ Категорию врача и учёную степень: слабо влияли на выбор и перегружали карточку.</span>
        <span>✕ Баннер «Гарантия качества»: на выдаче выглядел как реклама.</span>
        <span>✕ Логотип и рейтинг клиники. Рейтинг клиники перенесли на страницу врача.</span>
      </div>
    </div>
  </div>

</section>

<section id="result" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Финальный результат</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Новая карточка в проде: CR1 вырос на 10%, bounce rate выдачи снизился на 8%, карточка целиком собрана на компонентах новой дизайн-системы.</p>
  <div style="margin-top: 12px; aspect-ratio: 16 / 10; background: #F4F4F2; border-radius: 24px; overflow: hidden; display: flex; justify-content: center; align-items: flex-start; container-type: inline-size">
    <div style="position: relative; width: 40%; flex: 0 0 auto; margin-top: 5cqw; border: 1.6cqw solid #1C1C1E; border-radius: 7cqw; overflow: hidden; background: #FFFFFF; box-shadow: 0 2cqw 6cqw rgba(17, 17, 17, 0.12)">
      <img src="/media/doctor/finalnaya-kartochka-vracha-v.webp" alt="Финальная карточка врача в выдаче на телефоне" style="display: block; width: 100%; height: auto">
      <span aria-hidden="true" style="position: absolute; top: 1.4cqw; left: 50%; transform: translateX(-50%); width: 30%; height: 3.6cqw; border-radius: 3cqw; background: #1C1C1E"></span>
    </div>
  </div>
  <div class="nums" style="margin-top: 4px">
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">+10%</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">CR1 выдача → запись</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">−8%</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">bounce rate выдачи</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">26% → 46%</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">понятность итоговой цены, опрос n=100</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">0</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">компонентов старой дизайн-системы</span></div>
  </div>

</section>

<section id="takeaways" style="display: flex; flex-direction: column; gap: 12px; max-width: 620px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Выводы</h2>
  <ol style="margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; line-height: 1.55; font-size: 16px; color: #444444">
    <li>Когда A/B-тесты не дают результата, стоит вернуться к вопросу «что понимает пользователь», а не запускать ещё один тест.</li>
    <li>Каждый элемент карточки должен помогать выбирать: категория врача и баннер «Гарантия качества» только перегружали её.</li>
    <li>Дизайн-система влияет и на скорость команды: один набор компонентов упрощает правки и новые фичи.</li>
  </ol>

</section>
