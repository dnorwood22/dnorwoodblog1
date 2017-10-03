/**
 * Show left block (about) by click with titl effect
 */
$(function () {
    'use strict';

    $('.js-drawer-toggle').click(function (e) {
        e.preventDefault();

        var target = $(this).attr('data-target'),
            $target = $(target),
            $photo = $target.find('.photo-main');
        if ($target.length) {
            if ($target.hasClass('hide')) {
                $target.removeClass('hide');
                $target.animate({'left': 0}, function () {
                    if (!$photo.find('> .tilt').length) {
                        new TiltFx($photo.find('img')[0], {
                            'opacity': 0.3,
                            'extraImgs': 3,
                            'movement': {
                                'perspective': 1200,
                                'translateX': -5,
                                'translateY': -5,
                                'rotateX': -5,
                                'rotateY': -5
                            }
                        });
                    }
                });
            } else {
                $target.animate({'left': -1 * $target.width()}, 400, 'swing', function () {
                    $target.addClass('hide');
                });
            }
        }
    });
});