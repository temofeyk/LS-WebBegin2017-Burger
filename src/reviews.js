module.exports = function() {
    function customizeReviews() {

        var elems = document.querySelectorAll('.review__photo');

        for(var i = 0; i < elems.length; i++) {
            let url = require(`./images/reviews/${i+1}.jpg`)

            elems[i].style.backgroundImage= `url(${url})`;
        }
    }
    document.addEventListener('DOMContentLoaded', customizeReviews);
}