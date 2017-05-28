require('./widgets/fancybox-2.1.7/source/jquery.fancybox.css?v=2.1.7');
require('./widgets/fancybox-2.1.7/source/jquery.fancybox.pack.js?v=2.1.7');

module.exports = function() {

    $('.review__view').fancybox({
        type: 'inline',
        maxWidth : 460,
        fitToView : false,
        padding : 0,
        closeBtn: false
    });

    $('.fullReview__close').on('click', function(e){
        e.preventDefault();
        $.fancybox.close();
    });
}