jQuery(document).ready(function ($) {
  function inizio() {
    $(".titolo").css("transform", "translate(0, 0)");
    $(".capitolo").css({ opacity: "100%", transform: "translate(0,-7px)" });
    $(".info").css({ opacity: "100%", transform: "translate(0,-7px)" });
    $(".bottone").css({ opacity: "100%", transform: "translate(0,30px)" });
  }

  setTimeout(inizio, 1000);
});
