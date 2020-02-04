$(document).ready(function() {

	 // табы  DELIVERY
	$('.jsTabsBtnDel').on('click', function() {
		var 	tabContainer = $(this).closest('.jsTabs'),
				tabContentItem = tabContainer.find('.jsTabItemDel'),
				tabActive = tabContentItem.filter('.active'),
				ndx = $(this).index(),
				reqItem = tabContentItem.eq(ndx);

		if (!$(this).hasClass('active')) {
			$(this).siblings().removeClass('active').end().addClass('active');
			tabContentItem.removeClass('active');
			reqItem.addClass('active');
		} 
	})
	
});



