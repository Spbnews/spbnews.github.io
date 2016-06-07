$(function () {

    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(
            function () {
                currentHeight = $(this).height();
                if (currentHeight > tallestcolumn) {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }

    $('.burger').on('click', function () {
        $('body').toggleClass('open-menu');
    });

    $('header .search a').on('click', function (e) {
        e.preventDefault();
        $('header .map, .log').toggleClass('opacity');
        $('header .search').toggleClass('active');
    });

    $('#call').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('open-call');
    });

    $('.popup-call .close').on('click', function () {
        $('body').removeClass('open-call');
    });

    $('.nav-list>ul>li>a').on('click', function () {
        $(this).closest('li').find('ul').slideToggle();
        $(this).closest('li').toggleClass('active');
    });


    if ($(window).width() < 768) {
        $('.section-center .tab-head li').on('click', function () {
            var index = $(this).index();
            var $attr = $(this).attr('data-img');
            var $bg = $('.bg-img');
            $('.section-center .tab-head li').removeClass('active');
            $(this).addClass('active');

            $('.wrap-text-mob .col').removeClass('active').eq(index).addClass('active');
            $bg.css('background-image', 'url("' + $attr + '")');

            $('.wrap-text-mob').addClass('open');
            setTimeout(function () {
                $('.wrap-text-mob').addClass('animate');
            }, 100);
            $('.section-center .tab-head').addClass('hide');
        });
        $('.wrap-more .prev').on('click', function (e) {
            e.preventDefault();

            $('.wrap-text-mob').removeClass('animate');
            setTimeout(function () {
                $('.section-center .tab-head').removeClass('hide');
                $('.wrap-text-mob').removeClass('open');
            }, 400);

        });
    } else {
        $('.section-center .tab-head li').on('click', function () {
            var index = $(this).index();
            var $attr = $(this).attr('data-img');
            var $bg = $('.bg-img');
            $('.section-center .tab-head li').removeClass('active');
            $(this).addClass('active');

            $('.section-center .tab-body .col').removeClass('active').eq(index).addClass('active');
            $bg.css('background-image', 'url("' + $attr + '")');
        });
    }


    $('.section-dealer .tab-head li').on('click', function () {
        var index = $(this).index();
        $('.section-dealer .tab-head li').removeClass('active');
        $(this).addClass('active');
        $('.section-dealer .bg-s div').removeClass('active').eq(index).addClass('active');

        $('.section-dealer .tab-body .col').removeClass('opacity');
        setTimeout(function () {
            $('.section-dealer .tab-body .col').removeClass('active');
        }, 300);
        setTimeout(function () {
            $('.section-dealer .tab-body .col').eq(index).addClass('active').addClass('opacity');
        }, 300);

    });

    if ($(window).width() >= 768 && $(window).width() <= 1175) {
        $(window).resize(function () {
            setTimeout(function () {
                $('.section-about .col-main').css("height", "auto");
                setEqualHeight($('.section-about .col-main'));
            }, 200);
        }).resize();
    }

    var proSlider = $('.info-slide');
    if (proSlider.children().length > 1) {
        proSlider.on('initialized.owl.carousel', function () {
            proSlider.css("opacity", 1);
        });

        proSlider.owlCarousel({
            margin: 0,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            items: 1
        });

    } else {
        proSlider.css("opacity", 1);
    }
    var proSlider2 = $('.slider-brand');
    if (proSlider2.children().length > 1) {
        proSlider2.on('initialized.owl.carousel', function () {
            proSlider2.css("opacity", 1);
        });

        proSlider2.owlCarousel({
            margin: 0,
            loop: true,
            nav: true,
            slideSpeed: 3000,
            items: 1
        });

    } else {
        proSlider2.css("opacity", 1);
    }

    var proSlider3 = $('.about-slide');
    if (proSlider3.children().length > 1) {
        proSlider3.on('initialized.owl.carousel', function () {
            proSlider3.css("opacity", 1);
        });

        proSlider3.owlCarousel({
            margin: 0,
            nav: true,
            loop: true,
            slideSpeed: 3000,
            items: 1,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1175: {
                    items: 1
                }
            }
        });

    } else {
        proSlider3.css("opacity", 1);
    }

    $('.list-town__i').mCustomScrollbar();

    //var controls = {
    //    video: $("#myvideo"),
    //    playpause: $(".playpause")
    //};
    //
    //var video = controls.video[0];
    //
    //controls.playpause.click(function(){
    //    if (video.paused) {
    //        video.play();
    //    } else {
    //        video.pause();
    //    }
    //
    //    $(this).toggleClass("paused");
    //    $('.video').toggleClass("active");
    //    setTimeout(function() {
    //       // $('.video').removeClass("active");
    //    }, 2000);
    //});


    var video = document.getElementById('myvideo'),
        play = document.getElementById('play'),
        time;
    video.addEventListener('webkitbeginfullscreen', function () {
      //  play.innerText = 'play fullscreen video';
        window.clearInterval(time);
    });
    video.addEventListener('webkitendfullscreen', function () {
        video.pause();
    });
    play.addEventListener('touchstart', function () {
        time = window.setInterval(function () {
            try {
                video.webkitEnterFullscreen();
            }
            catch (e) {
            }
        }, 250);
       // play.innerText = 'loading ...';
        video.play();
    });


    //if($(window).width() <= 768) {
    //    $('.video .playpause').on('click', function() {
    //        //$('.video').removeClass("active");
    //        $('.playpause').trigger('pause');
    //    });
    //}
    if ($(window).width() > 1175) {
        var ee = new EventEmitter();
        $.smartscroll({
            mode: "set",
            //eventEmitter: ee
        });
        //$(".section-wrapper").onepage_scroll({
        //    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
        //    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        //    animationTime: 900, // AnimationTime let you define how long each section takes to animate
        //    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        //    updateURL: false // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        //});

    }

    if ($(window).width() <= 1175) {
        $('div, section').removeClass('animation-element');
        $('div, section').removeClass('animation-element-top');
    }

    if ($(window).width() >= 1175) {
        //$('body').addClass('touchno-touch');
        $(window).load(function () {
            setTimeout(function () {
                $('.animation-element-top').addClass('in-view');
            }, 500);

            var $animation_elements = $('.animation-element');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elements, function () {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top + element_height / 2;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if (/*(element_bottom_position >= window_top_position) &&*/
                        (element_top_position <= window_bottom_position)) {
                        $element.addClass('in-view');
                    } else {
                        //$element.removeClass('in-view');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        });


    }


    //// 2. This code loads the IFrame Player API code asynchronously.
    //var tag = document.createElement('script');
    //
    //tag.src = "https://www.youtube.com/iframe_api";
    //var firstScriptTag = document.getElementsByTagName('script')[0];
    //firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


});
//function onYouTubeIframeAPIReady() {
//    $(function () {
//
//        var playersList = {};
//
//        $('.content-video').each(function () {
//            var player;
//            var el = $(this);
//
//
//            player = new YT.Player($(this).find('div').get(0), {
//                width: '100%',
//                height: '100%',
//                playerVars: {
//                    showinfo: 0,
//                    hd: 1,
//                    rel: 0,
//                    egm: 0,
//                    showsearch: 0,
//                    wmode: 'opaque',
//                    controls:0,
//                    frameborder:"0",
//                    autohide:1
//                },
//                videoId: YouTubeGetID(el.attr('data-video-id')),
//                events: {
//                    'onReady': function (e) {
//                        e.target.addEventListener('onStateChange', function (event) {
//                            if (event.data == 0 || event.data == 2) {
//                                $('.video-gal_i').fadeIn();
//                            }
//                        });
//                    }
//                }
//            });
//            el.data('ytPlayer', player);
//            el.find('.popup-close').on('touch click', function (e) {
//                player.stopVideo();
//            });
//        });
//
//
//
//        $('.play-video').on('click', function (e) {
//            e.preventDefault();
//            var player = $('.content-video').data('ytPlayer');
//            if (!$('.play-video').hasClass('active')) {
//                setTimeout(function () {
//                    player.playVideo();
//                }, 100);
//            } else {
//                setTimeout(function () {
//                    player.stopVideo();
//                }, 100);
//
//            }
//            $(this).toggleClass('active');
//
//        });
//
//    });
//
//
//}
//
//function YouTubeGetID(url) {
//    var ID = '';
//    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
//    if (url[2] !== undefined) {
//        ID = url[2].split(/[^0-9a-z_\-]/i);
//        ID = ID[0];
//    }
//    else {
//        ID = url;
//    }
//    return ID;
//}


