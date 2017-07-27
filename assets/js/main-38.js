(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	jQuery(".homepage-slides").owlCarousel({
    		items: 1,
    		dots:true,
    		loop: true,
    		autoplay:true,
    		nav:true,
    		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    		animateOut:'fadeOut',
    		

    	});
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	