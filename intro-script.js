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
    $("#t2").css("transform", "translate(-50px, -30px)");
  }
  function rimettiti2() {
    $("#t2").css("transform", "translate(0px, 0px)");
  }

  function spostati3() {
    $("#t3").css("transform", "translate(-5px, -30px)");
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
    $("#t5").css("transform", "translate(10px, -20px)");
  }
  function rimettiti5() {
    $("#t5").css("transform", "translate(0px, 0px)");
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
});
