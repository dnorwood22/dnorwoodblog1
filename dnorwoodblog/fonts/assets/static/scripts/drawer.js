/**
 * Show left block (about) by click
 */
$(function () {
    'use strict';

    $('.js-drawer-toggle').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target'),
            $target = $(target);
        if ($target.length) {
            if ($target.hasClass('hide')) {
                $target.removeClass('hide');
                $target.animate({'left': 0});
            } else {
                $target.animate({'left': -1 * $target.width()}, 400, 'swing', function () {
                    $target.addClass('hide');
                });
            }
        }
    });
});