function init() {
    var points = [];

    var map = new ymaps.Map('ymap', {
        center: [57.5262, 38.3061], // Углич
        zoom: 14,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    var geoPoints = [
        [57.5142, 38.3021],
        [57.5262, 38.3261],
        [57.5122, 38.3461],
        [57.5362, 38.3591]
    ];

    var geoObjects = new ymaps.GeoObjectCollection(null, {});
    var image = require('./images/icons/map-marker.svg');

    geoPoints.forEach((item) => {
        geoObjects.add(new ymaps.Placemark(item, {
        hintContent: 'Бургеры',
        balloonContent: 'Закладка с бургерами'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: image,
        // Размеры метки.
        iconImageSize: [30, 42]
    }));
});

    map.geoObjects.add(geoObjects);
}

module.exports = function() {
    ymaps.ready(init);
};
