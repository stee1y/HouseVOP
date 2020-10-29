$(document).ready(function () {
    let heightWindow = $(window).height();
    let widthWindow = $(window).width();
    let heightDocument = $(document).height();
    let heightHiddenMenu = heightDocument - heightWindow;

    // console.log('he', heightWindow)
    // console.log('wi', widthWindow )

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobile()
    } else {}

    $(window).resize(function() {
        heightWindow = $(window).height();
        widthWindow = $(window).width();
        heightDocument = $(document).height();
        heightHiddenMenu = heightDocument - heightWindow;

        if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (widthWindow <= 500) || (heightWindow <= 500) ) {
            mobile();
        } else {
            $('.header__down').css({'display': 'block'})
            $('.header__title').css({'margin-bottom': 100, 'margin-top': '20vh'})
        }
    });

    function mobile() {
        $('.header__down').css({'display': 'none'})
        $('.header__title').css({'margin-bottom': 0, 'margin-top': 30})
    }

    $(window).scroll(function(){
        if($(window).scrollTop() >= heightHiddenMenu){
            $('.header').css({'opacity': 0})
        }else{
            $('.header').css({'opacity': 1})
        }
    });

    $('.header__burger').click(function(e) {
        e.preventDefault();
        $('#open-button').toggleClass('open-button-close');

        $('.header__burger, .nav-list--menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $("body").on('click', '[href*="#"]', function(e){
        const fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        if ($('.header__burger, .nav-list--menu').hasClass('active')) {
            $('.header__burger, .nav-list--menu').toggleClass('active');
            $('body').toggleClass('lock');
            e.preventDefault();
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            }
        }
    })
})

