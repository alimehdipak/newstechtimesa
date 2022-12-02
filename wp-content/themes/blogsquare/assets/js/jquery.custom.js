
(function($){ //create closure so we can safely use $ as alias for jQuery

    $(document).ready(function(){

        "use strict";

        /*-----------------------------------------------------------------------------------*/
        /*  Superfish Menu
        /*-----------------------------------------------------------------------------------*/
        // initialise plugin
        var example = $('.sf-menu').superfish({
            //add options here if required
            delay:       100,
            speed:       'fast',
            autoArrows:  false  
        }); 


        $('.widget-posts-thumbnail .gradient').fadeIn("100"); 

        $('#featured-content .hentry').matchHeight({
            byRow: true
        });

        /*-----------------------------------------------------------------------------------*/
        /*  Tabs
        /*-----------------------------------------------------------------------------------*/
        $('.widget_tabs').show(); 
        $('.widget_tabs .tabs').tabslet({
            mouseevent: 'click',
            attribute: 'href',
            animation: false
        });

        /*-----------------------------------------------------------------------------------*/
        /*  Back to Top
        /*-----------------------------------------------------------------------------------*/
        // hide #back-top first
        $("#back-top").hide();

        $(function () {
            // fade in #back-top
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn('200');
                } else {
                    $('#back-top').fadeOut('200');
                }
            });

            // scroll body to 0px on click
            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        }); 

        /* Mobile Search */
        $('.search-icon > .fa-search').click(function(){

            $('.header-search').slideDown('fast', function() {});
            $('.search-icon > .fa-search').toggleClass('active');
            $('.search-icon > .fa-times').toggleClass('active');

        });

        $('.search-icon > .fa-times').click(function(){

            $('.header-search').slideUp('fast', function() {});
            $('.search-icon > .fa-search').toggleClass('active');
            $('.search-icon > .fa-times').toggleClass('active');

        });                                                        

    });

})(jQuery);
