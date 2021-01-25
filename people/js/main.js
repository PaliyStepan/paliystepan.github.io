function sliderToggle() {
	if ($(window).width() < 1199) {
		$('.jsStepsSlider').slick({
		  infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 2,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  responsive: [
			  {
			  	breakpoint: 575,
			  	settings: {
			  		slidesToShow: 2,
		  			slidesToScroll: 1,
			  	}
			  },
			  {
			  	breakpoint: 479,
			  	settings: {
			  		slidesToShow: 1,
		  			slidesToScroll: 1,
			  	}
			  },
		  ]
		});
	}
}

$(document).ready(function() { 
	
	$('.jsSelect').niceSelect();
	$('.select .list').addClass('scrollbar-inner');
    $('.select .scrollbar-inner').scrollbar();

    $('.jsFile').on('change', function() {
		var fileName = $(this).closest('.file-block').find('.file-block__name');
		fileName.html(this.files[0].name);
	});

	$('.jsRange').jRange({
	    from: 0,
	    to: 100,
	    format: '%',
	    width: '100%',
	    showLabels: false,
	    snap: false,
	    theme: false
	});

	$('.jsRange').on('change', function(event) {
		$('.form-range__percents span').html($(this).val());
	});

	$('.jsBurger').on('click', function() {
		$('.jsMenu').animate({left: 0},350);
		$('html').addClass('fixed');
	});

	$('.jsMenuClose').on('click', function() {
		$('.jsMenu').animate({left: "-100%"},350);
		$('html').removeClass('fixed');
	});

	sliderToggle();

})