/**
 * Enable fancybox for picture preview
 */
$(function () {
    'use strict';

    $('.grid').on('portfolio.loaded', function(e, $element){
        initFancybox($element);
    });
    initFancybox($('body'));

    function initFancybox($element) {
        $element.find('.fancybox').fancybox({
            tpl: {
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">Close</a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span>Next</span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span>Preview</span></a>'
            },
            helpers: {
                title: {
                    type: 'outside',
                    position: 'top'
                }
            },
            closeBtn: false,
            padding: 0,
            openEffect: 'fade'
        });

        $element.find('.fancybox-media').fancybox({
            tpl: {
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">Close</a>',
            },
            maxWidth: 1200,
            maxHeight: 1000,
            autoHeight: true,
            autoWidth: true,
            fitToView: true,
            autoSize: true,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            padding: 0,
            helpers: {
                media: {}
            }
        });

        $element.find('.various').fancybox({
            tpl: {
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">Close</a>',
            },
            maxWidth: 1200,
            maxHeight: 1000,
            fitToView: true,
            autoSize: true,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            padding: 0
        });

        $.fancybox.update();
    }
});
