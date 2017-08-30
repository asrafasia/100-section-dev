(function ($) {
	"use strict";

    jQuery(document).ready(function($){


		        $(window).scroll(function() {    
		    var scroll = $(window).scrollTop();

		    if (scroll >= 200) {
		        $(".mainmenu-area").addClass("is_stick");
		    } else {
		        $(".mainmenu-area").removeClass("is_stick");
		    }
		});
		        
		        // window scroll stick with logo js

		         $(window).scroll(function() {    
		    var scroll = $(window).scrollTop();

		    if (scroll >= 200) {
		        $(".logo-stick-area").addClass("is_stick");
		    } else {
		        $(".logo-stick-area").removeClass("is_stick");
		        $(".logo-stick-area").addClass('sticked');
		    }
		});


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	