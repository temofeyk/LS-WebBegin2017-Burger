module.exports = function() {
    function customizeBurgers() {

        var elems = document.querySelectorAll('.burgerSlider__arrow use');

        var svgURL = require('./images/icons/sprite.svg');
        for(var i = 0; i < elems.length; i++) {
            elems[i].setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${svgURL}#arrow-scroll`);
        }

        elems = document.querySelectorAll('.ingredients__burgerIcon use');
        for(var i = 0; i < elems.length; i++) {
            elems[i].setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${svgURL}#burger`);
        }
    }
    document.addEventListener('DOMContentLoaded', customizeBurgers);
}