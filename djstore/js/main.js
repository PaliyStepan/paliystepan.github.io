
$(document).ready(function() { 


	$('.jsBurger').on('click',  function() {
		if (!$('.jsMenu').hasClass('active')) {
			$('.jsMenu').addClass('active').slideDown(350);
			$('.jsBurger').addClass('active');
			$('html').addClass('fixed');
		} else {
			$('.jsMenu').removeClass('active').slideUp(350);
			$('.jsBurger').removeClass('active');
			$('html').removeClass('fixed');

		}
	});

	

	$('.jsMainSlider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		dots: false,
  		adaptiveHeight: true,
  		asNavFor: '.jsNavSlider',
  		fade: true,
  		responsive:[
  			{
  				breakpoint: 1199,
  				settings: {
  					dots: true
  				}
  			}
  		]
	});


	$('.jsNavSlider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		adaptiveHeight: true,
		asNavFor: '.jsMainSlider',
		appendArrows: $('.nav-slider__arrows'),
		prevArrow: '<div class="slick-prev"><i class="icon-arrow"></i></div>',
		nextArrow: '<div class="slick-next"><i class="icon-arrow"></i></div>',
	});


	$('.jsModalForm').on('submit',  function(event) {
		event.preventDefault();
		let height = $('.jsModal').outerHeight();
		$('.jsModal').css({height: height});
		$('.jsModalForm').slideUp(350,function(){
			$('.jsModalSuccess').delay(400).slideDown(350).addClass('active');
		})

	});

	$('.jsSuccessModal').on('click',  function() {
		setTimeout(function() {
			$('.jsModalForm').trigger('reset').slideDown(200);;
			$('.jsModalSuccess').slideUp(200).removeClass('active');
		}, 200);
	});

	$('.jsModal .close').on('click',  function() {
		if ( $('.jsModalSuccess').hasClass('active')) {
    		$('.jsModalForm').trigger('reset').slideDown(200);;
			$('.jsModalSuccess').slideUp(200).removeClass('active');
    	} 
	});


	


	$('.jsProduct').on('click',  function() {
		if (!$('.jsProductModal').hasClass('active')) {
			$('.jsProductModal').addClass('active').fadeIn(350);
		} else {
			$('.jsProductModal').removeClass('active').fadeOut(350);
		}
	});

	$('.jsProductClose').on('click',  function() {
		$('.jsProductModal').removeClass('active').fadeOut(350);
	});


	$(document).on('click', function(e) {
    	if (!$('.jsProductModal').is(e.target)
    		&& $('.jsProductModal').hasClass('active')
    		&& !$('.jsProductModal *').is(e.target) 	
    		&& !$('.jsProduct').is(e.target) 	
    		) {
    		$('.jsProductModal').removeClass('active').fadeOut(350);
    	}	

    	if ($('.modal').is(e.target)
    		&& $('.jsModalSuccess').hasClass('active')
    		) {
    		$('.jsModalForm').trigger('reset').slideDown(200);;
			$('.jsModalSuccess').slideUp(200).removeClass('active');
    	} 

    })




	var tempScrollTop, currentScrollTop = 0;
	$(window).scroll(function(){
		currentScrollTop = $(window).scrollTop();
		if (!$('.jsMenu').hasClass('active')) {
				if (tempScrollTop < currentScrollTop ) {
				$('.header').removeClass('fixed')
			} else if (tempScrollTop > currentScrollTop ){
				if (currentScrollTop > 10) {
					$('.header').addClass('fixed')
				} else {
					$('.header').removeClass('fixed')
				}
				} 
				tempScrollTop = currentScrollTop;
			}
		}
	)













})