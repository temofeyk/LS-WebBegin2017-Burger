module.exports = function() {
    $('.teamAcco__trigger').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.teamAcco__item'),
            container = $this.closest('.teamAcco'),
            items = container.find('.teamAcco__item'),
            content = item.find('.teamAcco__content'),
            otherContent = container.find('.teamAcco__content');

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');
            otherContent.slideUp();
            content.slideDown();
        } else {
            item.removeClass('active');
            content.slideUp();
        }
    });
}