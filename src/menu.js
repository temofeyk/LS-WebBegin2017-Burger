module.exports = function() {
    function customizeMenu() {

        var elems = document.querySelectorAll('.menuAcco__trigger');
        var imgs = ['meats','vegans','diets'];
        for(var i = 0; i < elems.length; i++) {
            let url = require(`./images/${imgs[i]}.jpg`)
             elems[i].style.backgroundImage= `url(${url})`;
        }
    }
    document.addEventListener('DOMContentLoaded', customizeMenu);
}