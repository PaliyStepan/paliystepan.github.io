function onSliderChanger(){
	var index = $('.jsSLider .slick-active').index();
	$('.jsSLiderNavItem').removeClass('active');
	$('.jsSLiderNavItem').eq(index).addClass('active');
}


function formSubmitSuccess(form) {
    var successForm = form.find('.jsFormSuccess');
    var frontForm = form.find('.jsFormFront');
    setTimeout(function() {
        form.trigger('reset');
        successForm.slideUp(300);
        frontForm.find('.jsInput').removeClass('is_active')
        setTimeout(function() {
            frontForm.slideDown(400, function(){
            	form.removeAttr("style");
            });
        }, 350);
    }, 3500);
}



function headerFixedToggle() {
	var headerDesktop = document.querySelector('.jsHeader'),
		headerSourceBottom = 66;
    if (headerDesktop.classList.contains('header_fixed') && window.pageYOffset < headerSourceBottom) {
        headerDesktop.classList.remove('header_fixed');
    } else if (window.pageYOffset > headerSourceBottom) {
        headerDesktop.classList.add('header_fixed');
    }
}






$(document).ready(function() {


	$('.jsForm').on('submit', function(e){
		$(this).css('height', $(this).css("height")); 
		e.preventDefault();
		$(this).find('.jsFormFront').slideUp(350);
		$(this).find('.jsFormSuccess').delay(650).slideDown(350);
		formSubmitSuccess($(this));
	})
	
	headerFixedToggle();


	$(window).on('scroll', function() {
		headerFixedToggle();
	});



	$('.jsSLider').slick({
		infinite: false,
		slidesToShow: 1,
 		slidesToScroll: 1,
 		dots: false,
 		adaptiveHeight: true,
 		appendArrows: $('.jsSliderBtns'),
 		prevArrow: '<button type="button" class="slider__btn slider__btn_prev"> <span class="icon-arrow-left"></span></button>' ,
		nextArrow: '<button type="button" class="slider__btn slider__btn_next"> <span class="icon-arrow-right"></button>', 
	})

	$('.jsSLider').on('setPosition', function(event, slick, currentSlide, nextSlide){
	  onSliderChanger();
	});


	$('.jsSLiderNavItem').on('click', function(){
		var index = $(this).index();
		if (!$(this).hasClass('active')) {
			$('.jsSLiderNavItem').removeClass('active');
			$(this).addClass('active');
			$('.jsSLider').slick('slickGoTo', index);
		}
	})


	$('.add-form__btn').on('click', function() {
        var $input = $(this).siblings('.add-form__input').find('.jsInput');
        if($(this).hasClass('jsInputMinus')) {
            var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
        }
        if($(this).hasClass('jsInputPlus')) {
            $input.val(parseInt($input.val()) + 1);
            $input.change();
        }
    })

});


