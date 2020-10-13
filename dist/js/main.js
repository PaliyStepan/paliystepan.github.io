function formSubmit(form) {
	var parent = form.closest('.jsFormBlock');
    var formSuccess = form.siblings('.jsFormSuccess');

    form.slideUp(350, function(){
    	formSuccess.delay(400).slideDown(350);
    });

    setTimeout(function() {
        form.trigger('reset');
        formSuccess.slideUp(300);
        setTimeout(function() {
            form.slideDown(400, function(){
            	parent.removeAttr("style");
            });
        }, 350); 
    }, 3000);
}

function formHeight(form) {
	form.closest('.jsFormBlock').css('height', form.css("height"));
}


$(document).ready(function() { 
	$('.jsForm').on('submit', function(event) {
		event.preventDefault();
		formSubmit($(this));
		formHeight($(this));
	});

	var sliderSpeed = 4000;

	$('.jsMainSecSlider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:false,
		arrows: false,
		draggable: false,
		swipe: false,
		autoplay: true,
		autoplaySpeed: sliderSpeed,
	});

	//show menu
	$('.jsBurger').on('click', function(event) {
		$('.jsMenu').animate({left: 0},350);
		$('html').addClass('is_fixed');
	});


	//hide menu
	$('.jsCloseMenu').on('click', function(event) {
		$('.jsMenu').animate({left: '100%'},350);
		$('html').removeClass('is_fixed');
	});

	// navlink
	$('.jsNavLink').on('click', function(e){
		e.preventDefault();
		var getvalue = $(this).attr('href');
		$('html, body').stop().animate({scrollTop: $(getvalue).offset().top}, 500);
	});




	//header fixed
	function headerFixedDesctop(header) {

		var header;
		var headerSourceBottom = 1;


		if ($(window).width() > 991) {
			header = document.querySelector('.jsMenu');
		} else {
			header = document.querySelector('.jsMobileHeader');
		}

		
		 
		

	    if (header.classList.contains('header_fixed') && window.pageYOffset < headerSourceBottom) {
	        header.classList.remove('header_fixed');
	    } else if (window.pageYOffset > headerSourceBottom) {
	        header.classList.add('header_fixed');
	    }

	}

	headerFixedDesctop();

	// window scroll

	$(window).on('scroll', function() {
		headerFixedDesctop();
	});

	$(window).on('resize', function() {
		headerFixedDesctop();
	});

})