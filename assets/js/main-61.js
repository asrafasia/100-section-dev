(function ($) {
    "use strict";

    jQuery(document).ready(function($){


//      

        var saydabad = {lat: 23.7146762, lng: 90.4288489};
        $('.map')
            .gmap3({
            zoom: 18,
            center: saydabad
        })
            .marker({
            position: saydabad,
            icon: 'http://maps.google.com/mapfiles/marker_green.png'
        })
            .infowindow({
            content: "saydabad..."
        })
            .then(function (infowindow) {
            var map = this.get(0);
            var marker = this.get(1);
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        });




    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 