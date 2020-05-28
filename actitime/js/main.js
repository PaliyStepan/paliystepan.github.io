$(document).ready(function() {


	// slider

    $('.jsMainSlider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $(window).on('scroll', function() {
    	headerFixedToggle();
    });


    // header fixed

    function headerFixedToggle() {
		var header = $('.header'),
			headerSourceBottom = header.innerHeight();
	    if (header.hasClass('header_fixed') && window.pageYOffset < headerSourceBottom) {
	        header.removeClass('header_fixed');

	    } else if (window.pageYOffset > headerSourceBottom ) {
	        header.addClass('header_fixed');
	    }
	}


	// menu

    $('.jsBurger').on('click', function () {
        var header = $('.header');
        var menu = $('.jsMenu');
        if (!header.hasClass('active')) {
            header.addClass('active');
            menu.animate({top: "100%"}, 600)
        } else {
            header.removeClass('active');
            menu.animate({top: "-1000px"}, 800)
        }
    });

    $('.nav__item_parent .nav__link').on('click', function (e) {
        if ($(window).width() < 1024) {
            e.preventDefault();
            var parent = $(this).closest('.nav__item_parent');
            var dropDown = $(this).siblings('.dropdown');

            if (!parent.hasClass('active')) {
                parent.addClass('active');
                dropDown.slideDown(350);
            } else {
                parent.removeClass('active');
                dropDown.slideUp(350);
            }

        }
    })

});
