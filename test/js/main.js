$(document).ready(function() {


	// tabs
	$('.jsTabBtn').on('click', function() {
		var 	$this = $(this),
				tabContainer = $this.closest('.jsTabContainer'),
				tabContentItem = tabContainer.find('.jsTabItem'),
				tabActive = tabContentItem.filter('.active'),
				ndx = $this.index(),
				reqItem = tabContentItem.eq(ndx);

		$this.addClass('active')
			.siblings()
			.removeClass('active');

		tabContentItem.removeClass('active');
		reqItem.addClass('active');
	})


	// mobile menu  show/hide
	$('.jsBurger').on('click',  function(event) {
		$('.jsMobileMenu').addClass('active').animate({
			left: 0}, 400);

		$('html').addClass('fixed')
	});

	$('.jsMenuClose').on('click',  function(event) {
		$('.jsMobileMenu').removeClass('active').animate({
			left: '-100%'}, 400);

		$('html').removeClass('fixed')
	});


	// fixed header
	function headerFixedToggle() {
		var header = document.querySelector('.header'),
			headerSourceBottom = 90;
	    if (header.classList.contains('header_fixed') && window.pageYOffset < headerSourceBottom) {
	        header.classList.remove('header_fixed');
	    } else if (window.pageYOffset > headerSourceBottom) {
	        header.classList.add('header_fixed');
	    }
	}

	headerFixedToggle();

	$(window).on('scroll', function() {
		headerFixedToggle();
	});


});
