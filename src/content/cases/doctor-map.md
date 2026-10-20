---
title: "Карта врачей"
company: sberhealth
year: "2026"
order: 3
nextCase: pay-form
seoTitle: "Карта врачей — кейс"
meta: "СберЗдоровье · 2026 · iOS, Android"
heading: "Карта врачей: от кнопки, которую находил один из девяти, к инструменту записи"
lead: "Редизайн геопоиска врача в мобильном приложении СберЗдоровья. Начинали с задачи «обновить визуал карты», а пришли к новой роли карты в сценарии записи."
toc:
  - id: task
    label: "Задача"
  - id: research
    label: "Исследование"
  - id: solution
    label: "Решение"
  - id: edge-cases
    label: "Проработка кейсов"
  - id: styling
    label: "Стилизация карты"
  - id: contribution
    label: "Мой вклад"
  - id: result
    label: "Результат"
  - id: takeaways
    label: "Что я вынес"
card:
  cover:
    kind: map-slides
    slides:
      - src: "/media/map/slide-1-spisok.webp"
        alt: "Список врачей с картой кластеров сверху"
      - src: "/media/map/slide-2-karta.webp"
        alt: "Карта Москвы с кластерами клиник"
      - src: "/media/map/slide-3-kliniki.webp"
        alt: "Клиники на карте с рейтингом, числом врачей и ценой"
      - src: "/media/map/slide-4-shtorka.webp"
        alt: "Шторка клиники с врачами и слотами записи"
  meta: "СберЗдоровье · 2026 · iOS, Android · в разработке"
  title: "Перепридумал карту врачей: из спрятанной кнопки — в инструмент записи"
  lead: "Картой пользовались в 5,4% сессий, и 8 из 9 респондентов не находили вход. Вынес карту на выдачу, научил пин отвечать на вопросы и дал записаться прямо с карты."
---

<div style="position: relative; aspect-ratio: 16 / 10; background: #F4F4F2; border-radius: 24px; overflow: hidden; container-type: inline-size">
  <div style="position: absolute; left: 0px; top: 1.76cqw; width: 35.4cqw; border: 1.4cqw solid #1C1C1E; border-radius: 6cqw; overflow: hidden; background: #FFFFFF; box-shadow: 0 2cqw 6cqw rgba(17, 17, 17, 0.12); height: 76.35cqw; right: 0px; margin-left: auto; margin-right: auto">
    <img class="map-anim" src="/media/map/slide-1-spisok.webp" alt="Список врачей с картой кластеров сверху" style="display: block; width: 100%; height: auto; animation: mapS1 12s ease-in-out infinite">
    <img class="map-anim" src="/media/map/slide-2-karta.webp" alt="Карта Москвы с кластерами клиник" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transform-origin: 55% 45%; animation: mapS2 12s ease-in-out infinite">
    <img class="map-anim" src="/media/map/slide-3-kliniki.webp" alt="Клиники на карте с рейтингом, числом врачей и ценой" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transform-origin: 50% 45%; animation: mapS3 12s ease-in-out infinite">
    <img class="map-anim" src="/media/map/slide-4-shtorka.webp" alt="Шторка клиники с врачами и слотами записи" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; animation: mapS4 12s ease-in-out infinite">
    <span aria-hidden="true" style="position: absolute; top: 1.2cqw; left: 50%; transform: translateX(-50%); width: 30%; height: 3cqw; border-radius: 3cqw; background: #1C1C1E"></span>
  </div>

</div>

<div class="meta" style="padding: 20px 0; border-top: 1px solid #EDEDEA; border-bottom: 1px solid #EDEDEA">
  <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 12px; color: rgb(138, 138, 134)">Роль</span><span style="line-height: 1.4">Ведущий дизайнер</span></div>
  <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 12px; color: #8A8A86">Команда</span><span style="line-height: 1.4">Продакт, исследователь, системный аналитик, iOS, Android, бэкенд</span></div>
  <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 12px; color: #8A8A86">Платформы</span><span style="line-height: 1.4">iOS, Android</span></div>
  <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 12px; color: #8A8A86">Статус</span><span style="line-height: 1.4">В разработке</span></div>

</div>

<section id="task" style="display: flex; flex-direction: column; gap: 12px; max-width: 620px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Задача</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px">Картой пользовались в <b style="color: #111111; font-weight: 600">5,4% сессий</b> поиска очного врача (Москва и МО, 2026 год). Часть этих пользователей по нескольку раз за сессию возвращалась с карты обратно в список.</p>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px">Исходная постановка звучала как «обновить визуал карты». Я хотел сначала понять, что на самом деле не работает.</p>

</section>

<section id="research" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Исследование</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Вместе с продуктовым исследователем провели юзабилити-тесты на девяти респондентах и разобрали карты в пяти категориях сервисов: недвижимость, отели, навигация, запись на услуги и Сбербанк Онлайн. Выборка небольшая и отвечает на вопрос «почему», а не «сколько».</p>
  <div class="stats" style="margin-top: 4px">
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 6px"><span style="font-size: 22px; font-weight: 600">8 из 9</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">не нашли вход в карту</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 6px"><span style="font-size: 22px; font-weight: 600">9 из 9</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">не поняли, применились ли фильтры</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 6px"><span style="font-size: 22px; font-weight: 600">9 из 9</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">увидели карту на весь город вместо выбранного метро</span></div>
    <div style="background: #F4F4F2; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 6px"><span style="font-size: 22px; font-weight: 600">9 из 9</span><span style="font-size: 12px; color: #6B6B6B; line-height: 1.35">не поняли цену и рейтинг на пине</span></div>
  </div>
  <p style="margin: 0; font-size: 13px; color: #6B6B6B; line-height: 1.4">К кластерам вопросов не было.</p>
  <figure style="margin: 16px 0 0; display: flex; flex-direction: column; gap: 10px">
    <div style="background: #F4F6FA; border-radius: 20px; overflow: hidden; display: flex; justify-content: center; margin-top: 8px; padding: 24px"><img src="/media/map/dva-ekrana-staroy-karty.webp" alt="Два экрана старой карты с разными наборами фильтров" style="display: block; width: 100%; max-width: 440px; height: auto; mix-blend-mode: multiply"></div>
    <figcaption style="font-size: 13px; color: #6B6B6B; line-height: 1.4; max-width: 620px">Два экрана старой карты с разными наборами фильтров. Чем они отличаются? Не ответил никто. Исследование, апрель 2026.</figcaption>
  </figure>
  <div style="margin-top: 16px; padding: 22px 24px; background: #F4F4F2; border-radius: 16px; display: flex; flex-direction: column; gap: 10px; max-width: 620px">
    <span style="font-size: 12px; color: #8A8A86">Главный инсайт</span>
    <span style="font-size: 20px; line-height: 1.35; font-weight: 600">Карта работает не как каталог, а как способ проверить уже сделанный выбор.</span>
    <span style="line-height: 1.55; color: #444444">К ней приходят в конце, когда человек уже сравнил врачей и хочет понять, удобно ли ехать.</span>
  </div>
  <blockquote style="margin: 4px 0 0; padding: 0 0 0 20px; border-left: 2px solid #DADAD5; font-size: 16px; line-height: 1.55; max-width: 600px">«Лучше воспринимается информация, когда я вижу дом на карте, чем когда мне говорят „улица Ленина, 19“».<span style="display: block; margin-top: 6px; font-size: 13px; color: #6B6B6B">Андрей, 32 года</span></blockquote>

</section>

<section id="solution" style="display: flex; flex-direction: column; gap: 40px">
  <div style="display: flex; flex-direction: column; gap: 12px">
    <h2 style="margin: 0; font-size: 17px; font-weight: 600">Решение</h2>
    <div style="background: #F4F6FA; border-radius: 20px; overflow: hidden; display: flex; justify-content: center; margin-top: 8px"><img src="/media/map/novaya-karta-vrachey-vydacha.webp" alt="Новая карта врачей: выдача с картой, карта на уровне города, пины клиник, карточка клиники" style="display: block; width: 100%; height: auto"></div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <span style="font-weight: 600; font-size: 16px">01 · Карта живёт на выдаче</span>
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Убрал спрятанную кнопку входа. Карта занимает 35–40% высоты экрана выдачи, ниже — список врачей.</p>
    <div style="background: #F4F6FA; border-radius: 20px; overflow: hidden; display: flex; justify-content: center; margin-top: 8px"><img src="/media/map/novyy-ekran-vydachi-karta.webp" alt="Новый экран выдачи: карта сверху, список врачей снизу" style="display: block; width: 100%; max-width: 300px; height: auto"></div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <span style="font-weight: 600; font-size: 16px">02 · Карта и список — одна сущность</span>
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Скролл вверх — список заезжает поверх карты. Скролл вниз или тап по карте — полноэкранный режим. Фильтры применяются к обоим режимам одновременно.</p>
    <div style="background: #F4F6FA; border-radius: 20px; overflow: hidden; display: flex; justify-content: center; margin-top: 8px"><img src="/media/map/dva-sostoyaniya-vydachi-karta.webp" alt="Два состояния выдачи: карта вместе со списком и полная карта" style="display: block; width: 100%; max-width: 560px; height: auto"></div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <span style="font-weight: 600; font-size: 16px">03 · Пин отвечает на вопросы</span>
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Было: цена и звёзды. Стало: название клиники, рейтинг цифрой, количество подходящих врачей и цена «от».</p>
    <div style="background: #F4F6FA; border-radius: 20px; overflow: hidden; display: flex; justify-content: center; margin-top: 8px"><img src="/media/map/staryy-i-novyy-pin.webp" alt="Старый и новый пин на карте" style="display: block; width: 100%; height: auto"></div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <span style="font-weight: 600; font-size: 16px">04 · Запись прямо из карты</span>
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Тап по пину открывает карточку клиники со списком врачей и слотами. Записаться можно, не покидая карты.</p>
    <div style="background: #F4F6FA; border-radius: 20px; overflow: hidden; display: flex; justify-content: center; margin-top: 8px"><img src="/media/map/tap-po-pinu-otkryvaet.webp" alt="Тап по пину открывает шторку с карточкой клиники" style="display: block; width: 100%; max-width: 560px; height: auto"></div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <span style="font-weight: 600; font-size: 16px">05 · Карта не показывает пустоту</span>
    <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Если на выбранной станции нет клиник, карта сама расширяет радиус и объясняет это тостом. Отдельно отрисованы загрузка, ошибки, пустые результаты и частичные сбои: карта и выдача грузятся независимо, и каждая может упасть сама по себе.</p>
    <div style="background: #F4F6FA; border-radius: 20px; overflow: hidden; display: flex; justify-content: center; margin-top: 8px"><img src="/media/map/pustaya-karta-net-zapisi.webp" alt="Пустая карта, нет записи на дату, нет интернета, ничего не нашли" style="display: block; width: 100%; height: auto"></div>
  </div>

</section>

<section id="edge-cases" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Проработка кейсов</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Основной сценарий карты умещается в несколько экранов. Большая часть работы ушла на вопрос «а если…»: если клиник нет, если часть данных не загрузилась, если пины налезают друг на друга. В итоге спецификация для разработки состоит больше из краевых случаев, чем из «счастливого» пути.</p>
  <a href="/media/map/specifikatsiya-karty.webp" target="_blank" rel="noopener" style="display: block; margin-top: 8px; border-radius: 20px; overflow: hidden; background: #1E1E1E"><img src="/media/map/specifikatsiya-karty.webp" alt="Спецификация в Figma: выдача «список + карта сверху», карта в режиме приближения и карточки клиник, полный список, общие правила состояний, поведение шторки и логика кластеризации" style="display: block; width: 100%; height: auto"></a>
  <p style="margin: 0; font-size: 13px; color: #6B6B6B; line-height: 1.4">Спецификация в Figma. Слева направо: выдача «список + карта сверху», карта в режиме приближения с карточками клиник, полный список и документы с общими правилами состояний, поведением шторки и логикой кластеризации. Нажмите, чтобы открыть крупно.</p>
  <div class="g2" style="align-items: stretch; margin-top: 12px">
    <div style="display: flex; flex-direction: column; gap: 6px; padding: 18px; border-radius: 18px; background: #F4F4F2"><span style="font-weight: 600; font-size: 15px">Данные не загрузились</span><span style="line-height: 1.55; color: #444444; font-size: 15px">Карта и выдача грузятся независимо, поэтому у каждой части своё состояние: скелетоны, карта без выдачи и наоборот. Ошибки тоже разные: упала карта, упала выдача, упало всё сразу, нет интернета.</span></div>
    <div style="display: flex; flex-direction: column; gap: 6px; padding: 18px; border-radius: 18px; background: #F4F4F2"><span style="font-weight: 600; font-size: 15px">Результатов нет</span><span style="line-height: 1.55; color: #444444; font-size: 15px">На выбранной станции нет клиник — карта снимает фильтр станции, отъезжает и объясняет это тостом. Для выдачи два разных текста: запись на сегодня закончилась или нет слотов на другую дату.</span></div>
    <div style="display: flex; flex-direction: column; gap: 6px; padding: 18px; border-radius: 18px; background: #F4F4F2"><span style="font-weight: 600; font-size: 15px">Геолокация</span><span style="line-height: 1.55; color: #444444; font-size: 15px">Без доступа к геопозиции кнопка «Рядом» предупреждает, что клиники могут отображаться неточно. Если рядом мало клиник, масштаб расширяется ступенями: 15 → 14 → 13, а при меньше чем четырёх клиниках в кадре виден весь город.</span></div>
    <div style="display: flex; flex-direction: column; gap: 6px; padding: 18px; border-radius: 18px; background: #F4F4F2"><span style="font-weight: 600; font-size: 15px">Плотная застройка</span><span style="line-height: 1.55; color: #444444; font-size: 15px">У клиник в одном здании одинаковые координаты, и пины накладываются — их разводим на 13 метров. Тап по кластеру переводит на следующую ступень: город, округ, район, улица.</span></div>
    <div style="display: flex; flex-direction: column; gap: 6px; padding: 18px; border-radius: 18px; background: #F4F4F2"><span style="font-weight: 600; font-size: 15px">Пин и список совпадают</span><span style="line-height: 1.55; color: #444444; font-size: 15px">Карта и выдача фильтруются по одним параметрам. Цена на пине — самая низкая среди подошедших врачей, без вариантов «по запросу».</span></div>
    <div style="display: flex; flex-direction: column; gap: 6px; padding: 18px; border-radius: 18px; background: #F4F4F2"><span style="font-weight: 600; font-size: 15px">Жесты и режимы</span><span style="line-height: 1.55; color: #444444; font-size: 15px">Скролл, тап по карте, попытка зума и переключение карта/список прописаны как отдельные переходы. Сортировка на карте не работает, но не убрана, чтобы панель фильтров не прыгала, — об этом сообщает снекбар.</span></div>
  </div>
  <p style="margin: 8px 0 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Всё это ушло в разработку одной спецификацией: экраны, общие правила состояний, поведение шторки и логика кластеризации. Разработчикам не нужно угадывать, что показать, когда что-то пошло не по плану.</p>
</section>

<section id="styling" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Стилизация карты</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px; max-width: 620px">Контраст пинов зависит от карты под ними, поэтому я настраивал оформление самого полотна в 2ГИС: карта должна работать спокойной подложкой, а пины — оставаться главным объектом внимания. Работы оказалось много. Карта стала заметно спокойнее, а <b style="color: #111111; font-weight: 600">контраст пинов значительно вырос</b>.</p>
  <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 8px; background: #F4F6FA; border-radius: 20px; overflow: hidden">
    <img src="/media/map/karta-do-i-posle.webp" alt="Карта до и после на уровне города" style="display: block; width: 100%; height: auto">
    <img src="/media/map/karta-do-i-posle-2.webp" alt="Карта до и после на высоком зуме" style="display: block; width: 100%; height: auto">
  </div>
  <p style="margin: 0; font-size: 13px; color: #6B6B6B; line-height: 1.4">Слева — уровень города, справа — высокий зум. Было: версия из исследования, апрель 2026. Стало: финальные экраны.</p>

</section>

<section id="contribution" style="display: flex; flex-direction: column; gap: 12px; max-width: 620px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Мой вклад</h2>
  <div style="display: flex; flex-direction: column; gap: 8px; line-height: 1.55; font-size: 16px; color: #444444"><span>✦ Спроектировал новые состояния и логику взаимодействия</span>
    <span>✦ Согласовывал с разработкой решения вроде ступенчатого зума и разведения совпадающих пинов</span>
    <span>✦ Настроил стиль карты в 2ГИС</span>
    <span>✦ Сопровождал разработку и проверял реализацию на обеих платформах</span>
  </div>

</section>

<section id="result" style="display: flex; flex-direction: column; gap: 12px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Результат</h2>
  <div style="display: flex; gap: 14px; align-items: flex-start; padding: 18px 20px; border-radius: 16px; background: #111111; color: #FFFFFF; max-width: 620px">
    <span style="flex: 0 0 auto; width: 36px; height: 36px; border-radius: 10px; background: rgba(255, 255, 255, 0.12); display: flex; align-items: center; justify-content: center"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg></span>
    <span style="display: flex; flex-direction: column; gap: 4px">
      <span style="font-weight: 600; font-size: 16px">Данные закрыты до релиза</span>
      <span style="font-size: 14px; line-height: 1.5; color: rgba(255, 255, 255, 0.72)">Карта в разработке — цифры откроются после запуска. Но одно уже есть: у карты впервые появилась воронка, раньше посчитать конверсию из карты в запись было нельзя.</span>
    </span>
  </div>
  <div class="locked" style="margin-top: 4px">
    <div style="background: #F4F4F2; border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 10px">
      <span style="font-size: 13px; line-height: 1.35; color: #444444">Доля сессий с картой</span>
      <span style="position: relative; display: flex; align-items: center; height: 34px">
        <span aria-hidden="true" style="font-size: 26px; font-weight: 600; filter: blur(7px); user-select: none; color: #111111">00,0%</span>
        <span style="position: absolute; left: 0; display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 999px; background: #FFFFFF; color: #111111; font-size: 12px; font-weight: 500; box-shadow: 0 1px 4px rgba(17, 17, 17, 0.08)"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg><span>закрыто</span></span>
      </span>
      <span style="font-size: 12px; color: #6B6B6B">было 5,4%</span>
    </div>
    <div style="background: #F4F4F2; border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 10px">
      <span style="font-size: 13px; line-height: 1.35; color: #444444">Переключения карта ↔ список за сессию</span>
      <span style="position: relative; display: flex; align-items: center; height: 34px">
        <span aria-hidden="true" style="font-size: 26px; font-weight: 600; filter: blur(7px); user-select: none; color: #111111">00,0%</span>
        <span style="position: absolute; left: 0; display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 999px; background: #FFFFFF; color: #111111; font-size: 12px; font-weight: 500; box-shadow: 0 1px 4px rgba(17, 17, 17, 0.08)"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg><span>закрыто</span></span>
      </span>
      <span style="font-size: 12px; color: #8A8A86">появится после релиза</span>
    </div>
    <div style="background: #F4F4F2; border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 10px">
      <span style="font-size: 13px; line-height: 1.35; color: #444444">Конверсия «карточка врача → запись»</span>
      <span style="position: relative; display: flex; align-items: center; height: 34px">
        <span aria-hidden="true" style="font-size: 26px; font-weight: 600; filter: blur(7px); user-select: none; color: #111111">00,0%</span>
        <span style="position: absolute; left: 0; display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 999px; background: #FFFFFF; color: #111111; font-size: 12px; font-weight: 500; box-shadow: 0 1px 4px rgba(17, 17, 17, 0.08)"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg><span>закрыто</span></span>
      </span>
      <span style="font-size: 12px; color: #8A8A86">появится после релиза</span>
    </div>
  </div>

</section>

<section id="takeaways" style="display: flex; flex-direction: column; gap: 14px; max-width: 620px">
  <h2 style="margin: 0; font-size: 17px; font-weight: 600">Что я вынес</h2>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px"><b style="color: #111111; font-weight: 600">Сначала проверяй проблему, потом решение.</b> Мы собирались чинить кластеры, а они были единственным, что работало.</p>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px"><b style="color: #111111; font-weight: 600">Роль функции в сценарии определяет дизайн.</b> Карта для поиска и карта для проверки выбора требуют разного.</p>
  <p style="margin: 0; line-height: 1.6; color: #444444; font-size: 16px"><b style="color: #111111; font-weight: 600">Фон важен не меньше объекта.</b> Контраст пина зависит от карты под ним, и этим тоже нужно заниматься дизайнеру.</p>

</section>
