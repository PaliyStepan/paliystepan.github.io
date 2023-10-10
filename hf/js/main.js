
// DOCUMENT READY - START
$(document).ready(function() {

    $('.jsScrollButton').on('click', function (e) {
        e.preventDefault();
        var getvalue = $(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(getvalue).offset().top  }, 500);
    });

    document.querySelectorAll('.jsSliderCards').forEach(item => {
        var slides = new Swiper(item.querySelector('.slider__init'), {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 40,
            navigation: {
                prevEl: [item.querySelector('.jsSliderBtnPrevMobile'), item.querySelector('.jsSliderBtnPrev')],
                nextEl: [item.querySelector('.jsSliderBtnNextMobile'), item.querySelector('.jsSliderBtnNext')],
            },
            pagination: {
                el: ".jsSliderCards .swiper-pagination",
                type: "progressbar",
            },
            breakpoints: {
                768: {
                    spaceBetween: 16,
                    slidesPerView: 2,
                },
                1024: {
                    spaceBetween: 16,
                    slidesPerView: 3,
                },
            },
        });
    })


    document.querySelectorAll('.jsSliderHistory').forEach(item => {
        var slides = new Swiper(item.querySelector('.slider__init'), {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".jsSliderHistory .swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                prevEl: [item.querySelector('.jsSliderHistoryBtnPrev'), item.querySelector('.jsSliderHistoryBtnPrevMobile')],
                nextEl: [item.querySelector('.jsSliderHistoryBtnNext'), item.querySelector('.jsSliderHistoryBtnNextMobile')],
            },
        });
    })

    document.querySelectorAll('.jsSliderStudiosRow').forEach(item => {
        var slides = new Swiper(item.querySelector('.slider__init'), {
            slidesPerView: 'auto',
            loop: false,
            spaceBetween: 12,
            pagination: {
                el: ".jsSliderStudiosRow .swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                prevEl: [item.querySelector('.jsSliderStudiosBtnPrev'), item.querySelector('.jsSliderStudiosBtnPrevDesk')],
                nextEl: [item.querySelector('.jsSliderStudiosBtnNext'), item.querySelector('.jsSliderStudiosBtnNextDesk')],
            },
            breakpoints: {
                1024: {
                    spaceBetween: 12,
                    slidesPerView: 4,
                },
            },
        });
    })

    document.querySelectorAll('.jsSliderCoaches').forEach(item => {
        var slides = new Swiper(item.querySelector('.slider__init'), {
            slidesPerView: 2,
            spaceBetween: 8,
            loop: false,
            pagination: {
                el: ".jsSliderCoaches .swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                prevEl: [item.querySelector('.jsSliderCoachesBtnPrev'), item.querySelector('.jjsSliderCoachesBtnPrevMobile')],
                nextEl: [item.querySelector('.jjsSliderCoachesBtnNext'), item.querySelector('.jsSliderCoachesBtnNextMobile')],
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    spaceBetween: 12,
                    slidesPerView: 3,
                },
                1200: {
                    spaceBetween: 12,
                    slidesPerView: 4,
                },
            },
        });
    })


    var checkSlidesLength = function (that) {
        if (that.closest('.jsSliderSchedule').querySelectorAll('.slider__slide').length < 4) {
            that.closest('.jsSliderSchedule').querySelector('.slider__nav').classList.add('d-none')
        } else {
            that.closest('.jsSliderSchedule').querySelector('.slider__nav').classList.remove('d-none')
        }
    }

    if ($(window).width() > 1023) {
        var jsSliderSchedule = new Swiper(".jsSliderSchedule .slider__init", {
            slidesPerView: 3,
            spaceBetween: 12,
            loop: false,
            navigation: {
                prevEl: ".jsSliderSchedule .jsSliderBtnPrev",
                nextEl: ".jsSliderSchedule .jsSliderBtnNext",
            },
            on: {
                init: function () {
                    checkSlidesLength(this.el)
                },
                update: function () {
                    checkSlidesLength(this.el)
                },
            },
        });
    }



    if ($(window).width() < 1023) {
        var sliderClubs = new Swiper(".jsSliderClubs .slider__init", {
            slidesPerView: 1,
            spaceBetween: 32,
            loop: false,
            autoHeight: true,
            pagination: {
                el: ".jsSliderClubs .swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                prevEl: ".jsSliderClubs .jsSliderBtnPrev",
                nextEl: ".jsSliderClubs .jsSliderBtnNext",
            },
        });

        var sliderStudios = new Swiper(".jsSliderStudios .slider__init", {
            slidesPerView: 'auto',
            spaceBetween: 12,
            loop: false,
            autoHeight: true,
            pagination: {
                el: ".jsSliderStudios .swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                prevEl: ".jsSliderStudios .jsSliderStudiosBtnPrev",
                nextEl: ".jsSliderStudios .jsSliderStudiosBtnNext",
            },
        });

        var sliderSubscription = new Swiper(".jsSliderSubscription .slider__init", {
            slidesPerView: 'auto',
            spaceBetween: 1,
            loop: false,
            autoHeight: true,
            pagination: {
                el: ".jsSliderSubscription .swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                prevEl: ".jsSliderSubscription .jsSliderStudiosBtnPrev",
                nextEl: ".jsSliderSubscription .jsSliderStudiosBtnNext",
            },
            breakpoints: {
                768: {
                    spaceBetween: 8,
                    slidesPerView: 2,
                },
            },
        });
    }

    document.querySelectorAll('.jsSliderActions').forEach(item => {
        var slides = new Swiper(item.querySelector('.slider__init'), {
            slidesPerView: 1,
            loop: false,
            spaceBetween: 20,
            pagination: {
                el: ".jsSliderActions .swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                prevEl: [item.querySelector('.jsSliderActionsBtnPrev'), item.querySelector('.jsSliderActionsBtnPrevMobile')],
                nextEl: [item.querySelector('.jsSliderActionsBtnNext'), item.querySelector('.jsSliderActionsBtnNextMobile')],
            },
            breakpoints: {
                768: {
                    spaceBetween: 5,
                    slidesPerView: 2,
                },
            },
        });
    })


    $(document).on('click','.jsBurger', function (){
        $('html').addClass('is-fixed')
        $('.jsMenuBack').addClass('is-active')
        $('.jsMenu').addClass('is-active')
    })

    $(document).on('click', '.jsMenuBack, .jsMenuClose', function (){
        $('html').removeClass('is-fixed');
        $('.jsMenuBack').removeClass('is-active');
        $('.jsMenu').removeClass('is-active');
    })

    $(document).on('click', '.jsSeoBlockTrigger', function (){
        $(this).closest('.jsSeoBlock').toggleClass('is-active');
        $(this).closest('.jsSeoBlock').find('.jsSeoBlockHidden').slideToggle(350)
    })

    $(document).on('click', '.jsLabelSelectValue', function (){
        $(this).closest('.jsLabelSelects').toggleClass('is-active');
    })


    $('.jsLabelInput').on('input', function (){
        $(this).closest('.jsLabelSelects').removeClass('is-active');
        $('.jsLabelSelectValue').find('.block-link__title').html($(this).closest('.label-select').find('.label-select__title').html())
        $('.jsLabelSelectValue').find('.block-link__desc').html($(this).closest('.label-select').find('.label-select__desc').html())
    })

    $(document).on('click', '.jsBadgeSelectOption', function (){
        $(this).closest('.jsBadgeSelect').toggleClass('is-active');
    })

    $('.jsBadgeSelectInput').on('input', function (){
        $(this).closest('.jsBadgeSelect').removeClass('is-active');
        $('.jsBadgeSelectOption').find('.badge-select__option-text').html($(this).closest('.badge').find('.badge__text').html())
    })

    $('.jsJumbotronModalOverflow').each(function () {
        if ($(this).find('.block-link').length > 6) {
            $(this).addClass('is-overflow')
        }
    })

    const input = document.querySelectorAll('.jsInput');

    const checkChange = function (that) {
        const val = that.value;
        if (val) {
            that.parentNode.classList.add('is-changed');
        } else {
            that.parentNode.classList.remove('is-changed');
            that.parentNode.classList.remove('is-error');
        }
    };

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('focus', function() {
            this.parentNode.classList.add('is-focused');
            checkChange(this);
        });

        input[i].addEventListener('blur', function() {
            this.parentNode.classList.remove('is-focused');
            checkChange(this);
        });

        input[i].addEventListener('input', function() {
            checkChange(this);
        });
    }


    $(document).on('click', '.jsModalStepTrigger', function (){
        $(this).closest('.jsModalStep').removeClass('is-active');
        $(this).closest('.jsModalStep').next().addClass('is-active');
    })

    $(document).on('click', '.jsModalStepBack', function (){
        $(this).closest('.jsModalStep').removeClass('is-active');
        $(this).closest('.jsModalStep').prev().addClass('is-active');
    })


    $('.jsFileInput').on('change', function (){
        $(this).closest('.jsFileBlock').addClass('is-active')
        $(this).closest('.jsFileBlock').find('.jsFileBlockText').html((this.files[0].name))
    })

    $(document).on('click', '.jsFileClear', function (){
        $(this).closest('.jsFileBlock').removeClass('is-active')
    })

    document.querySelectorAll('.jsSliderArticle').forEach(slider => {
        if ((slider.querySelectorAll('.slider__slide').length > 3)) {

            var slides = new Swiper(slider.querySelector('.slider__init'), {
                slidesPerView: 1,
                spaceBetween: 16,
                loop: false,
                pagination: {
                    el:  slider.querySelector('.swiper-pagination'),
                    type: "progressbar",
                },
                navigation: {
                    prevEl: [slider.querySelector('.jsSliderArticleBtnPrevMobile'), slider.querySelector('.jsSliderArticleBtnPrev')],
                    nextEl: [slider.querySelector('.jsSliderArticleBtnNextMobile'), slider.querySelector('.jsSliderArticleBtnNext')],
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                },

                on: {
                    init: function () {
                        slider.classList.add('slider-initialized')
                    },
                }
            });

        }
        else {
            if ($(window).width() < 768 && slider.querySelectorAll('.slider__slide').length > 1) {
                var slides = new Swiper(slider.querySelector('.slider__init'), {
                    slidesPerView: 1,
                    spaceBetween: 16,
                    loop: false,
                    pagination: {
                        el:  slider.querySelector('.swiper-pagination'),
                        type: "progressbar",
                    },
                    navigation: {
                        prevEl: [slider.querySelector('.jsSliderArticleBtnPrevMobile'), slider.querySelector('.jsSliderArticleBtnPrev')],
                        nextEl: [slider.querySelector('.jsSliderArticleBtnNextMobile'), slider.querySelector('.jsSliderArticleBtnNext')],
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                    },
                    on: {
                        init: function () {
                            slider.classList.add('slider-initialized')
                        },
                    }
                });
            }
        }

        if ((slider.querySelectorAll('.slider__slide').length > 1)) {
            slider.classList.add('is-square')
        }

    })


    $('.jsShowPopupSocial').on('click', function (){
        $(this).toggleClass('is-active')
    })


    $(document).on('click', function (e) {
        if ( !$('.jsShowPopupSocial').is(e.target)) {
            if ($('.jsShowPopupSocial').hasClass('is-active')) {
                $('.jsShowPopupSocial').removeClass('is-active')
            }
        }``
    })


});

// DOCUMENT READY - ENDS

