(function ($) {
    "use strict";

	/*--------------------------------
		testimonial carousel
	---------------------------------- */
    $(".testimonial-slide-area").owlCarousel({
        items : 1,
        loop:true,
        autoplay : true,
        nav : false,
        dots : true,
    });
    
	/*--------------------------------
		magnific popup
	---------------------------------- */    
    $(".video-play-btn").magnificPopup({
        type: 'video',
    });


//WOw js.........
       new WOW().init();

    



    
})(jQuery);