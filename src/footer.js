module.exports = function() {
    function customizeSocials() {

        var elems = document.querySelectorAll('.socials__icon use');
        var imgs =  ['vk', 'fb', 'inst', 'twitter'];
        var svgURL = require('./images/icons/sprite.svg');
        for(var i = 0; i < elems.length; i++) {
            elems[i].setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${svgURL}#${imgs[i]}`);
        }
    }
    document.addEventListener('DOMContentLoaded', customizeSocials);
}