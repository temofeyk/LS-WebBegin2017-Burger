module.exports = function() {
    function customizeArrow() {

        var svgURL = require('./images/icons/sprite.svg');

        var elem = document.querySelector('.downArrow__icon use');

        elem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${svgURL}#arrow-scroll`);
    }
    document.addEventListener('DOMContentLoaded', customizeArrow);
}