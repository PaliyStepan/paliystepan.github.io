$(document).ready(function() {

    $('.accordion-item__visible').on('click', function(event) {
        $(this).toggleClass('active');
        $(this).siblings('.accordion-item__hidden').slideToggle(350);
    });
});
