/**
 * Search field handler
 */
$(function () {
    'use strict';

    var $searchWrapper = $('.search-wrapper');

    $searchWrapper.on('mouseenter focus keypress', function () {
        var $input = $(this).find('.js-search-input');
        if (!$input.hasClass('search-input-hover')) {
            $input
                .addClass('search-input-hover')
                .focus();
        }
    });

    $searchWrapper.on('mouseleave focusout', function () {
        var $input = $(this).find('.js-search-input');
        setTimeout(function () {
            if (!$input.val().length) {
                $input.removeClass('search-input-hover');
            }
        }, 1000);
    });
});