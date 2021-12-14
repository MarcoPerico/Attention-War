jQuery(document).ready(function( $ ){
  var search = "Akira"
  var i=0;
  $(document).keydown(function akira() {
    $("#searchinput").hide();
    $("#searchakira").show();
    document.getElementById("searchakira").innerText += search.slice(i, i+1);
               i += 1;
  });
  $(".thumbnail").hover(function highlight(){
    $(".nothovering").addClass("off");
$(".hovering").removeClass("off");
    if($(this).hasClass("keyword")){
$(".keyword").css("outline","2px red solid");
$("#category1").removeClass("off");
$(".hovering").css("color","red");
$(".thumbnail").not(".keyword").css("opacity","0.3");
  }else if($(this).hasClass("searchrelated")){
    $(".hovering").css("color","blue");
    $("#category2").removeClass("off");
    $(".searchrelated").css("outline","2px blue solid");
    $(".thumbnail").not(".searchrelated").css("opacity","0.3");
      }else if($(this).hasClass("unrelated")){
        $(".hovering").css("color","rgb(0,255,0)");
        $("#category3").removeClass("off");
        $(".unrelated").css("outline","2px rgb(0,255,0) solid");
        $(".thumbnail").not(".unrelated").css("opacity","0.3");
          }else if($(this).hasClass("rewatch")){
            $(".hovering").css("color","fuchsia");
            $("#category4").removeClass("off");
            $(".rewatch").css("outline","2px fuchsia solid");
            $(".thumbnail").not(".rewatch").css("opacity","0.3");
              }},function norosso(){
                $(".hovering").addClass("off");
                $(".nothovering").removeClass("off");
                             if($(this).hasClass("keyword")){
                              $(".keyword").css("outline","none");
                              $("#category1").addClass("off");
                             $(".thumbnail").not(".keyword").css("opacity","1");
                         }else if($(this).hasClass("searchrelated")){
                          $(".searchrelated").css("outline","none");
                          $("#category2").addClass("off");
                       $(".thumbnail").not(".searchrelated").css("opacity","1");
                        }else if($(this).hasClass("unrelated")){
                          $(".unrelated").css("outline","none");
                          $("#category3").addClass("off");
                          $(".thumbnail").not(".unrelated").css("opacity","1");
                            }else if($(this).hasClass("rewatch")){
                              $(".rewatch").css("outline","none");
                              $("#category4").addClass("off");
                              $(".thumbnail").not(".rewatch").css("opacity","1");
                                }
  });

  $("#login").click(function(){
      if($("#login").hasClass("in")){
        $("#login").removeClass("in");
$("#pallino").css({"width":"0vh","height":"0vh"});
      }else{
        $("#login").addClass("in");
        $("#pallino").css({"width":"2vh","height":"2vh"});
      }
      check();
    });
    $("#randomizza").click(function(){
      if($("#randomizza").hasClass("random")){
        $("#pallino2").css({"width":"0vh","height":"0vh"});
        $("#randomizza").removeClass("random");
              }else{
                $("#randomizza").addClass("random");
                $("#pallino2").css({"width":"2vh","height":"2vh"});
              } 
              check();   
    });
    function check(){
  if($("#login").hasClass("in") && $("#randomizza").hasClass("random")){
    $("#column1").css("opacity","0");
    $("#column1").delay(500).addClass("off");
    $("#column2,#column3").removeClass("off");
    $("#column2,#column3").children(".row").removeClass("off");
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("off");
    $("#row11a,#row10a,#row9a,#row8a,#row7a,#row6a,#row12a").addClass("off");
    $("#row11b,#row10b,#row9b,#row8b,#row7b-2,#row7b-3,#row7b-4,#row12b").addClass("off");
    $("#column4").css("opacity","0");
    $("#column4").delay(500).addClass("off");
  } else if (!$("#login").hasClass("in") && $("#randomizza").hasClass("random")){
    $("#column1").css("opacity","0");
    $("#column1").delay(500).addClass("off");
    $("#column2,#column3").removeClass("off");
    $("#column2,#column3").children(".row").removeClass("off");
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("off");
    $("#column3").addClass("off");
    $("#row11a,#row10a,#row9a,#row8a,#row7a,#row6a,#row12a").removeClass("off");
    $("#column4").css("opacity","0");
    $("#column4").delay(500).addClass("off");
  } else if ($("#login").hasClass("in") && !$("#randomizza").hasClass("random")){
    $("#column1").removeClass("off");
    $("#column1").css("opacity","1");
    $("#column2,#column3").removeClass("off");
    $("#column2,#column3").children(".row").removeClass("off");
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("off");
    $("#row12a,#row11a,#row10a-2,#row10a-3,#row10a-4").addClass("off");
    $("#column4").removeClass("off");
    $("#column4").css("opacity","1");
  } else if (!$("#login").hasClass("in") && !$("#randomizza").hasClass("random")){
    $("#column1").css("opacity","0");
    $("#column2,#column3").removeClass("off");
    $("#column2,#column3").children(".row").removeClass("off");
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("off");
    $("#row12a,#row11a,#row10a-2,#row10a-3,#row10a-4").addClass("off");
    $("#column1").delay(500).addClass("off");
    $("#column4").removeClass("off");
    $("#column4").css("opacity","1");
  }
    };
});


