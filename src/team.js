module.exports = function() {
    function customizeTeam() {

        var elems = document.querySelectorAll('.teamAcco__img');
        var url = require('./images/teammate.jpg');
        for(var i = 0; i < elems.length; i++) {
            elems[i].style.backgroundImage =`url(${url})`;
        }
    }
    document.addEventListener('DOMContentLoaded', customizeTeam);
}