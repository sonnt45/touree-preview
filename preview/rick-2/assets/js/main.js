(function ($) {
  "use strict";

  $(window).on("load", function () {
    /* preloader activate */
    $(".preloader-activate").removeClass("preloader-active");
  });

  /* sticky menu */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
      $(".sticker").removeClass("stick");
      $("body").removeClass("space-pt--120");
    } else {
      $(".sticker").addClass("stick");
      $("body").addClass("space-pt--120");
    }
  });

  /* offcanvas menu active */
  $("#header-menu-trigger").on("click", function (e) {
    e.stopPropagation();
    $("#offcanvas-menu").toggleClass("active");
    $(".body-wrapper").toggleClass("active-overlay");
    $("body").toggleClass("overflow-hidden");
  });

  /* remove active class on click other parts of the body */
  $("body").on("click", function () {
    $("#offcanvas-menu").removeClass("active");
    $(".body-wrapper").removeClass("active-overlay");
    $("body").removeClass("overflow-hidden");
  });

  /* svg inject */
  SVGInject($(".injectable"));

  /* background image set */
  var bgSelector = $(".bg-img");
  bgSelector.each(function (index, elem) {
    var element = $(elem),
      bgSource = element.data("bg");
    element.css("background-image", "url(" + bgSource + ")");
  });

  /* slick slider activation */

  $(".hero-slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $(".welcome-slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $(".product-image-slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });

  $(".category-slider-wrapper").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });

  /* cart plus minus */

  var CartPlusMinus = $(".cart-plus-minus");
  CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
  CartPlusMinus.append('<div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() === "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });
})(jQuery);
