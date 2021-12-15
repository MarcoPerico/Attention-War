jQuery(document).ready(function ($) {
  // var position = $(window).scrollTop();

  // should start at 0

  // $(window).scroll(function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll > position) {
  //     console.log("scrollDown");
  //     $("html,body").animate({ scrollTop: $("#intro1").offset().top }, 700);
  //   } else {
  //     console.log("scrollUp");
  //     $("html,body").animate({ scrollTop: $("#landing").offset().top }, 700);
  //   }
  //   position = scroll;
  // });

  //-----------------------------------------------------------------

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
      $("#navbar").fadeIn();
    } else {
      $("#navbar").fadeOut();
    }
  });

  //-----------------------------------------------------------------

  // $("#landing").on("wheel", function (a) {
  //   if (a.originalEvent.deltaY > 0) {
  //     $("html,body").animate({ scrollTop: $("#intro1").offset().top }, 700);
  //   }
  //   console.log(a);
  // });

  // $("#intro1").on("wheel", function (b) {
  //   if (b.originalEvent.deltaY > 0) {
  //     $("html,body").animate({ scrollTop: $("#intro2").offset().top }, 700);
  //   } else if (b.originalEvent.deltaY < 0) {
  //     $("html,body").animate({ scrollTop: $("#landing").offset().top }, 700);
  //   }
  //   console.log(b);
  // });

  //------------------------------------------------------------------

  // $("#landing").scroll(function zz() {
  //   var scrolloni = $(window).scrollTop();
  //   var yesus = $("#landing").scrollTop();
  //   if (scrolloni > yesus) {
  //     $("html,body").animate({ scrollTop: $("#intro1").offset().top }, 700);
  //     alert();
  //   } else {
  //   }
  // });

  // $("#landing").bind("mousewheel", function (e) {
  //   if (e.originalEvent.wheelDelta / 120 < 0) {

  //   }
  // });
  // $("#intro1").bind("mousewheel", function (e) {
  //   if (e.originalEvent.wheelDelta / 120 < 0) {
  //     $("html,body").animate({ scrollTop: $("#intro2").offset().top }, 700);
  //   } else {

  //   }
  // });

  //-----------------------------------------------------------------

  function spostati() {
    $("#t1").css("transform", "translate(-70px, -30px)");
    $("#t2").css("transform", "translate(-50px, -60px)");
    $("#t3").css("transform", "translate(-5px, -150px)");
    $("#t4").css("transform", "translate(10px, -120px)");
    $("#t5").css("transform", "translate(50px, -30px)");
    $("#t6").css("transform", "translate(-150px, -20px)");
    $("#t7").css("transform", "translate(-70px, -50px)");
    $("#t8").css("transform", "translate(-30px, -150px)");
    $("#t9").css("transform", "translate(50px, -120px)");
    $("#t10").css("transform", "translate(150px, -30px)");
    $("#t11").css("transform", "translate(-200px, -10px)");
    $("#t12").css("transform", "translate(-120px, 120px)");
    $("#t13").css("transform", "translate(10px, -150px)");
    $("#t14").css("transform", "translate(100px, -120px)");
    $("#t15").css("transform", "translate(180px, 0px)");
    $("#t16").css("transform", "translate(-150px, 30px)");
    $("#t17").css("transform", "translate(-70px, 120px)");
    $("#t18").css("transform", "translate(-20px, 70px)");
    $("#t19").css("transform", "translate(50px, 30px)");
    $("#t20").css("transform", "translate(150px, 30px)");
    $("#t21").css("transform", "translate(-70px, 50px)");
    $("#t22").css("transform", "translate(-20px, 120px)");
    $("#t23").css("transform", "translate(0px, 80px)");
    $("#t24").css("transform", "translate(30px, 50px)");
    $("#t25").css("transform", "translate(50px, 30px)");
  }

  function rimettiti() {
    $("#t1").css("transform", "translate(0px, 0px)");
    $("#t2").css("transform", "translate(0px, 0px)");
    $("#t3").css("transform", "translate(0px, 0px)");
    $("#t4").css("transform", "translate(0px, 0px)");
    $("#t5").css("transform", "translate(0px, 0px)");
    $("#t6").css("transform", "translate(0px, 0px)");
    $("#t7").css("transform", "translate(0px, 0px)");
    $("#t8").css("transform", "translate(0px, 0px)");
    $("#t9").css("transform", "translate(0px, 0px)");
    $("#t10").css("transform", "translate(0px, 0px)");
    $("#t11").css("transform", "translate(0px, 0px)");
    $("#t12").css("transform", "translate(0px, 0px)");
    $("#t13").css("transform", "translate(0px, 0px)");
    $("#t14").css("transform", "translate(0px, 0px)");
    $("#t15").css("transform", "translate(0px, 0px)");
    $("#t16").css("transform", "translate(0px, 0px)");
    $("#t17").css("transform", "translate(0px, 0px)");
    $("#t18").css("transform", "translate(0px, 0px)");
    $("#t19").css("transform", "translate(0px, 0px)");
    $("#t20").css("transform", "translate(0px, 0px)");
    $("#t21").css("transform", "translate(0px, 0px)");
    $("#t22").css("transform", "translate(0px, 0px)");
    $("#t23").css("transform", "translate(0px, 0px)");
    $("#t24").css("transform", "translate(0px, 0px)");
    $("#t25").css("transform", "translate(0px, 0px)");
  }

  $("#thumbnail-group").mouseenter(function () {
    spostati();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti();
  });
});
