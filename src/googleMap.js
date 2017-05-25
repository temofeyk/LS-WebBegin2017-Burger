//API_KEY="AIzaSyBjo3uCuhAPyeFHZbdjgjRtw3V3guPjAQk";

module.exports = function() {
    var Uglich = { lat: 57.5262, lng: 38.3061 };
    var map = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 14,
        center: Uglich,
        disableDefaultUI: true,
        scrollwheel: false
    });
    var geoPoints = require('./geoPoints.json');

    var image = require('./images/icons/map-marker.svg');

    geoPoints.forEach((item) => {
        new google.maps.Marker({
            position: {lat: item[0], lng: item[1]},
            map: map,
            icon: image
        });
});

};
