const setProgress = (circle, percent, circumference) => {
	const offset = circumference - percent  / 100 * circumference;
	circle.css({"strokeDashoffset" : offset})
};

$(document).ready(function() {
	$('.jsProgressRing').each(function () {
		const percent = $(this).data('val') - 10;
		const svgCircle = $(this).find('.progress-ring__circle');
		const circle = document.querySelector('.progress-ring__circle');
		const radius = circle.r.baseVal.value;
		const circumference = 2 * Math.PI * radius;
		setProgress(svgCircle, percent, circumference);
	})
});

