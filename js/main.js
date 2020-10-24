$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$(document).ready(function () {
    // $('.popup-with-form').magnificPopup()


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
})

