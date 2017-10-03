/**
 * Script enable smooth scroll functionality
 */
$(function () {
    'use strict';

    $('.scroll-to').on('click', function (e) {
        e.preventDefault();
        var hash = ($(this).attr('href') || '#').substr(1);
        $('body').scrollTo($($(this).attr('href')), 600, function () {
            location.hash = hash;
        });
    });
});