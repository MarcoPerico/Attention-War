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
$(".keyword").css("outline","1px red solid");
$(".thumbnail").not(".keyword").css("opacity","0.3");
  }else if($(this).hasClass("searchrelated")){
    $(".searchrelated").css("outline","1px blue solid");
    $(".thumbnail").not(".searchrelated").css("opacity","0.3");
      }else if($(this).hasClass("unrelated")){
        $(".unrelated").css("outline","1px rgb(0,255,0) solid");
        $(".thumbnail").not(".unrelated").css("opacity","0.3");
          }else if($(this).hasClass("rewatch")){
            $(".rewatch").css("outline","1px fuchsia solid");
            $(".thumbnail").not(".rewatch").css("opacity","0.3");
              }},function norosso(){
                             if($(this).hasClass("keyword")){
                              $(".keyword").css("outline","none");
                             $(".thumbnail").not(".keyword").css("opacity","1");
                         }else if($(this).hasClass("searchrelated")){
                          $(".searchrelated").css("outline","none");
                       $(".thumbnail").not(".searchrelated").css("opacity","1");
                        }else if($(this).hasClass("unrelated")){
                          $(".unrelated").css("outline","none");
                          $(".thumbnail").not(".unrelated").css("opacity","1");
                            }else if($(this).hasClass("rewatch")){
                              $(".rewatch").css("outline","none");
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


