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

    $('.burger').on('click',function () {
        var $body = $('body');
        $body.toggleClass('open-menu');
        if($body.hasClass('open-menu')) {
            $body.off("mousewheel").on("mousewheel", function() {
                    return false;
                });
        } else {
            $body.off("mousewheel").on("mousewheel", function() {
                return true;
            });
        }
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
            items: 1,
            onInitialized: function () {
                $('.info-slide').removeClass('title-slide_v');
            }
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


    if ($(window).width() > 1175) {

        var ee = new EventEmitter();
        $.smartscroll({
            mode: "set",
           // headerHash: "welcome",
            eventEmitter: ee
        });

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

});

