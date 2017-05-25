module.exports = function() {
    function customizeBest() {

        var elems = document.querySelectorAll('.best__iconImage'),
            components = [
                { fill: '#e25028', href: 'meat' },
                { fill: '#f8b43a', href: 'hand' },
                { fill: '#8ac03e', href: 'natural' }
            ];
        var svgURL = require('./images/icons/sprite.svg');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.fill = components[i].fill;
            elems[i].children[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${svgURL}#${components[i].href}`);
        }
    }
    document.addEventListener('DOMContentLoaded', customizeBest);
}
