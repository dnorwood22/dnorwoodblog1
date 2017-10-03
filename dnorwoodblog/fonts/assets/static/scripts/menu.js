/**
 * Main menu handler (highlight active items)
 */
$(function () {
    'use strict';

    var $menu = $('.navbar'),
        windowWidth = $(window).width();

    $(window)
        .resize(function () {
            windowWidth = $(this).width();
            updateMenu($(this).scrollTop());
        })
        .scroll(function () {
            updateMenu($(this).scrollTop());
        });

    function updateMenu(offset) {
        if (windowWidth >= 992) {
            if (offset >= $menu.height()) {
                $menu.addClass('navbar-scrolled');
            } else {
                $menu.removeClass('navbar-scrolled');
            }
        } else {
            $menu.removeClass('navbar-scrolled');
        }
    }
});