/**
 * Script for activation OWL carousel
 */
$(function () {
    'use strict';

    var $clients = $('#owl-clients');
    $clients.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            100: {
                items: 1
            },
            640: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});
