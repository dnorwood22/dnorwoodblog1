/**
 * Script enable parallax-effect
 */
$(function () {
    'use strict';

    // Select background for welcome section
    $('.js-welcome-parallax').parallax({
        imageSrc: '/assets/static/images/backgrounds/coding-workspace.jpg',
        position: 'center top'
    });

    // Select background for between sections
    $('.js-between-parallax').parallax({
        imageSrc: '/assets/static/images/backgrounds/parallax_image_between.jpg',
        position: 'center top'
    });
});