//API_KEY="AIzaSyBjo3uCuhAPyeFHZbdjgjRtw3V3guPjAQk";

module.exports = function() {
    var Uglich = { lat: 57.5262, lng: 38.3061 };
    var map = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 14,
        center: Uglich,
        disableDefaultUI: true
    });
    var geoPoints = [
        { lat: 57.5142, lng: 38.3021 },
        { lat: 57.5262, lng: 38.3261 },
        { lat: 57.5122, lng: 38.3461 },
        { lat: 57.5362, lng: 38.3591 }
    ];

    var image = require('./images/icons/map-marker.svg');

    geoPoints.forEach((item) => {
        let marker = new google.maps.Marker({
            position: item,
            map: map,
            icon: image
        });
});

};
