/**
 * Google maps handler (choose between map and street view)
 */
$(function () {
    'use strict';

    var $wrapper = $('.google-map'),
        $container = $wrapper.find('.google-map-container'),
        $tabs = $wrapper.find('.google-map-tabs'),
        $active = $tabs.find('.active'),
        maps;


    if ($wrapper.length && $container.length && $active.length) {
        var active = $active.find('.google-map-view').length ? 'google-map' : $active.find('.street-view').length ? 'street-view' : false;
        if ('google-map' == active) {
            showMap();
        }
        if ('street-view' == active) {
            showStreetView()
        }
    }

    $tabs.on('click', '.google-map-view', function (e) {
        e.preventDefault();
        showMap();
        $tabs.find('.active').removeClass('active');
        $(this).closest('li').addClass('active');
    });
    $tabs.on('click', '.street-view', function (e) {
        e.preventDefault();
        showStreetView();
        $tabs.find('.active').removeClass('active');
        $(this).closest('li').addClass('active');
    });


    function showMap() {
        var lat = $container.data('lat'),
            lng = $container.data('lng');
        $container.empty();
        maps = new GMaps({
            el: '#' + $container.attr('id'),
            lat: lat,
            lng: lng
        });
        maps.addMarker({lat: lat, lng: lng});
    }

    function showStreetView() {
        var lat = $container.data('lat'),
            lng = $container.data('lng');
        $container.empty();
        GMaps.createPanorama({
            el: '#' + $container.attr('id'),
            lat: lat,
            lng: lng
        });
    }

});