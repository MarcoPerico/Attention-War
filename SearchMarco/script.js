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
    if($(this).hasClass("keyword")){
$(".keyword").css("background-color","red");
$(".thumbnail").not(".keyword").css("opacity","0.3");
  }else if($(this).hasClass("searchrelated")){
    $(".searchrelated").css("background-color","blue");
    $(".thumbnail").not(".searchrelated").css("opacity","0.3");
      }else if($(this).hasClass("unrelated")){
        $(".unrelated").css("background-color","rgb(0,255,0)");
        $(".thumbnail").not(".unrelated").css("opacity","0.3");
          }else if($(this).hasClass("rewatch")){
            $(".rewatch").css("background-color","fuchsia");
            $(".thumbnail").not(".rewatch").css("opacity","0.3");
              }},function norosso(){
                             if($(this).hasClass("keyword")){
                              $(".keyword").css("background-color","aqua");
                             $(".thumbnail").not(".keyword").css("opacity","1");
                         }else if($(this).hasClass("searchrelated")){
                          $(".searchrelated").css("background-color","aqua");
                       $(".thumbnail").not(".searchrelated").css("opacity","1");
                        }else if($(this).hasClass("unrelated")){
                          $(".unrelated").css("background-color","aqua");
                          $(".thumbnail").not(".unrelated").css("opacity","1");
                            }else if($(this).hasClass("rewatch")){
                              $(".rewatch").css("background-color","aqua");
                              $(".thumbnail").not(".rewatch").css("opacity","1");
                                }
  });

  $("#login").click(function(){
      if($("#login").hasClass("in")){
        $("#login").removeClass("in");
$("#pallino").css("left","53%");
$("#boxino").css("background-color","transparent");
      }else{
        $("#login").addClass("in");
        $("#pallino").css("left","8%");
        $("#boxino").css("background-color","rgb(2, 156, 228)");
      }
      check();
    });
    $("#randomizza").click(function(){
      if($("#randomizza").hasClass("random")){
        $("#pallino2").css("left","55%");
        $("#randomizza").removeClass("random");
        $("#boxino2").css("background-color","transparent");
              }else{
                $("#randomizza").addClass("random");
                $("#pallino2").css("left","8%");
                $("#boxino2").css("background-color","rgb(255, 239, 8)");
              } 
              check();   
    });
    function check(){
  if($("#login").hasClass("in") && $("#randomizza").hasClass("random")){
    $("#column1").css("opacity","0");
    $("#column1").delay(500).addClass("off");
    $("#column4").css("opacity","0");
    $("#column4").delay(500).addClass("off");
  } else if (!$("#login").hasClass("in") && $("#randomizza").hasClass("random")){
    $("#column1").css("opacity","0");
    $("#column1").delay(500).addClass("off");
    $("#column4").css("opacity","0");
    $("#column4").delay(500).addClass("off");
  } else if ($("#login").hasClass("in") && !$("#randomizza").hasClass("random")){
    $("#column1").removeClass("off");
    $("#column1").css("opacity","1");
    $("#column4").removeClass("off");
    $("#column4").css("opacity","1");
  } else if (!$("#login").hasClass("in") && !$("#randomizza").hasClass("random")){
    $("#column1").css("opacity","0");
    $("#column1").delay(500).addClass("off");
    $("#column4").removeClass("off");
    $("#column4").css("opacity","1");
  }
    };
});


