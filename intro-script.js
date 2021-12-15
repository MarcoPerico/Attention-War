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

  function spostati1() {
    $("#t1").css("transform", "translate(-70px, -30px)");
  }
  function rimettiti1() {
    $("#t1").css("transform", "translate(0px, 0px)");
  }

  function spostati2() {
    $("#t2").css("transform", "translate(-50px, -40px)");
  }
  function rimettiti2() {
    $("#t2").css("transform", "translate(0px, 0px)");
  }

  function spostati3() {
    $("#t3").css("transform", "translate(-5px, -40px)");
  }
  function rimettiti3() {
    $("#t3").css("transform", "translate(0px, 0px)");
  }

  function spostati4() {
    $("#t4").css("transform", "translate(5px, -30px)");
  }
  function rimettiti4() {
    $("#t4").css("transform", "translate(0px, 0px)");
  }

  function spostati5() {
    $("#t5").css("transform", "translate(50px, -20px)");
  }
  function rimettiti5() {
    $("#t5").css("transform", "translate(0px, 0px)");
  }

  function spostati6() {
    $("#t6").css("transform", "translate(-80px, -20px)");
  }
  function rimettiti6() {
    $("#t6").css("transform", "translate(0px, 0px)");
  }

  function spostati7() {
    $("#t7").css("transform", "translate(-40px, -50px)");
  }
  function rimettiti7() {
    $("#t7").css("transform", "translate(0px, 0px)");
  }

  function spostati8() {
    $("#t8").css("transform", "translate(-10px, -40px)");
  }
  function rimettiti8() {
    $("#t8").css("transform", "translate(0px, 0px)");
  }

  function spostati9() {
    $("#t9").css("transform", "translate(50px, -40px)");
  }
  function rimettiti9() {
    $("#t9").css("transform", "translate(0px, 0px)");
  }

  function spostati10() {
    $("#t10").css("transform", "translate(50px, -30px)");
  }
  function rimettiti10() {
    $("#t10").css("transform", "translate(0px, 0px)");
  }

  $("#thumbnail-group").mouseenter(function () {
    spostati1();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti1();
  });

  $("#thumbnail-group").mouseenter(function () {
    spostati2();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti2();
  });

  $("#thumbnail-group").mouseenter(function () {
    spostati3();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti3();
  });

  $("#thumbnail-group").mouseenter(function () {
    spostati4();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti4();
  });

  $("#thumbnail-group").mouseenter(function () {
    spostati5();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti5();
  });

  $("#thumbnail-group").mouseenter(function () {
    spostati6();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti6();
  });

  $("#thumbnail-group").mouseenter(function () {
    spostati7();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti7();
  });

  $("#thumbnail-group").mouseenter(function () {
    spostati8();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti8();
  });

  $("#thumbnail-group").mouseenter(function () {
    spostati9();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti9();
  });

  $("#thumbnail-group").mouseenter(function () {
    spostati10();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti10();
  });
});
