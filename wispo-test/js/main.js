var hideMenu = function (){
	$('.jsBgElement').removeClass('is-active');
	$('.jsMenu').removeClass('is-active');
	$('.jsMenuOverlay').removeClass('is-active');
	$('html').removeClass('is-fixed');
};


var showMenu = function (){
	$('.jsBgElement').addClass('is-active');
	$('.jsMenu').addClass('is-active');
	$('.jsMenuOverlay').addClass('is-active');
	$('html').addClass('is-fixed');
};

// var headerFixedToggle = function() {
// 	var headerDesktop = document.querySelector('.jsHeader'),
// 		headerSourceBottom = 1;
// 	if (headerDesktop) {
// 	    if (headerDesktop.classList.contains('header_fixed') && window.pageYOffset < headerSourceBottom) {
// 	        headerDesktop.classList.remove('header_fixed');
// 	    } else if (window.pageYOffset > headerSourceBottom) {
// 	        headerDesktop.classList.add('header_fixed');
// 	    }
//     }
// };

// var cleanForm = function(form){
// 	form.find('.jsFormSuccess').fadeOut(400,function(){
// 		form.trigger('reset');
// 		form.find('.jsFormRatePayment').fadeOut(400);
// 		form.find('.jsFormRateStepFirst').fadeIn(400);
// 		form.find('.jsFormFront').fadeIn(400);
// 	})
// };

var formGetSuccess = function(form){
	form.find('.jsFormFront').fadeOut(400,function(){
		form.find('.jsFormSuccess').fadeIn(400);
		setTimeout(function(){
			cleanForm(form);
      form.removeAttr("style");
		},4000)
	})
};



// var stickySidebar;

// var setStickyBlock = function () {
//   if ( $('.jsStickySidebar').length > 0 && $(window).width() > 991 ) {
//     setTimeout(function(){
//       stickySidebar = new StickySidebar('.jsStickySidebar',{topSpacing: 120})
//     },10);
//   }
// };

var formHeight = function (that){
  that.css('height', that.css("height") ) ;
};


// DOCUMENT READY - START

$(document).ready(function() {


	$('.jsMenuTrigger').on('click',  function(event) {
		event.preventDefault();
		if(  $('.jsMenu').hasClass('is-active') ) {
			hideMenu();
		} else {
			showMenu();
		}
	});


	$('.jsTabBtn').on('click', function() {
		var $this = $(this),
			tabContainer = $this.closest('.jsTabs'),
			tabContentItem = tabContainer.find('.jsTabsItem'),
			ndx = $this.data('tab'),
			reqItem = tabContentItem.eq(ndx - 1);

		if (!$this.hasClass('is-active')){
			$this.closest('.jsTabs').find('.jsTabBtn').removeClass('is-active');
			$this.addClass('is-active');
			tabContentItem.removeClass('is-active');
			reqItem.addClass('is-active');
		}

	});




	$('.jsProductSlider').each(function () {
		var that = $(this);
		var slider = new Swiper(that.find('.jsSliderInit'), {
			slidesPerView: 'auto',
			spaceBetween: 8,
			loop: false,
			scrollbar: {
				el: that.find('.jsSliderScroll'),
			},
			navigation: {
				nextEl: that.find('.jsSliderBtnNext'),
				prevEl: that.find('.jsSliderBtnPrev'),
			},
			breakpoints: {
				768: {
					spaceBetween: 16,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 32
				},
			}
		});
	});


	$('.jsProductSliderMd').each(function () {
		var that = $(this);
		var slider = new Swiper(that.find('.jsSliderInit'), {
			slidesPerView: 'auto',
			spaceBetween: 8,
			loop: false,
			scrollbar: {
				el: that.find('.jsSliderScroll'),
			},
			navigation: {
				nextEl: that.find('.jsSliderBtnNext'),
				prevEl: that.find('.jsSliderBtnPrev'),
			},
			breakpoints: {
				768: {
					spaceBetween: 16,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 32
				},

			},
		});
	});

	$('.jsMainSlider').each(function () {
		var that = $(this);
		var slider = new Swiper(that.find('.jsSliderInit'), {
			slidesPerView: 1,
			spaceBetween: 16,
			loop: false,
			scrollbar: {
				el: that.find('.jsSliderScroll'),
			},
			navigation: {
				nextEl: that.find('.jsSliderBtnNext'),
				prevEl: that.find('.jsSliderBtnPrev'),
			}
		});

		slider.on('slideChange', function () {
			document.querySelector('.jsMainSliderCurrent').innerHTML = this.activeIndex + 1
		})
	});


	$('.jsSliderTabs').each(function () {
		var that = $(this);
		var slider = new Swiper(that.find('.jsSliderInit'), {
			slidesPerView: 'auto',
			spaceBetween: 16,
			loop: false,
			scrollbar: {
				el: that.find('.jsSliderScroll'),
			},
			navigation: false,
			breakpoints: {
				1024: {
					slidesPerView: 4,
					spaceBetween: 32
				},
			},
		});
	});

	if ($(window).width() < 767) {

		$('.jsSliderAdvantage').each(function () {
			var that = $(this);
			var slider = new Swiper(that.find('.jsSliderInit'), {
				slidesPerView: 1,
				spaceBetween: 16,
				loop: false,
				scrollbar: {
					el: that.find('.jsSliderScroll'),
				},
			});
		})
	}





















		// // accordion
	// $('.jsAccordTrigger').on('click', function() {
 //        var thisPar = $(this).closest('.jsAccordionItem');
 //        if (!thisPar.hasClass('active')) {
 //        	$('.jsAccordionItem').removeClass('active');
 //            thisPar.addClass('active');
 //           $('.jsAccordBody').slideUp(350);
 //            thisPar.find('.jsAccordBody').slideDown(350);
 //        } else {
 //            thisPar.removeClass('active');
 //            thisPar.find('.jsAccordBody').slideUp(350);
 //        }
 //    });
 //    // accordion ENDS

 //    headerFixedToggle();

	// $(window).on('scroll', function() {
	// 	headerFixedToggle();
	// });




	//   if ($('.jsLkMenu').hasClass('active')) {
 //      $('.jsLkMenu').removeClass('active').animate({left: '-100%'},350);
 //      $('.jsBgElement').removeClass('is-active');
 //      $('html').removeClass('fixed');
 //    }

	// });





	// $('.jsFavoriteLike').on('click',function(e) {
	// 	e.preventDefault();
	// 	if (!$(this).hasClass('active')) {
	// 		$(this).addClass('active')
	// 	} else {
	// 		$(this).removeClass('active')
	// 	}
	// });


	// $('.jsChangePassword').on('click', function() {
 //        $(this).toggleClass('active');
 //        if (!$(this).hasClass('active')) {
 //            $(this).siblings('.jsPasswordInput').attr("type","password");
 //        } else {
 //            $(this).siblings('.jsPasswordInput').attr("type","text");
 //        }
 //    });



	// $('.jsCustomLink').on('click',  function(event) {
	// 	event.preventDefault();
	// 	var href = $(this).data('target');
	// 	$('.modal.show').modal('hide');
	// 	setTimeout(function(){
 //    		$(href).modal('show');
	// 	},550)
	// });

 //  setStickyBlock();

	// $('.jsNavLink').on('click', function(event) {
	// 	event.preventDefault();
	// 	var href = $(this).attr('href');
	// 	if ($('.jsBgElement').hasClass('active')) {
	// 		hideMenu();
	// 	}

	// 	if (!$(this).hasClass('jsNavLinkSecond')) {
 //      $('html, body').stop().animate({scrollTop: $(href).offset().top - 40}, 1000);
 //    } else {
 //      $('html, body').stop().animate({scrollTop: $(href).offset().top - 140}, 1000);
 //    }
	// });


	// $('.jsFormFirstStep').on('click', function(event) {
	// 	event.preventDefault();
	// 	var inputs = $(this).closest('.jsFormRate').find('.jsTabsItem.active .form__input');
	// 	var ok = true;
	// 	var emailsOk = false;

	// 	inputs.each(function() {
	// 		if ($(this).val() == "") {
 //    			ok = false;
 //    			$(this).closest('.form__item').addClass('is_empty');
 //    		} else {
 //    			$(this).closest('.form__item').removeClass('is_empty');
 //    		}
	// 	});

	// 	var emailFirst = $(this).closest('.jsFormRate').find('.jsTabsItem.active .jsInputEmailCheckFirst');
	// 	var emailSecond = $(this).closest('.jsFormRate').find('.jsTabsItem.active .jsInputEmailCheckSecond');

	// 	if (emailSecond.val() !== emailFirst.val()) {
	// 		emailsOk = false;
	// 		emailSecond.closest('.form__item').addClass('show-mark')
	// 	} else {
	// 		if (!emailSecond.closest('.form__item').hasClass('is_error')) {
	// 			emailsOk = true;
	// 		}
	// 	}

	// 	if (ok && emailsOk ) {
	// 		// ecли в форме есть шаг с оплатой
	// 		if ($(this).closest('.jsFormRate').find('.jsFormRatePayment').length > 0) {
	// 			$(this).closest('.jsFormRate').find('.jsFormRateStepFirst').fadeOut(400,function(){
	// 				$(this).closest('.jsFormRate').find('.jsFormRatePayment').fadeIn(400)
	// 			})
	// 		} else {
	// 			formGetSuccess($(this).closest('.jsFormRate'));
	// 		}

	// 	} else {
	// 		$('.form__item.is_empty').first().find('.form__input').focus();
	// 	}

	// });


	// $('.jsFormInput').each(function(index, el) {
 //    	$(this).on('keyup',function() {
 //    		if ( $(this).val() !== "") {
 //    			$(this).closest('.form__item').removeClass('is_empty');
 //    		}
 //    	});
 //    });

    $('.jsFormSubmit').on('click', function(event) {
    	event.preventDefault();
    	formGetSuccess($(this).closest('form'))
    });



    $('.jsFormSubmitSubscribe').on('click', function(event) {
	    event.preventDefault();

    	if ( $(this).closest('.jsForm').find('.subscription__input').val() !== '')  {
		    formGetSuccess($(this).closest('form'))
	    } else {
		    $(this).closest('.jsForm').find('.subscription__input').focus();
	    }

    });





	// $(document).on('click', function(e) {
	// 	if (
	// 		!$('.jsSelect').is(e.target)
	// 		&& !$('.jsSelectTrigger').is(e.target)
	// 		&& !$('.jsSelectTrigger *').is(e.target)
	// 		&& $('.jsSelect').hasClass('active')
	// 	){
	// 		$('.jsSelect').removeClass('active');
	// 	}

	// 	if (
	// 		!$('.jsNewTabs').is(e.target)
	// 		&& !$('.jsNewTabs *').is(e.target)
	// 		&& $('.jsNewTabs').hasClass('active')
	// 	){
	// 		$('.jsNewTabs').removeClass('active');
	// 	}

	// });



});

// DOCUMENT READY - ENDS





