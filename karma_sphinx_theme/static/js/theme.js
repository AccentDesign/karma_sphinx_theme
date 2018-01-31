$(document).ready(function(){

    var $header = $('header');
    var $body = $('body');
    var $window = $(window);

    // Hide the header on scroll down
    var scrollMinFromTop = 200;
    var scrollPrev = 0;

    $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        var isNavOpen = $body.hasClass('nav-in');

        if (!isNavOpen && scrollTop > scrollPrev && scrollTop > scrollMinFromTop) {
            $header.addClass('up');
        } else {
            $header.removeClass('up');
        }
        scrollPrev = scrollTop;
    });

    // toggle sidebar
    $(document).on('click', '.site-nav-toggle, .site-nav a', function() {
        $body.toggleClass('nav-in');
    });

    // replace anchor scroll to offset the fixed header on mobile
    $("a[href^='#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();
     
        var width = $window.width();
        var headerHeight = $header.outerHeight();
        var mobileMaxWidth = 991;
        var offset = 0;

        if (width <= mobileMaxWidth) {
            offset = headerHeight + 10;
        }

        // animate scroll
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - offset
          }, 200, function(){
        });
    });

    // wrap tables so we can make responsive
    $("table.docutils:not(.field-list,.footnote,.citation)")
        .wrap("<div class='scroll-x'></div>");

});