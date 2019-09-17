$(document).ready( function () {



	$(document).on('click', function(e){
		
		if(!$('.social__item_email').is(e.target)
            && $('.social__sub-menu').hasClass('social__sub-menu_active')
            && !$('.social__item_email *').is(e.target) 
        ) {
            $('.social__sub-menu').removeClass('social__sub-menu_active');
            $('.header__hamburger').removeClass('is-active');
        }


        if($(window).width() <= 992) {
        	if( !$('.social__list').is(e.target)
        		&&  !$('.header__right').is(e.target)
	            && $('.social__list ').hasClass('social__list_active')
	            && !$('.social__list  *').is(e.target) 
	            && !$('.header__right  *').is(e.target) 
	        ) {
	            $('.social__list').removeClass('social__list_active');
	            $('.header__hamburger').removeClass('is-active');
	        }

        }


		
	})

	$('.social__link_email').on('click', function(){
		$('.social__sub-menu').toggleClass('social__sub-menu_active');
	})

	// hamburger

	var hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", function() {	    
		hamburger.classList.toggle("is-active");	  
	});


	$('.header__hamburger').on('click', function(){
		$('.social__list').toggleClass('social__list_active')
	})

	$('.social__link_email').on('click', function(e){
		e.preventDefault();
	})




	// var winWidth = $(window).width();
	// 	if(winWidth < 768)$('.block').addClass('block__active');
	// 	else $('.block').removeClass('block__active');

	$(window).resize(function(){
		var winWidth = $(window).width();
		if(winWidth > 992) {
			if($('.social__list').hasClass('social__list_active')) {
				$('.social__list').removeClass('social__list_active')
			}
			if($('.header__hamburger').hasClass('is-active')) {
				$('.header__hamburger').removeClass('is-active')
			}
			if($('.social__sub-menu').hasClass('social__sub-menu_active')) {
				$('.social__sub-menu').removeClass('social__sub-menu_active')
			}
		}	
		
	})


	  // hamburger  ENDS =============================

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.btn-to-top').addClass('active');
		} else {
			$('.btn-to-top').removeClass('active');
		};
	});


	$('.to-top__btn').click(function(){
		$('html,body').stop().animate({scrollTop:0}, 'slow', 'swing');
	});



	var rellax = new Rellax('.rellax');

	// INTRO

		$('.overlay__btn').on('click',function(){
			TweenMax.to('.overlay__btn',1, {
				y: -350,
				opacity:0
			});

			TweenMax.to('.overlay__bg', 2, {
				y: -400,
				opacity:0,
				ease: Power2.easeInOut,
				delay: 0.3
			});

			TweenMax.from('.overlay__first', 2, {
				ease: Power2.easeInOut
			});


			TweenMax.to('.overlay__first', 2, {
				delay: 0.5,
				top: "-110%",
				ease: Expo.easeInOut
			});

			TweenMax.to('.overlay__second', 2, {
				delay: 1,
				top: "-110%",
				ease: Expo.easeInOut
			});

			TweenMax.to('.overlay__third', 2, {
				
				delay: 1.5,
				top: "-110%",
				ease: Expo.easeInOut
			});


			TweenMax.from('.sec__header_parallax', 2, {
				y: -100,
				opacity:0,
				ease: Power2.easeInOut,
				delay: 2.0
			});

			TweenMax.to('.sec__title_parallax', 2, {
				
				opacity:1,
				ease: Power2.easeInOut,
				y: 0,
				delay: 2.0
			});

			TweenMax.from('.sec__title_parallax', 2, {
				y: -100,
				opacity:0,
				ease: Power2.easeInOut,
				delay: 2.2
			});

			TweenMax.to('.sec__desc_parallax', 2, {
				opacity:1,
				ease: Power2.easeInOut,
				y: 0,
				delay: 2.2
			});



			// TweenMax.to('.header__right', 2, {
			// 	opacity:1,
			// 	ease: Power4.ease,
			// 	y: 0,
			// 	delay: 2.0
			// });

			// TweenMax.from('.header__right', 2, {
			// 	x: -1000,
			// 	opacity:0,
			// 	ease: Power4.easeInOut,
			// 	delay: 2.2
			// });

			TweenMax.from('.header__right', 1, {
				opacity:0,
				ease: Power1.easeIn,
				x: -1000,
				delay: 3.0
			});

			setTimeout(function(){
				$('body').removeClass('toFixed');
			},2500)
		})

		// $('.overlay__btn').hover(

		// function(){
		// 	if ($(window).width() > 992) {
		// 		$('.overlay__bg').addClass('active')
		// 	}
		  
		// },
		// function(){
		//   if ($(window).width() > 992) {
		//   	// setTimeout(function(){
		//   		$('.overlay__bg').removeClass('active')
		//   	// },500)
				
		// 	}
		// });

		

	// INTRO ENDS ===============

	// $('body').scrollspy({ target: '#navbar-example' })

	var portItem = $('.portfolio__item'),
		portContainer = $(this).closest('portfolio__list'),
		portItems = portContainer.find('.portfolio__item');


	portItem.on('mouseenter', function(){
		if ($(window).width() > 991) {
			$(this).addClass('portfolio__item_active')
			.closest('.portfolio__column')
			.siblings()
			.find('.portfolio__item')
			.addClass('portfolio__item_inactive')
		}
	})

	portItem.on('mouseleave', function(){
		if ($(window).width() > 991) {
			$(this).removeClass('portfolio__item_active')
			.closest('.portfolio__column')
			.siblings()
			.find('.portfolio__item')
			.removeClass('portfolio__item_inactive');
		}
	})

	


	// SKILLS

	// 01. form
	
	$('.form__block').on('click', '.label__tab', function(){
		$('.form__block').find('.active').removeClass('active');
		
		$(this).addClass('active');
		$('.form__tab').eq($(this).index()).addClass('active');
	})


	//scroll bar

	

});


window.onscroll = function() {
	function docScroll () {
		let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
			docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
			scrolled = (winScroll/docHeight) * 100;

		
		document.querySelector('.progress-bar').style.width = scrolled + '%';
		
	}

	docScroll();

}


// $(window).scroll(function(){
// 	// var scrollTop = $(this).scrollTop();
// 	var scrollTop = $(window).scrollTop();

// 	$('.sec__header_parallax').css({
// 		"transform" : "translate(0%, " + scrollTop/10 + "%"
// 	});

// 	(function(){
// 		var svg = $("#Capa_1"),
// 			svgPath = svg.find('.group__svg'),
// 			svgPos = svg.offset().top,
// 			windowMargin = $(window).height() / 3,
// 			startAnimate = scrollTop - svgPos + windowMargin,
// 			pixelsElapsed = svgPos - scrollTop,
// 			percentsElapsed = Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
// 			percentsDraw = 1200 / 100 * percentsElapsed;

		

// 		if (startAnimate > 0) {
		

// 			var drawAmount =  percentsDraw;


// 			if ( drawAmount >0) {
// 				svgPath.css({
// 				'stroke-dashoffset' : drawAmount
// 				});
// 			}
			


// 		}


// 	}());




// });