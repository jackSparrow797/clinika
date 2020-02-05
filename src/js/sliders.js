$(document).ready(function () {
    $("input[name=phone]").mask("+7 (000) 000-00-00");
    $(".slider").slick({
        arrows: true,
        infinite: true,
        dots: true,
        appendArrows: '.dots-outer',
        appendDots: '.dots-outer',
        nextArrow: '<a href="#" class="ml-3 dot-line next"></a>',
        prevArrow: '<a href="#" class="mr-3 dot-line prev"></a>',
        autoplay: true,
        lazyLoad: 'ondemand',
        responsive: [{
            breakpoint: 1130,
            settings: {
                arrows: false,
                dots: true,
            }
        }]
    });

    $(".slider-cert").slick({
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        arrows: true,
        infinite: false,
        dots: true,
        appendArrows: '.dots-bottom',
        appendDots: '.dots-bottom',
        nextArrow: '<a href="#" class="ml-3 dot-line next"></a>',
        prevArrow: '<a href="#" class="mr-3 dot-line prev"></a>',
        responsive: [{
            breakpoint: 1130,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }]
    });

    $(".news-slider").slick({
        dots: true,
        infinite: false,
        arrows: true,
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        appendDots: '.news-dots',
        appendArrows: '.news-dots',
        nextArrow: '<a href="#" class="ml-3 dot-line next"></a>',
        prevArrow: '<a href="#" class="mr-3 dot-line prev"></a>',
        responsive: [{
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
        ]
    });

    $(".photo-slider").slick({
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        appendArrows: '.arrow-photo-slider',
        nextArrow: '<a href="#" class="ml-3"><img src="/assets/design/images/right.png"/></a>',
        prevArrow: '<a href="#" class="mr-3"><img src="/assets/design/images/left.png"/></a>',
        responsive: [{
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        },
        ]
    });

    $(".slider-doctors").slick({
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        dots: true,
        lazyLoad: 'ondemand',
        appendDots: '.doctors-dots',
        appendArrows: '.doctors-dots',
        nextArrow: '<a href="#" class="ml-3 dot-line next"></a>',
        prevArrow: '<a href="#" class="mr-3 dot-line prev"></a>',
        responsive: [{
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        },
        ]
    });

    $(".sales-slider").slick({
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        dots: true,
        lazyLoad: 'ondemand',
        appendDots: '.sales-dots',
        appendArrows: '.sales-dots',
        nextArrow: '<a href="#" class="ml-3 dot-line next"></a>',
        prevArrow: '<a href="#" class="mr-3 dot-line prev"></a>',
        responsive: [{
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        },
        ]
    });


});