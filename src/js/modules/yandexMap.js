/* eslint-disable no-undef */
function yandexMap() {
  const maps = {
    map: document.getElementById('map'),
    settings(map) {
      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
    },
  };

  function init() {
    const map = new ymaps.Map('map', {
      center: [55.744294, 37.611884],
      zoom: 15,
    });
    maps.settings(map);
  }

  maps.map && ymaps.ready(init);
}

export default yandexMap;
