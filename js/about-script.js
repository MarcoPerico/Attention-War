jQuery(document).ready(function ($) {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
$("#voce1").on("click", function () {
  $('html, body').animate({ scrollTop: $('body').offset().top }, 900);
});
$("#voce2").on("click", function () {
  $('html, body').animate({ scrollTop: $('#aboutsection2').offset().top }, 900);
});
$("#voce3").on("click", function () {
  $('html, body').animate({ scrollTop: $('#aboutsection3').offset().top }, 900);
});
$("#voce4").on("click", function () {
  $('html, body').animate({ scrollTop: $('#aboutsection4').offset().top }, 900);
});
$("#voce5").on("click", function () {
  $('html, body').animate({ scrollTop: $('#aboutsection5').offset().top }, 900);
});
$("#voce6").on("click", function () {
  $('html, body').animate({ scrollTop: $('#aboutsection6').offset().top }, 900);
});
});
 var options = {
 animate: true,
 patternWidth: 500, patternHeight: 500,
   grainOpacity: 0.15,
   grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1,
 };
grained("#about-container", options);
