/**
 * Script change captions for blocks
 */
$(function () {
    'use strict';

    var $carousel = $('.carousel');
    $carousel.on('slide.bs.carousel', function (evt) {
        var $carousel = $(this).closest('.carousel-block'),
            $descriptions = $carousel.find('.caption-outside-wrapper');
        $descriptions.addClass('hide');
        $($descriptions.get($(evt.relatedTarget).index())).removeClass('hide');
    });
});