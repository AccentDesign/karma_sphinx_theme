$(document).ready(function(){

    // toggle sidebar
    $(document).on('click', '.site-nav-toggle, .site-nav a', function() {
        $('.site-nav').toggleClass('in');
    });

    // wrap tables so we can make responsive
    $("table.docutils:not(.field-list,.footnote,.citation)")
        .wrap("<div class='scroll-x'></div>");

});