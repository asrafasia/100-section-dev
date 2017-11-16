(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	$('.slider-area').owlCarousel({
    		items : 1,
    		loop : true,
    		dots : true,
    		nav : false,
    		autoplay: false,
    	});

        $('.logo-caoursel').owlCarousel({
            items : 5,
            margin: 30,
            loop : true,
            dots : true,
            nav : false,
            autoplay: true,
        });


           $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            })



        


    });		//end document ready function


    jQuery(window).load(function(){

        
    });


}(jQuery));	