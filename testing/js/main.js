$(document).ready(function() { 

	$('.jsSelect').chosen({no_results_text: "Ничего не найдено", disable_search: true, width: "100%" }); 
	$('.jsSelectSearch').chosen({no_results_text: "Ничего не найдено", width: "100%" }); 


	$('.jsColorItem').each(function(index, el) {
		$(this).css({
			backgroundColor : dataColor = $(this).data('color')
		});
	});

	$('.jsBurger').on('click',  function() {
		if (!$('.jsMenu').hasClass('active')) {
			$('.jsMenu').addClass('active').slideDown(350);
			$(this).addClass('active');
			$('html').addClass('fixed');
		} else {
			$('.jsMenu').removeClass('active').slideUp(350);
			$(this).removeClass('active');
			$('html').removeClass('fixed');
			$('.jsSubNav, .jsSubNavBody').animate({left: "-100%"},250);
		}
	});


	$('.jsItemFavorite').on('click',function(event) {
		$(this).toggleClass('is_add');
		console.log('obj');
        return false;
	});


	$('.jsNavLink').on('click', function(event) {
		event.preventDefault();

		if ($(window).width() >1199) {
			if (!$(this).closest('.jsNavItem').hasClass('active')) {

				$('.jsNavItem.active').removeClass('active');
				$('.jsSubNav.active').removeClass('active').fadeOut(350);

				$(this).closest('.jsNavItem').addClass('active');
				$(this).closest('.jsNavItem').find('.jsSubNav').addClass('active').fadeIn(350);
				$('html').addClass('fixed');
				$('.jsElementBg').addClass('active').animate({opacity: 1},350);
			} else {
				$(this).closest('.jsNavItem').removeClass('active');
				$(this).closest('.jsNavItem').find('.jsSubNav').removeClass('active').fadeOut(350);
				$('html').removeClass('fixed');
				$('.jsElementBg').removeClass('active').animate({opacity: 0},350);
			}
		} else {
			$(this).closest('.jsNavItem').find('.jsSubNav').animate({left: 0},350);
		}

		$(this).closest('.jsNavItem').find('.jsSliderSubnav').slick('setPosition');
	});

	$('.jsElementBg').on('click',function() {
		$('html').removeClass('fixed');
		$('.jsElementBg').removeClass('active').animate({opacity: 0},350);
		$('.jsNavItem.active').find('.jsSubNav').fadeOut(350).end().removeClass('active');
	});



	$('.jsSubNav').on('click',  function(event) {
		if ($('.jsSubNav').is(event.target))  {
			$(this).closest('.jsNavItem').removeClass('active');
			$(this).fadeOut(350);
			$('html').removeClass('fixed');
			$('.jsElementBg').removeClass('active').animate({opacity: 0},350);
		} 
	});


	$('.jsSubNavBack').on('click', function() {
		$(this).closest('.jsSubNav').animate({left: "-100%"},350);
	});

	$('.jsSubNavTitle').on('click', function() {
		if ($(window).width() <768) {
			$(this).siblings('.jsSubNavBody').animate({left: 0},350);
			$(this).closest('.jsSubNav').addClass('fixed')
		}
	});

	$('.jsSubNavItemBack').on('click', function() {
		$(this).closest('.jsSubNavBody').animate({left: "-100%"},350);
		$(this).closest('.jsSubNav').removeClass('fixed')
	});

	$('.jsMainLinks').each(function(index, el) {
		var index = $(this).index();
		$(this).mouseenter(function(){
			if (index === 0) {
				$('.top-banner__img').removeClass('active');
				$('.jsMainBgWoman').addClass('active');
			} else {
				$('.top-banner__img').removeClass('active');
				$('.jsMainBgMan').addClass('active');
			}
		})

		$(this).mouseleave(function(){
		})
	});





	// sliders 


	$('.jsSliderSubnav').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1439,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	$('.jsSliderNew').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.jsSliderChoiсe').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

})