(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $('#web-design-element').circleProgress({
            value: 0.9,
            size: 200,
            fill: '#20C1C7',
            thickness: 2,
            emptyFill : '#fff'


        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progress-percentage').html(Math.round(90 * progress) + '<i>%</i>');
        });

        $('#ui-ux-element').circleProgress({
            value: 0.75,
            size: 200,
            fill: '#3B5998',
            thickness: 4,
            emptyFill : '#fff'


        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progress-percentage').html(Math.round(75 * progress) + '<i>%</i>');
        });

        $('#web-development-element').circleProgress({
            value: 0.45,
            size: 200,
            fill: '#FF6C0F',
            thickness: 2,
            emptyFill : '#fff'


        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progress-percentage').html(Math.round(45 * progress) + '<i>%</i>');
        });




    }); //end document ready function


    jQuery(window).load(function() {


    });


}(jQuery));