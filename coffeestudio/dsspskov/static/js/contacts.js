function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [57.83073306677112,28.246643499999998],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    });
    var myPlacemark = new ymaps.Placemark([57.83073306677112,28.246643499999998], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/map-pin.svg',
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -80]
    });
    myMap.geoObjects.add(myPlacemark);
}

$(document).ready(function () {
    ymaps.ready(init);
});