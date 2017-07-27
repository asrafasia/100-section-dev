(function ($) {
	"use strict";

     jQuery(document).ready(function($){

    
    $('.col-md-4:nth-child(1) .single-team-member').on('mouseover', function(){
    	$('.col-md-4:nth-child(2) .single-team-member').css({
    		'margin-top': '0px',
    		'transition': '.5s'
    	});
    	$(this).css({
    		'margin-top':'110px',
    		'transition': '.5s'
    	})
    })
        
    $('.col-md-4:nth-child(1) .single-team-member').on('mouseleave', function(){
    	$('.col-md-4:nth-child(2) .single-team-member').css({
    		'margin-top':'110px',
    		'transition': '.5s'
    	});
    	$(this).css({
    		'margin-top': '0px',
    		'transition': '.5s'
    	})
    })
    ///////////        
    $('.col-md-4:nth-child(3) .single-team-member').on('mouseover', function(){
    	$('.col-md-4:nth-child(2) .single-team-member').css({
    		'margin-top': '0px',
    		'transition': '.5s'
    	});
    	$(this).css({
    		'margin-top':'110px',
    		'transition': '.5s'
    	})
    })
        
    $('.col-md-4:nth-child(3) .single-team-member').on('mouseleave', function(){
    	$('.col-md-4:nth-child(2) .single-team-member').css({
    		'margin-top':'110px',
    		'transition': '.5s'
    	});
    	$(this).css({
    		'margin-top': '0px',
    		'transition': '.5s'
    	})
    })




     	







     	

     // 	jQuery(".col-md-4:nth-child(1)").hover(function(){
   		// jQuery(this).css("marginTop", "100px")},
    	// 	function(){
    	// 	jQuery(this).css("marginTop", "-100px");


    	// });



// $( "div span:first-child" )
//   .css( "text-decoration", "underline" )
//   .hover(function() {
//     $( this ).addClass( "sogreen" );
//   }, function() {
//     $( this ).removeClass( "sogreen" );
//   });




//   $("p").mouseover(function(){
//         $("p").css("background-color", "yellow");
//     });
//     $("p").mouseout(function(){
//         $("p").css("background-color", "lightgray");
//     });
// });






        // jQuery(".col-md-4:nth-child(1), .col-md-4:nth-child(2),.col-md-4:nth-child(3)").hover(function(){
        // 	jQuery(".col-md-4:nth-child(1)").css("marginTop", "100px")},
        // 	function(){
        // 		jQuery(".col-md-4:nth-child(2)").css("marginTop", "-100px")
        // 	},

        // 	function(){
        // 		jQuery(".col-md-4:nth-child(3)").css("marginTop", "100px")
        // 	}

        // );


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	