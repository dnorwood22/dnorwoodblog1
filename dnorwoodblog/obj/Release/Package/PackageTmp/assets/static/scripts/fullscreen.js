/**
 * Script for expand block to fullscreen mode
 */
$(function () {
    'use strict';

    function expandSection() {
        var $sections = $('.js-fullscreen'),
            windowHeight = $(window).height();

        $sections.each(function () {
            var $section = $(this),
                $item = $section.find('.container'),
                contentHeight = windowHeight;
            if ($item.length) {
                contentHeight = $item.height();
                if (windowHeight - contentHeight > 0) {
                    $item
                        .css('position', 'relative')
                        .css('top', ((windowHeight / 2) - (contentHeight / 2)) + 'px');
                } else {
                    $item.css('position', 'static');
                }
            }

            if (contentHeight > windowHeight) {
                $section.height(contentHeight);
            } else {
                $section.height(windowHeight);
            }
        });
    }

    $(window)
        .off('resize.fullscreen')
        .on('resize.fullscreen', expandSection)
        .off('orientationchange.fullscreen')
        .on('orientationchange.fullscreen', expandSection);

    expandSection();
});