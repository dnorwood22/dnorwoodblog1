/**
 * Portfolio-loader
 */
$(function () {
    'use strict';

    var ITEMS_ON_PAGE = 5,
        loadedItems = 0,
        $grid = $('.grid'),
        $filter = $('.js-portfolio-filter'),
        $moreButton = $('.js-load-more'),
        actualFilter = '*';

    // Load additional content
    $moreButton.click(function () {
        loadPortfolio();
    });

    $filter.off('click.gridFilter').on('click.gridFilter', 'a', function (e) {
        e.preventDefault();
        actualFilter = $(this).attr('data-filter');
        $filter.find('.active').removeClass('active');
        $(this).closest('li').addClass('active');
        $grid.isotope({filter: actualFilter});
    });

    function loadPortfolio() {
        var url = $grid.attr('data-url') || false;
        if (url) {
            url = url
                .replace('{filter}', encodeURIComponent(actualFilter))
                .replace('{offset}', encodeURIComponent(loadedItems))
                .replace('{limit}', encodeURIComponent(ITEMS_ON_PAGE));
            $.get(url, function (html) {
                var $elements = $(html);
                loadedItems += $elements.filter('.grid-item').length;
                if ($elements.filter('.grid-item').length < ITEMS_ON_PAGE) {
                    $moreButton.hide();
                }
                $grid.append($elements);
                $grid.imagesLoaded(function () {
                    $grid.isotope('appended', $elements);
                    $grid.isotope({filter: actualFilter});
                    $grid.trigger('portfolio.loaded', [$grid]);
                });
            })
        }
    }

    function initializeIsotope() {
        $grid.isotope({itemSelector: '.grid-item', filter: actualFilter});
    }


    initializeIsotope();
    loadPortfolio();
});