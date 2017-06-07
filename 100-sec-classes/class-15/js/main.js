(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".products-list").masonry();
        $(".homepage-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            navText:["<i class='fa fa-long-arrow-left'></i>" , "<i class='fa fa-long-arrow-right'></i>"]

        });
        $(".products-promotion").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            
        });




    });


    jQuery(window).load(function () {


    });


}(jQuery));
