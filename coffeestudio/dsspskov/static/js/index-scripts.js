$(document).ready(function () {
    if ($('.js-intro-slider').length > 0) {

        var introSlidesLength = $('.js-intro-slider .swiper-slide').length;
        var introSlider;
        introSlider = new Swiper('.js-intro-slider', {
            loop: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            noSwipingClass: 'no-swiping',
            autoplay: {
                delay: 4000
            },
            pagination: {
                el: '.js-intro-slider .intro-slider__pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.js-intro-slider .intro-slider__btn--next',
                prevEl: '.js-intro-slider .intro-slider__btn--prev',
            },
            on: {
                init: function () {
                    $('.js-intro-slider__count').text(introSlidesLength);
                },
                slideChange: function () {
                    var activeSlideNumber = $(this)[0].realIndex + 1;
                    $('.js-intro-slider__count').text(introSlidesLength);
                    $('.js-intro-slider__current').text(activeSlideNumber);
                }
            }
        });

    }
    if ($('.js-production-slider').length > 0) {
        var productionSlider;
        productionSlider = new Swiper('.js-production-slider', {
            noSwipingClass: 'no-swiping',
            autoplay: {
                delay: 4000
            },
            pagination: {
                el: '.js-production-slider .js-product-slider-pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.js-production-slider .production-slider__btn--next',
                prevEl: '.js-production-slider .production-slider__btn--prev',
            },
        });
    }
    function startInsta() {
        let tok = "EAA3mo5hv5CABAPGrOFztIXfgDID44HLnWIF0eyLbUv1vwFZBIHL31mTQ4ehO9wuOsmFrNDLZAMabuwXB59GnopCTTGMKmdXi7XCvVWzFWuJ2fBZBVEVkXcPi3FmtGFoE16K1G4GbqSn380CV4IQWF99bq3OvVIujNMpkHzGts41QNuFLiBZB",
            userid = "17841433758839825";
        $.ajax({
            //Если данная ссылка не срабатывает или вам нужны другие данные смотрите инструкцию ниже
            url: 'https://graph.facebook.com/v5.0/' + userid + '/media?fields=like_count%2Cthumbnail_url%2Cpermalink%2Cmedia_url%2Ccaption%2Ccomments_count%2Cmedia_type&access_token=' + tok + '', //ссылка откуда берутся данные
            dataType: 'jsonp',
            type: 'GET',
            success: function (result) {
                let instaSlide = '<div class="swiper-slide instagram__slide">\n' +
                    '                    <a href="" class="js-insta-link" target="_blank" rel="noopener noreferrer">\n' +
                    '                        <img src="images/insta-preloader.svg" alt="Прелоадер" class="js-insta-img">\n' +
                    '                        <span class="hover">\n' +
                                                '<span class="text"></span>\n' +
                    '                        </span>\n' +
                    '                    </a>\n' +
                    '                </div>';
                for (let i = 0; i < result.data.length; i++) {
                    $('.js-insta-slider .swiper-wrapper').append(instaSlide);
                }
                if ($('.js-insta-slider .swiper-slide').length > 0) {
                    var instaSwiper = new Swiper('.js-insta-slider', {
                        noSwipingClass: 'no-swiping',
                        navigation: {
                            nextEl: '.instagram-button-next',
                            prevEl: '.instagram-button-prev',
                        },
                        slidesPerView: 5,
                        spaceBetween: 32,
                        on: {
                            init: function () {
                                //Показ кнопок только если слайдов больше, чем видно
                                var slidesPerView = $(this)[0].params.slidesPerView;
                                var slidesLength = $(this)[0].slides.length;
                                if (slidesLength > slidesPerView) {
                                    $('.instagram-button').addClass('show');
                                    $(this)[0].$el.find('.swiper-wrapper').removeClass('no-swiping');
                                } else {
                                    $(this)[0].$el.find('.swiper-wrapper').addClass('no-swiping');
                                }
                            },
                            resize: function () {
                                //Показ кнопок только если слайдов больше, чем видно
                                var slidesPerView = $(this)[0].params.slidesPerView;
                                var slidesLength = $(this)[0].slides.length;
                                if (slidesLength > slidesPerView) {
                                    $('.instagram-button').addClass('show');
                                    $(this)[0].$el.find('.swiper-wrapper').removeClass('no-swiping');
                                } else {
                                    $('.instagram-button').removeClass('show');
                                    $(this)[0].$el.find('.swiper-wrapper').addClass('no-swiping');
                                }
                            }
                        },
                        breakpoints: {
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            }
                        }
                    });
                }
                for (x in result.data) {
                    $('.js-insta-link').eq(x).attr('href', result.data[x].permalink); //Вывод ссылки на пост в Instagram
                    if (result.data[x].media_type !== 'VIDEO') { //Если это не видео Instagram
                        $('.js-insta-img:eq(' + x + ')').attr("src", result.data[x].media_url); //Вывод фото
                        $('.js-insta-link:eq(' + x + ') .hover .text').text(result.data[x].caption);
                        $('.js-insta-link:eq(' + x + ') .count-comment .text').text(result.data[x].comments_count); //Вывод количества комментариев
                        $('.js-insta-link:eq(' + x + ') .count-like .text').text(result.data[x].like_count); //Вывод количества лайков
                    } else if (result.data[x].media_type === 'VIDEO') { //Если видео
                        $('.js-insta-img:eq(' + x + ')').attr("src", result.data[x].thumbnail_url); //Вывод превью видео
                        $('.js-insta-link:eq(' + x + ') .hover .text').text(result.data[x].caption);
                        $('.js-insta-link:eq(' + x + ') .count-comment .text').text(result.data[x].comments_count); //Вывод количества комментариев видео
                        $('.js-insta-link:eq(' + x + ') .count-like .text').text(result.data[x].like_count); //Вывод количества лайков видео
                    }
                }
            },
            error: function (result) {
                console.log(result); // пишем в консоль об ошибках
            }
        });
    }

    let checkInsta = function () {
        if (($(window).scrollTop() + $(window).innerHeight()) > $('.instagram').offset().top) {
            $(window).unbind('scroll', checkInsta);
            startInsta();
        }
    };

    if (($(window).scrollTop() + $(window).innerHeight()) > $('.instagram').offset().top) {
        startInsta();
    } else {
        $(window).bind('scroll', checkInsta);
    }

});