$(document).ready(function () {
    $("input[name=phone]").mask("+7 (000) 000-00-00");
    $(".slider").slick({
        arrows: false,
        infinite: true,
        dots: true,
        autoplay: true,
        lazyLoad: 'ondemand',
    });

    $(".products-slider").slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        nextArrow: '<a href="#" class="ml-3 next"><img src="/assets/design/images/right.png"/></a>',
        prevArrow: '<a href="#" class="mr-3 prev"><img src="/assets/design/images/left.png"/></a>',
        responsive: [{
            breakpoint: 1130,
            settings: {
                arrows: false,
                dots: true,
            }
        }]
    });

    $(".news-slider").slick({
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        appendArrows: '.news-arrows',
        nextArrow: '<a href="#" class="ml-3"><img src="/assets/design/images/right.png"/></a>',
        prevArrow: '<a href="#" class="mr-3"><img src="/assets/design/images/left.png"/></a>',
        responsive: [{
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
                dots: true
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                dots: true
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

    $(".video-slider").slick({
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        appendArrows: '.arrow-video-slider',
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
});