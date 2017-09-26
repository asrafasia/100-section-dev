(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});

        


    });		//end document ready function


    jQuery(window).load(function(){

        
    });


}(jQuery));	