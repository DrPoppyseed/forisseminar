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

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 60,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          1280: {
            slidesPerView: 2,
            spaceBetween: 100
          },
          1100: {
              slidesPerView: 2,
              spaceBetween: 60
          },
          900: {
              slidesPerView: 2,
              spaceBetween: 40
          },
          600: {
              slidesPerView: 1,
              spaceBetween: 100
          }
      }
    });
  });

$(document).ready(() => {
    var $windowWidth = $(window).width();
    var $windowHeight = $(window).height();
    if ($windowWidth <= 450 && $windowHeight <= 900) {
        $('.hero__imgbox').removeClass('span-1-of-2');
        $('.hero__textbox').removeClass('span-1-of-2');
        $('.hero__imgbox').removeClass('span-3-of-5');
        $('.hero__textbox').removeClass('span-2-of-5');
    } else if ($windowWidth <= 1200 && $windowHeight > 650) {
        $('.hero__imgbox').removeClass('span-1-of-2');
        $('.hero__textbox').removeClass('span-1-of-2');
        $('.hero__imgbox').removeClass('span-3-of-5');
        $('.hero__textbox').removeClass('span-2-of-5');
    } else if ($windowWidth > 1500) {
        $('.hero__imgbox').removeClass('span-1-of-2');
        $('.hero__imgbox').addClass('span-3-of-5');
        $('.hero__textbox').removeClass('span-1-of-2');
        $('.hero__textbox').addClass('span-2-of-5');
    } 
    $(window).on('resize', () => {
        $windowWidth = $(window).width();
        $windowHeight = $(window).height();
        if ($windowWidth > 1500) {
            $('.hero__imgbox').removeClass('span-1-of-2');
            $('.hero__imgbox').addClass('span-3-of-5');
            $('.hero__textbox').removeClass('span-1-of-2');
            $('.hero__textbox').addClass('span-2-of-5');
        } else if ($windowWidth <= 1500) {
            if ($windowWidth <= 1200 && $windowHeight > 650) {
                $('.hero__imgbox').removeClass('span-1-of-2');
                $('.hero__textbox').removeClass('span-1-of-2');
                $('.hero__imgbox').removeClass('span-3-of-5');
                $('.hero__textbox').removeClass('span-2-of-5');
            } else if ($windowWidth <= 450 && $windowHeight <= 900) {
                $('.hero__imgbox').removeClass('span-1-of-2');
                $('.hero__textbox').removeClass('span-1-of-2');
                $('.hero__imgbox').removeClass('span-3-of-5');
                $('.hero__textbox').removeClass('span-2-of-5');
            } else {
                $('.hero__imgbox').removeClass('span-3-of-5');
                $('.hero__imgbox').addClass('span-1-of-2');
                $('.hero__textbox').removeClass('span-2-of-5');
                $('.hero__textbox').addClass('span-1-of-2');
            }
        }
    });
});

$(document).ready(() => {
    var $windowWidth = $(window).width();
    var $windowHeight = $(window).height();
    if ($windowWidth <= 450) {
        $('.class_name_box').removeClass('span-1-of-3');
        $('.class_detail_box').removeClass('span-2-of-3');
        $('.list__component').removeClass('span-1-of-2');
        // $('.banner_carousel').slick({
        //     slidesToShow: 3,
        //     // variableWidth: true,
        //     autoplay: true,
        //     infinite: true,
        //     // autoplaySpeed: 1500,
        //     dots: false,
        //     prevArrow: false,
        //     nextArrow: false
        // })
        $('.plans_section__plan_boxes').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true
        })
        $(".class_name_box").click(function () {
            $header = $(this);
            //getting the next element
            $content = $('.class_detail_box');
            //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
            $content.slideToggle(500);
        });
    } else if ($windowWidth <= 601 && $windowHeight <= 962) {
        $('.class_name_box').removeClass('span-1-of-3');
        $('.class_detail_box').removeClass('span-2-of-3');
        // $('.plan_box__features').addClass('col span-1-of-2');
        // $('.button--plans').addClass('col span-1-of-2');
    } else if ($windowWidth <= 800 && $windowHeight <= 1280) {
        $('.class_name_box').removeClass('span-1-of-3');
        $('.class_detail_box').removeClass('span-2-of-3');
    } 

    
    // onResize($windowWidth, $windowHeight);
    // $(window).on('resize', () => {
    //     $windowWidth = $(window).width();
    //     $windowHeight = $(window).height();
    //     onResize($windowWidth, $windowHeight);
    // })

    // var onResize = ($windowW, $windowH) => {
    //     if ($windowW <= 800 && $windowH <= 1280) {
    //         $('.class_name_box').removeClass('span-1-of-3');
    //         $('.class_detail_box').removeClass('span-2-of-3');
    //     } else {
    //         return;
    //     }
    // }
});

$(document).ready(function() {
    var slides = $(".steps_titles li");
    
    var slideIndex = 0;
    var slideTime = animate();
    
    $(".steps_titles li").click(function() {
      clearInterval(slideTime);
      slideTime = animate();
      
      slideTo(this);
    });

    $('.steps_section').waypoint(function(direction) {
        slideTo(slides[0])
    }, {
        offset: '100%'
    });
    
    function slideTo(slide) {
        $(".steps_titles li").removeClass("current");
        $(slide).addClass("current");
        slideIndex = jQuery(slide).index();

        if (slideIndex == 0) {
            $('.steps__step_detail--title').html(`<h3>自分に合ったプランの選択</h3>`);
            $('.steps__step_detail--text').html(`<p>自分にあったプランを選んでいただきます。</p>`);
        } else if (slideIndex == 1) {
            $('.steps__step_detail--title').html(`<h3>お支払い</h3>`);
            $('.steps__step_detail--text').html(`<p>選択したプランの料金を、銀行振込にて、お支払いください。銀行振り込みの手順に関しましては、こちらから送付させていただきます。</p>`);
        } else if (slideIndex == 2) {
            $('.steps__step_detail--title').html(`<h3>セミナーで使用するテキストの購入（プレミアムプランご購入の方はテキストが付属です）</h3>`);
            $('.steps__step_detail--text').html(`<p>FORIS専用のNoteアカウントにアクセスしていただいたのち、セミナーに必要なテキストを購入していただきます。ただし、プレミアムプランをご購入の方はプラン特典として、テキストが無料で送付させていただきます。</p>`);
        } else if (slideIndex == 3) {
            $('.steps__step_detail--title').html(`<h3>お客様とのセミナー日程調整</h3>`);
            $('.steps__step_detail--text').html(`<p>講師とのマンツーマン授業となりますので、お客様がお選びになった学期内で、お客様と講師の都合が着く日程を調整していただきます。</p>`);
        } else if (slideIndex == 4) {
            $('.steps__step_detail--title').html(`<h3>FORISよりZoomのリンクを送付</h3>`);
            $('.steps__step_detail--text').html(`<p>授業開始の数日前にはこちらより、ZOOMのリンクをお客様に送らせていただきます。</p>`);
        } else if (slideIndex == 5) {
            $('.steps__step_detail--title').html(`<h3>セミナー開始</h3>`);
            $('.steps__step_detail--text').html(`<p>お客様のお選びになった日程に沿って、カリキュラムを進めていきます。</p>`);
        } else if (slideIndex == 6) {
            $('.steps__step_detail--title').html(`<h3>セミナー全て終了後、質疑応答ができるオンラインサロンへのご招待</h3>`);
            $('.steps__step_detail--text').html(`<p>セミナー終了後、セミナー後に上がった質疑の応答や、同じセミナーを受けた仲間と混じり合えるオンラインサロンへご招待させていただきます。</p>`);
        }
    }

    function animate() {
        return setInterval(function() {
            var slide = slides[slideIndex];
            slideTo(slide)
            slideIndex++;
            if (slideIndex == slides.length) slideIndex = 0; 
        }, 1500);
    }
});
