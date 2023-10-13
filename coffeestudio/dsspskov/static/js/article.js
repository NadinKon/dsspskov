function stopAllVideos() {
    var videoLength = $('.js-video-preview').length;
    for(i=0;i<videoLength;i++) {
        var videoBtn = $('.js-video-preview').eq(i),
            videoFrame = videoBtn.closest('.js-article-slide-video').find('iframe');
        if(videoFrame.length > 0) {
            var videoCurrentSrc = videoFrame.attr('src');
            var stopVideoSrc = videoCurrentSrc.replace(/(autoplay=1)/g,"autoplay=0");
            videoFrame.attr('src', stopVideoSrc);
            videoFrame.hide();
            videoBtn.show();
            videoBtn.attr('disabled', false);
        }
    }
}
$(document).ready(function () {
    /*Инициализация слайдеров с изображениями*/
    var articleSlidersLength = $('.js-article-slider').length;
    if(articleSlidersLength > 0) {
        let slider = $('.js-article-slider'),
            arrowPrev = $('.js-article-slider').find('.article-slider__btn--prev'),
            arrowNext = $('.js-article-slider').find('.article-slider__btn--next'),
            pagination = $('.js-article-slider').find('.swiper-pagination'),
            loop;
        if (slider.find('.swiper-slide').length <= 1) {
            slider.addClass('off-controls');
            slider.find('.swiper-wrapper').addClass('no-swiping');
        }
        var articleSlider = new Swiper(slider, {
            noSwipingClass: 'no-swiping',
            spaceBetween: 64,
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            },
            pagination: {
                el: pagination,
                type: 'bullets'
            },
            on: {
                slideChange: function () {
                    stopAllVideos();
                }
            }
        });
    }

    var projectsSliderLength = $('.js-projects-slider').length;
    if(projectsSliderLength > 0) {
        var sliderProjects = $('.js-projects-slider'),
            arrowPrevProjects = $('.js-projects-slider').find('.article-slider__btn--prev'),
            arrowNextProjects = $('.js-projects-slider').find('.article-slider__btn--next');
        var projectsSlider = new Swiper(sliderProjects, {
            noSwipingClass: 'no-swiping',
            slidesPerView: 3,
            spaceBetween: 32,
            navigation: {
                nextEl: arrowNextProjects,
                prevEl: arrowPrevProjects,
            },
            on: {
                init: function () {
                    //Показ кнопок только если слайдов больше, чем видно
                    var slidesPerView = $(this)[0].params.slidesPerView;
                    var slidesLength = $(this)[0].slides.length;
                    if (slidesLength > slidesPerView) {
                        $(sliderProjects).removeClass('off-controls');
                        $(this)[0].$el.find('.swiper-wrapper').removeClass('no-swiping');
                    } else {
                        $(sliderProjects).addClass('off-controls');
                        $(this)[0].$el.find('.swiper-wrapper').addClass('no-swiping');
                    }
                },
                resize: function () {
                    //Показ кнопок только если слайдов больше, чем видно
                    var slidesPerView = $(this)[0].params.slidesPerView;
                    var slidesLength = $(this)[0].slides.length;
                    if (slidesLength > slidesPerView) {
                        $(sliderProjects).removeClass('off-controls');
                        $(this)[0].$el.find('.swiper-wrapper').removeClass('no-swiping');
                    } else {
                        $(sliderProjects).addClass('off-controls');
                        $(this)[0].$el.find('.swiper-wrapper').addClass('no-swiping');
                    }
                }
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 1
                }
            }
        });
    }
});

$('body').on('click', '.js-video-preview', function () {
    stopAllVideos();
    var button = $(this);
    var videoLink = $(this).data('video-link');
    $(this).attr('disabled', 'disabled');
    $(this).fadeOut(400);
    setTimeout(function () {
        button.parent().append('<iframe class="js-text-video-frame" src="https://www.youtube.com/embed/' + videoLink + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        button.parent().find('iframe').fadeIn(400);
    }, 400);
});