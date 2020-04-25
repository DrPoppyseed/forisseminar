$(document).ready(() => {
    $('.js--scroll-to-reasons').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-banner').offset().top}, 500)
    });
});

$(document).ready(() => {
    $('.header_nav__item--top').click(() => {
        $('html, body').animate({scrollTop: $('.page__header').offset().top}, 500)
    });
});

$(document).ready(() => {
    var previousScroll = 0,
        headerOrgOffset = $('.header_nav').offset().top;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if(currentScroll > headerOrgOffset) {
            if (currentScroll > previousScroll) {
                $('.header_nav').fadeOut(200);
            } else {
                $('.header_nav').fadeIn(200);
                $('.header_nav').addClass('fixed');
            }
        } else {
             $('.header_nav').removeClass('fixed');   
        }
        previousScroll = currentScroll;
    });
});

$(document).ready(() => {

});