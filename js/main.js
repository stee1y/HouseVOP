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

        console.log(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (widthWindow >= 700 && heightWindow >= 700) )
        console.log('he', heightWindow)
        console.log('wi', widthWindow )

        if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (widthWindow <= 700) && (heightWindow <= 700) ) {
            mobile();
        } else {
            console.log(widthWindow <= 700 && heightWindow <= 700)
            $('.header__down').css({'display': 'block'})
            $('.header__title').css({'margin-bottom': 100})
            $('.header__title').css({'margin-top': '20vh'})
        }
    });

    function mobile() {
        $('.header__down').css({'display': 'none'})
        $('.header__title').css({'margin-bottom': 0})
        $('.header__title').css({'margin-top': 30})
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
        if (e.currentTarget.attributes.href.value === '#test-form') {
            $('.popup-with-form').magnificPopup()
        } else {
            var fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            if ($('.header__burger, .nav-list--menu').hasClass('active')) {
                $('.header__burger, .nav-list--menu').toggleClass('active');
                $('body').toggleClass('lock');
            }
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

