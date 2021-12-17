jQuery(document).ready(function ($) {
  function inizio() {
    $(".titolo").css("transform", "translate(0, 0)");
    $(".capitolo").css({ opacity: "100%", transform: "translate(0,-7px)" });
    $(".info").css({ opacity: "100%", transform: "translate(0,-7px)" });
    $(".bottone").css({ opacity: "100%", transform: "translate(0,30px)" });
  }

  setTimeout(inizio, 1000);
});

var options = {
  animate: true,
  patternWidth: 500,
  patternHeight: 500,
  grainOpacity: 0.15,
  grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1,
};
grained("#about-container", options);
