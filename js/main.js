
$(function(){

    $('.header__intro').slick({

        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 5,
        cssEase: 'linear',
        speed: 1000,
    });

  });

$(window).scroll(function(){

        if ($(this).scrollTop() > 100) {
        if ($('.footer__social').is(':hidden')) {
           $('.footer__social').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('.footer__social').stop(true, false).fadeOut('fast'); }
  });

           $('.footer__social').click(function() {
           $('html, body').stop().animate({scrollTop : 0}, 300);
  });













