module.exports = function() {
    $('.menuAcco__trigger').on('click', function(e){
        e.preventDefault();
        debugger;
        var $this = $(this),
            container = $this.closest('.menuAcco'),
            item = $this.closest('.menuAcco__item'),
            items = container.find('.menuAcco__item'),
            activeItem = items.filter('.active'),
            content = item.find('.menuAcco__content'),
            activeContent = activeItem.find('.menuAcco__content');

        if (!item.hasClass('active')) {

            items.removeClass('active');
            item.addClass('active');

            activeContent.animate({
                'width' : '0px'
            });

            content.animate({
                'width' : '550px'
            });

        } else {

            item.removeClass('active');
            content.animate({
                'width' : '0px'
            });

        }
    });

    // клик вне аккордеона
    $(document).on('click', function (e) {
        var $this = $(e.target);

        if (!$this.closest('.menuAcco').length) {
            $('.menuAcco__content').animate({
                'width' : '0px'
            });

            $('.menuAcco__item').removeClass('active');
        }
    });
}