$('.hamburger-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('hamburger-btn_active');
  $('.hamburger-nav').toggleClass('hamburger-nav_active');
});

$('.menu-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});

function initMap() {
  const uluru = { lat: 46.48309, lng: 30.733319 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: { lat: 46.485272917764206, lng: 30.741286798572983 },
    map: map,
    title: 'Одесский театр оперы и балета.',
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 46.488108463482185, lng: 30.74116434471096 },
    map: map,
    title: 'Памятник Дюку де Ришелье.',
  });

  const marker3 = new google.maps.Marker({
    position: { lat: 46.488556, lng: 30.742015 },
    map: map,
    title: 'Потемкинская лестница',
  });

  const marker4 = new google.maps.Marker({
    position: { lat: 46.484116821002814, lng: 30.73885295082432 },
    map: map,
    title: 'Дерибасовская улица.',
  });

  const marker5 = new google.maps.Marker({
    position: { lat: 46.48871865776128, lng: 30.740324236628833 },
    map: map,
    title: 'Приморский бульвар.',
  });

  const marker6 = new google.maps.Marker({
    position: { lat: 46.49015352203678, lng: 30.7387986186677 },
    map: map,
    title: 'Воронцовский дворец.',
  });

  const marker7 = new google.maps.Marker({
    position: { lat: 46.49072873332392, lng: 30.73518928317543 },
    map: map,
    title: 'Шахский дворец.',
  });

  const marker8 = new google.maps.Marker({
    position: { lat: 46.48324444342977, lng: 30.73070939968956 },
    map: map,
    title: 'Спасо-Преображенский собор.',
  });

  const marker9 = new google.maps.Marker({
    position: { lat: 46.378462026878296, lng: 30.745075003808836 },
    map: map,
    title: 'Свято-Успенский монастырь.',
  });

  const marker10 = new google.maps.Marker({
    position: { lat: 46.482566505395006, lng: 30.74309984662092 },
    map: map,
    title: 'Одесский музей западного и восточного искусства.',
  });

  const marker11 = new google.maps.Marker({
    position: { lat: 46.493282587284085, lng: 30.728605939485647 },
    map: map,
    title: 'Одесский художественный музей.',
  });

  const marker12 = new google.maps.Marker({
    position: { lat: 46.48514647902629, lng: 30.743956434485796 },
    map: map,
    title: 'Археологический музей.',
  });

  const marker13 = new google.maps.Marker({
    position: { lat: 46.48891064158233, lng: 30.738598596724007 },
    map: map,
    title: 'Дом-стена.',
  });

  const marker14 = new google.maps.Marker({
    position: { lat: 46.489686194683884, lng: 30.735714429642204 },
    map: map,
    title: 'Дом Фальц-Фейна.',
  });

  const marker15 = new google.maps.Marker({
    position: { lat: 46.484181873149254, lng: 30.732901903221386 },
    map: map,
    title: 'Пассаж.',
  });

  const marker16 = new google.maps.Marker({
    position: { lat: 46.48416041733658, lng: 30.735228320683433 },
    map: map,
    title: 'Гостиница Большая Московская.',
  });

  const marker17 = new google.maps.Marker({
    position: { lat: 46.481237388889696, lng: 30.74311728494399 },
    map: map,
    title: 'Гостиница Бристоль.',
  });

  const marker18 = new google.maps.Marker({
    position: { lat: 46.53764141476206, lng: 30.626098885481163 },
    map: map,
    title: 'Одесские катакомбы.',
  });

  const marker19 = new google.maps.Marker({
    position: { lat: 46.49053923985833, lng: 30.73736424679014 },
    map: map,
    title: 'Тещин мост.',
  });

  const marker20 = new google.maps.Marker({
    position: { lat: 46.46932200756048, lng: 30.735107086392244 },
    map: map,
    title: 'Рынок «Привоз».',
  });

  const marker21 = new google.maps.Marker({
    position: { lat: 46.479345657493134, lng: 30.750719753827788 },
    map: map,
    title: 'Парк Шевченко.',
  });

  const marker22 = new google.maps.Marker({
    position: { lat: 46.485116534811404, lng: 30.734532307560244 },
    map: map,
    title: 'Городской сад.',
  });

  const marker23 = new google.maps.Marker({
    position: { lat: 46.47707306458591, lng: 30.765214783976592 },
    map: map,
    title: 'Одесский городской дельфинарий.',
  });

  const marker24 = new google.maps.Marker({
    position: { lat: 46.430534292083784, lng: 30.76186924448369 },
    map: map,
    title: 'Аркадия.',
  });

  const marker25 = new google.maps.Marker({
    position: { lat: 46.49072129501633, lng: 30.745877521664962 },
    map: map,
    title: 'Одесский порт.',
  });
}

window.initMap = initMap;
