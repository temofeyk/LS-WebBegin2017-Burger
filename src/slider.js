require('./widgets/owlcarousel/owl.carousel.css');
require('./widgets/owlcarousel/owl.carousel.js');

module.exports = function() {

    var burgerCarousel = $('.burgersSlider').owlCarousel({
        items : 1,
        nav : true,
        navContainer: $('.burgerSlider__controls'),
        navText: ['', ''],
        loop: true
    });

    $('.burgerSlider__btn_next').on('click', function(e) {
        e.preventDefault();
        burgerCarousel.trigger('next.owl.carousel');
    });

    $('.burgerSlider__btn_prev').on('click', function(e) {
        e.preventDefault();
        burgerCarousel.trigger('prev.owl.carousel');
    });
}