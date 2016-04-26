$(document).ready(function(){

  $('.main-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.news-list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:false
  });

  $('.hot-products-list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:false
  });

  $('.scroller').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 400);
      return false;
  });

  $(".i-burger").on("click", function () {
    $(".header-menu").addClass("open");
    $("body").addClass("hidden");
  });

  $(".i-close").on("click", function () {
    $(".header-menu").removeClass("open");
    $("body").removeClass("hidden");
  });

  $(".has-menu-l2").on("click", function (e) {
    e.preventDefault();

    $(".catalog-l2").slideUp();
    $(".catalog-l3").slideUp();

    if ( $(this).hasClass("active") ){
      $(".catalog-l1 a").removeClass("active");

      $(this).parent("li").find(".catalog-l2").slideUp();
      $(this).parent("li").find(".catalog-l3").slideUp();

    } else {
      $(".catalog-l1 a").removeClass("active");
      $(this).addClass("active")
      $(this).parent("li").find(".catalog-l2").slideDown();

    }
  });

  $(".has-menu-l3").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active")
    if ( $(this).hasClass("active") ){
      $(".catalog-l3").slideDown();
    } else {
      $(".catalog-l3").slideUp();
    }
  });

});
