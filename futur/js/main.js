$(document).ready(function() { 

	$('.jsBurger').on('click', function() {
		if ( $(window).width() > 1365) {
				if ( !$('.jsMenu').hasClass('active')) {
				$('.jsMenu').addClass('active').animate({width: 560});
				$('.jsMenuLine').delay(50).animate({height: "100%", },550, function() {
					$(this).animate({left: 80},300);
				});
				$('.jsBurger').delay(50).animate({top: "-100%", },800, function(){
					$('.jsNav').css({display: 'block'}).delay(250).animate({opacity: 1 },350);
				});
				$('.jsCloseMenu').delay(350).animate({top: 20, opacity: 1 },850);
			}
		} else {
			$('.jsNav').animate({left: 0},400);
			$('html').addClass('fixed')
		}
		
	});

	function closeMenu() {
		if ( $(window).width() > 1365) {
			$('.jsNav').css({display: 'none'}).delay(200).animate({opacity: 0 },250);
			$('.jsCloseMenu').delay(100).animate({top: '-100%', opacity: 0 },850);
			$('.jsMenu').removeClass('active').animate({width: 70});
			$('.jsMenuLine').delay(100).animate({left: 34},550, function() {
				$(this).animate({height: "47%", },300);
			});
			$('.jsBurger').delay(190).animate({top: "50%", },800);
		} else {
			$('.jsNav').animate({left: '-100%'},400);
		}

		$('html').removeClass('fixed');
	}

	$('.jsCloseMenu').on('click',function() {
		closeMenu()
	});

	// клик не по элементу
	$(document).on('click', function(e) {
		if (
			!$('.jsMenu').is(e.target) 
			&& !$('.jsMenu *').is(e.target) 
			&& $('.jsMenu').hasClass('active') 
		){				
			closeMenu()
		};
	});


	$('.jsAboutItem').on('click',function() {
		if ($(window).width() < 768) {
			$(this).toggleClass('active').siblings('.jsAboutBody').slideToggle(350);
		}
	});



	// mobile or desktop
	function checkTypeDevice() {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		    $('body').addClass('is_mobile')
		  } else {
		    $('body').addClass('is_desktop')
		}
	}
	checkTypeDevice()



	function formHeight(that){
		that.css('height', that.css("height") ) ; 
    }


	$('.jsForm').on('submit', function(e) {
		e.preventDefault();
		formSubmitSuccess($(this));
		if ($(window).width() < 1024) {
			formHeight($(this));
		}
	});


    function formSubmitSuccess(form) {
        var successForm = form.find('.jsFormSuccess');
        var frontForm = form.find('.jsFormFront');

        frontForm.slideUp(350, function(){
        	successForm.delay(400).slideDown(350);
        });

        setTimeout(function() {
            form.trigger('reset');
            successForm.slideUp(300);
            setTimeout(function() {
                frontForm.slideDown(400,function(){
                	form.removeAttr("style")
                });
            }, 350); 

        }, 4000);
    }

    $('.jsPriceTrigger').on('click', function(event) {
    	if ($(window).width() < 1200) {
    		$(this).toggleClass('active').siblings('.jsPriceContent').slideToggle(350)
    	}

    });





	 // MASK INPUT
	$('.jsPhoneMask').mask('+7(999)999-99-99');


	$('.jsConsistTrigger').on('click',function(event) {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$(this).siblings('.jsConsistContent').slideDown(350)
			$(this).find('span').html('Скрыть')
		} else {
			$(this).removeClass('active');
			$(this).siblings('.jsConsistContent').slideUp(350)
			$(this).find('span').html('Подробнее')
		}
	});

	$('.jsFurniTrigger').on('click', function() {
		if ($(window).width() < 576) {
			$(this).toggleClass('active').siblings('.jsFurniTriggerBody').slideToggle(350)
		}
	});



	function chekLenghtTeamItems(){
		var items = $('.jsTeamItems').find('.f-items__item');

		if ( items.length & 1 ) {
    		$('.jsTeamItems').addClass('is_odd')
		} 

	}

	chekLenghtTeamItems()



	//sliders 

	$('.jsTopBannerSlider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		speed: 800,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
  		autoplaySpeed: 3000,
  		draggable: false
	});

	$('.jsSlider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		nextArrow: '<div class="slider__next wow slideInLeft"> <i class="icon-arrow__right"></i></div>',
		prevArrow: '<div class="slider__next wow slideInRight"> <i class="icon-arrow__left"></i></div>',
		appendArrows: $('.jsSliderArrows'),
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
			    slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
			    centerMode: true,
			    slidesToShow: 1
			  }
			}
		]
	});


	 $('.jsSliderFor').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: true,
		asNavFor: '.jsSliderNav',
	});
	$('.jsSliderNav').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,	
		asNavFor: '.jsSliderFor',	
		dots: false,	
		arrows: false,	
		focusOnSelect: true,
		responsive: [	
			{
				breakpoint: 575,
				settings: "unslick"
			}
		]
	});


	$('.jsTeamSlider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		fade: true,
		cssEase: 'linear',
		draggable: false,
		swipe: false,
		speed: 500,
		autoplaySpeed: 500,
		responsive: [	
			{
				breakpoint: 1023,
				settings: "unslick"
			}
		]
	});


	// f-items slider Animation
	$('.jsItemsSlider').each(function(index, el) {



		var timeSLider = 1500;
		var $this = $(this); 
		var sotrImgInterval;

		$this.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			fade: true,
			cssEase: 'linear',
			draggable: false,
			swipe: false,
			speed: timeSLider,
			autoplaySpeed: timeSLider,
			responsive: [
				{
					breakpoint: 1023,
					settings: "unslick"
				}
			]
		});

		// даем класс с индексом родителя customClass_0, customClass_1
		$this.closest('.f-items__item').find('.jsCircle').addClass('customClass_'+ $this.closest('.f-items__item').index());
		var items = $this.find('.slick-slide');
		var total = +(100 / items.length).toFixed();
		var circle = document.querySelector('.customClass_'+index);
		var radius = circle.r.baseVal.value;
		var circumference = 2 * Math.PI * radius;

		var timeToChange = (timeSLider *2) * items.length;


		circle.style.strokeDasharray = `${circumference} ${circumference}`;
		circle.style.strokeDashoffset = circumference;

		function setProgress(percent) {
			var offset = circumference - percent / 100 * circumference;
			circle.style.strokeDashoffset = offset;
		}

		function getValue(){
			var result = total * ($this.find('.slick-active').index() + 1);
		}

		$this.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var result = total * ($this.find('.slick-active').index() + 1);
			if (result > 100) {
				result = 100
			}
			setProgress(result);
		});


		$this.on('mouseenter',  function() {
		 	$this.slick('slickPlay');
		});

		$this.on('mouseleave',  function() {
			$this.slick('slickPause');
			setTimeout(function(){
				$this.slick('goTo', 0);
				setProgress(0);
			},timeSLider)
		});

	});


		// team sldier Animation
		$('.jsTeamSlider').each(function(index, el) {
			var $this = $(this); 
			$this.on('mouseenter',  function() {
			 	$this.slick('slickPlay');
			});
			$this.on('mouseleave',  function() {
				$this.slick('slickPause');
				setTimeout(function(){
					$this.slick('goTo', 0);
				},550)
			});
		});


	(new WOW).init()	


	// fixed menu

	function headerFixedToggle() {
		var headerDesktop = $('.main-menu_white'),
				headerSourceBottom = 2;
		if ($(window).width() < 1366 && headerDesktop.length > 0) {
			
		    if (headerDesktop.hasClass('header_fixed') && window.pageYOffset < headerSourceBottom) {
		        headerDesktop.removeClass('header_fixed');
		    } else if (window.pageYOffset > headerSourceBottom) {
		        headerDesktop.addClass('header_fixed');
		    }
		} 
	
	}

	headerFixedToggle();

	// window scroll

	$(window).on('scroll', function() {
		headerFixedToggle();
	});


	


});