window.onload = function() {



	var myDate = new Date();
	var day = myDate.getDate() - 1;
	var m = myDate.getMonth() + 1;

	if (day == 0) {
		day = 30;
		m = m - 1;
	}

	if (day < 10) {
		day = '0'+day;

	}

	if (m < 10) {
		m = '0'+m;
	}



	var dayY = document.querySelector('.jsDay');
	var mY = document.querySelector('.jsMonth');
	dayY.innerHTML = day;
	mY.innerHTML = m;

}