/**
 * Script enable video in background
 */
$(function () {
    'use strict';

    $('.js-bg-video').vide({
        mp4: 'static/video/video.mp4',
        ogv: 'static/video/video.ogv',
        webm: 'static/video/video.webm',
        poster: 'static/video/poster.jpg'
    }, {
        resizing: true,
        muted: true,
        loop: true,
        autoplay: true
    });
});