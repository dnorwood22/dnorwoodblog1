/**
 * Feedback form handler
 */
$(function () {
    'use strict';

    var $feedbackForm = $('.js-feedback-form');

    function init() {
        updateVars();
        bindEvents();
    }

    function updateVars() {
        $.validator.addClassRules('js-check-name', {
            required: true,
            minlength: 2
        });
        $.validator.addClassRules('js-check-email', {
            required: true,
            email: true
        });
        $.validator.addClassRules('js-check-message', {
            required: true,
            minlength: 5
        });
    }

    function bindEvents() {
        feedbackFormValidate();
    }

    function feedbackFormValidate() {
        $feedbackForm.validate({
            errorElement: 'span',
            errorClass: 'has-error',
            validClass: 'has-success',
            errorPlacement: function (error, element) {
                error.addClass('help-block');
                element.after(error);
            },
            submitHandler: function (form) {
                var $form = $(form);
                $form.find('.success-message, .error-message').remove();
                $.ajax({
                    type: $form.attr('method') || 'post',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                    dataType: 'json',
                    success: function (response) {
                        var result = '';
                        if (response && response.success === true) {
                            $form.addClass('subscribe-success');
                            result = '<span class="help-block success-message">Thanks for your message!</span>';
                            $form.find('input').val('');
                        } else {
                            result = '<span class="help-block error-message">' + (response.message || 'Contact action error!') + '</span>';
                        }
                        $form.prepend(result);
                    }
                });
                return false;
            }
        });
    }

    init();
});