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

$(document).ready(function() {
    var slides = $(".steps_titles li");
    
    var slideIndex = 0;
    var slideTime = animate();
    
    $(".steps_titles li").click(function() {
      //Reset the interval to 0 and start it again
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
        console.log(slideIndex);

        if (slideIndex == 0) {
            $('.steps__step_detail--title').html(`<h3>プランご購入</h3>`);
            $('.steps__step_detail--text').html(`<p>自分にあったプランを選び、購入手続き画面に進んだのち、必要事項の記入・手続きの提出をオンラインでしていただきます。</p>`);
        } else if (slideIndex == 1) {
            $('.steps__step_detail--title').html(`<h3>お支払い</h3>`);
            $('.steps__step_detail--text').html(`<p>選択したプランの料金を、購入手続き画面にてお支払いしていただきます。</p>`);
        } else if (slideIndex == 2) {
            $('.steps__step_detail--title').html(`<h3>セミナーで使用するテキストの購入（プレミアムプランご購入の方はテキストが付属です）</h3>`);
            $('.steps__step_detail--text').html(`<p>FORIS専用のNoteアカウントにアクセスしていただいたのち、セミナーに必要なテキストを購入していただきます。ただし、プレミアムプランのご購入の方はプラン特典として、テキストのアクセス権が付属してきます。</p>`);
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
            $('.steps__step_detail--text').html(`<p>セミナー終了後、セミナー後に上がった質疑の応答や、同じセミナーを受けた仲間と混じり合えるオンラインサロンへご招待させていただきます。また、お客様のES添削や面接着の個別アドバイスなど、サポートをさせていただきます。</p>`);
        }
    }

    // function fillBar()
    
    function animate() {
        return setInterval(function() {
            var slide = slides[slideIndex];
            slideTo(slide)
            slideIndex++;
            if (slideIndex == slides.length) slideIndex = 0; 
        }, 3000);
    }
});