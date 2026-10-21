---
title: "Платёжная форма Долями"
company: dolyami
year: "2023"
order: 5
nextCase: catalog
seoTitle: "Платёжная форма Долями — кейс"
meta: "Долями · Т-Банк · 2023–2024 · web"
heading: "Платёжная форма Долями: повышенный платёж вместо отказа"
lead: "Часть покупателей нажимала «Оплатить Долями», доходила до графика платежей и получала одинаковый экран ошибки — бизнес терял деньги. Мы разобрали все сценарии отказа и почти в каждом нашли способ дать оплатить покупку."
toc:
  - id: tasks
    label: "Задачи"
  - id: problem
    label: "Проблема"
  - id: research
    label: "Исследование"
  - id: tests
    label: "Прототипы и тесты"
  - id: scoring
    label: "Новый скоринг"
  - id: result
    label: "Результат"
  - id: flow
    label: "Кусочки флоу"
card:
  cover:
    kind: image
    src: "/media/payform/cover.webp"
    alt: "Платёжная форма Долями: экран «Сумма покупки больше вашего лимита» и шторка с объяснением лимита"
  meta: "Долями · Т-Банк · 2023–2024 · web"
  title: "Платёжная форма: повышенный платёж вместо отказа"
  lead: "Разобрали все сценарии отказа в оплате Долями и почти в каждом дали оплатить: недостающий лимит добавляется к первому платежу. Механику объяснили на экранах и проверили на респондентах."
---

<img data-cover src="/media/payform/cover.webp" alt="Экран «Сумма покупки больше вашего лимита на 3 000 ₽» и шторка с объяснением лимита" style="display: block; width: 100%; height: auto; border-radius: 24px">

<section id="tasks" style="display: flex; flex-direction: column; gap: 12px; max-width: 620px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Задачи</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px">В Долями я развивал платёжную форму, сайт для b2c- и b2b-клиентов, личный кабинет, каталог товаров в приложении и вебе и дизайн-систему. По платёжной форме задач было четыре:</p>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <span style="padding: 8px 12px; border-radius: 10px; background: #F4F4F2; font-size: 13px">Конверсия в оплату</span>
    <span style="padding: 8px 12px; border-radius: 10px; background: #F4F4F2; font-size: 13px">Визуальный редизайн</span>
    <span style="padding: 8px 12px; border-radius: 10px; background: #F4F4F2; font-size: 13px">Кросс-сейл продуктов банка</span>
    <span style="padding: 8px 12px; border-radius: 10px; background: #111111; color: #FFFFFF; font-size: 13px">Новый скоринг и повышенный платёж</span>
  </div>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px">Подробно расскажу о последней, остальное покажу макетами.</p>

</section>

<section id="problem" style="display: flex; flex-direction: column; gap: 12px; max-width: 620px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Проблема</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px">Ко мне пришла команда продакт-менеджеров формы. Часть пользователей нажимала «Оплатить» Долями, доходила до экрана с графиком платежей — и получала одинаковый экран ошибки, без объяснений. Каждый такой отказ — потерянная покупка.</p>
  <div style="padding: 20px 22px; background: #F4F4F2; border-radius: 16px; display: flex; flex-direction: column; gap: 8px">
    <span style="font-size: 12px; color: #8A8A86">Задача</span>
    <span style="font-size: 17px; line-height: 1.45; font-weight: 500">Найти все сценарии отказа, научиться их валидировать, понятно объяснить пользователю, что произошло, и уменьшить долю отказов в оплате Долями.</span>
  </div>

</section>

<section id="research" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Исследование</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Собрал продакт-менеджеров и аналитиков, и вместе мы разобрали все сценарии отказа. Выяснилось, что почти в каждом можно дать оплатить, если ввести <b style="color: #111111; font-weight: 600">повышенный первый платёж</b>.</p>
  <span style="font-size: 13px; color: #8A8A86; margin-top: 8px">Пример одного из сценариев</span>
  <div class="calc">
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">8 000 ₽</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">сумма заказа</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">30 000 ₽</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">лимит на покупки</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">25 000 ₽</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">уже потрачено</span></div>
    <div style="background: #111111; color: #FFFFFF; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 22px; font-weight: 600">−3 000 ₽</span><span style="font-size: 12px; color: rgba(255, 255, 255, 0.72); line-height: 1.35">не хватает лимита</span></div>
  </div>
  <p style="margin: 4px 0 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Раньше такому покупателю просто отказывали. Теперь недостающие 3 000 ₽ добавляются к первому платежу — и покупка проходит.</p>
  <p style="margin: 0; line-height: 1.6; font-size: 16px; font-weight: 600; max-width: 620px">Главный вопрос: как объяснить эту механику так, чтобы человек её понял?</p>

</section>

<section id="tests" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Прототипы и тесты</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Собрал концепты экранов и протестировал их в Pathway на живых респондентах. Поправил всё, что всплыло, и повторил тесты уже на полном флоу в интерактивных прототипах. Экран выше — итог для сценария с собственным лимитом Долями. А так выглядит сценарий с партнёрским лимитом: он может отличаться от лимита Долями.</p>
  <img src="/media/payform/ekran-summa-pokupki-bolshe.webp" alt="Экран «Сумма покупки больше лимита на 2 000 ₽» для партнёрского лимита KazanExpress и шторка с объяснением" style="display: block; width: 100%; height: auto; margin-top: 8px; border-radius: 24px">

</section>

<section id="scoring" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Все сценарии и новый скоринг</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">В итоге получилось семь сценариев скоринга: от «клиент прошёл» до разных вариантов нехватки лимита и честного отказа.</p>
  <img src="/media/payform/sem-stsenariev-skoringa-na.webp" alt="Семь сценариев скоринга на одной схеме" style="display: block; width: 100%; height: auto; margin-top: 8px; border-radius: 20px">
  <p style="margin: 16px 0 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Из-за технических ограничений пришлось поменять и саму механику скоринга: ввод карты переехал до того, как пользователь увидит график платежей.</p>
  <img src="/media/payform/flou-vvoda-karty-pered.webp" alt="Флоу ввода карты перед расчётом графика платежей" style="display: block; width: 100%; height: auto; margin-top: 8px; border-radius: 24px">

</section>

<section id="result" style="display: flex; flex-direction: column; gap: 12px; max-width: 620px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Результат</h2>
  <div style="display: flex; gap: 14px; align-items: flex-start; padding: 18px 20px; border-radius: 16px; background: #111111; color: #FFFFFF">
    <span style="flex: 0 0 auto; width: 36px; height: 36px; border-radius: 10px; background: rgba(255, 255, 255, 0.12); display: flex; align-items: center; justify-content: center"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg></span>
    <span style="display: flex; flex-direction: column; gap: 4px">
      <span style="font-weight: 600; font-size: 16px">Суммы под NDA</span>
      <span style="font-size: 14px; line-height: 1.5; color: rgba(255, 255, 255, 0.72)">По оценкам аналитиков, механика повышенного платежа приносит бизнесу значительный доход. И главное — Долями теперь может воспользоваться больший процент покупателей.</span>
    </span>
  </div>

</section>

<section id="flow" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Кусочки флоу платёжной формы</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Остальную работу над формой показываю макетами: вход через SSO, персональные данные и экран оплаты.</p>
  <span style="font-size: 13px; color: #8A8A86; margin-top: 12px">Вход через SSO: узнали покупателя или нет</span>
  <img src="/media/payform/ekrany-vhoda-cherez-sso.webp" alt="Экраны входа через SSO: приветствие узнанного покупателя, ввод телефона и кода" style="display: block; width: 100%; height: auto; border-radius: 20px">
  <span style="font-size: 13px; color: #8A8A86; margin-top: 12px">Персональные данные: есть данные в SSO или нет</span>
  <img src="/media/payform/ekrany-proverki-i-zapolneniya.webp" alt="Экраны проверки и заполнения персональных данных" style="display: block; width: 100%; height: auto; border-radius: 20px">
  <span style="font-size: 13px; color: #8A8A86; margin-top: 12px">Экран оплаты и успешный заказ</span>
  <img src="/media/payform/ekrany-oplaty-zagruzka-sposobov.webp" alt="Экраны оплаты: загрузка способов оплаты, выбор карты, состав заказа, заказ оплачен" style="display: block; width: 100%; height: auto; border-radius: 20px">

</section>
