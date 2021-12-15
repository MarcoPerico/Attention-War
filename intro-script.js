jQuery(document).ready(function ($) {
  function spostati() {
    $("#t1").css("transform", "translate(-50px, -20px)");
  }

  function rimettiti() {
    $("#t1").css("transform", "translate(50px, 20px)");
  }

  $("#scoprimi").mouseenter(function () {
    spostati();
  });
  $("#scoprimi").mouseleave(function () {
    rimettiti();
  });
});
