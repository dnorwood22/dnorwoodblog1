/**
 * Enable additional form effect
 */
$(function () {
    'use strict';

    $('.input-field').each(function () {
        var $el = $(this);
        if ('' !== $.trim($el.val())) {
            $el.parent().addClass('input-filled');
        }

        $el.focus(function () {
            $(this).parent().addClass('input-filled');
        });

        $el.blur(function () {
            var $el = $(this);
            if ('' === $.trim($el.val())) {
                $el.parent().removeClass('input-filled');
            }
        });
    });
});
