var Inputmask = require('inputmask');

module.exports = function() {
    function customizeMask() {

        var selector = document.querySelector('.phoneMask');

        var im = new Inputmask('+7 (999) 999 99 99');
        im.mask(selector);
    }
    document.addEventListener('DOMContentLoaded', customizeMask);
}