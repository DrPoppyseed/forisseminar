$(document).ready(() => {
    // $('.js--section-features').waypoint(function(direction) {
    //     if (direction == "down") {
    //         $('nav').addClass('sticky');
    //     } else {
    //         $('nav').removeClass('sticky');   
    //     }
    // }, {
    //     offset: '60px;'
    // });
    
    // scroll sections
    $('.js--scroll-to-reasons').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-reasons').offset().top}, 1000)
    });
});