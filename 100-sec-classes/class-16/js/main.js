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
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',

        });
        $(".products-promotion").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,

        });

        $(".menu-trigger").on("click", function () {
            $(".off-canvas-menu , .off-canvas-overlay").addClass("active");
            return false;
        });
        $(".menu-close , .off-canvas-overlay").on("click", function () {
            $(".off-canvas-menu , .off-canvas-overlay").removeClass("active");
            return false;
        });


        $(".search-trigger").on("click", function () {
            $(".search-box , .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".search-close , .off-canvas-overlay , .search-btn").on("click", function () {
            $(".search-box , .off-canvas-overlay").removeClass("active");
            return false;
        });

    });


    jQuery(window).load(function () {


    });


}(jQuery));
