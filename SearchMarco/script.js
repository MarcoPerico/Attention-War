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
  if($("#login").hasClass("in") && $("#randomizza").hasClass("random")){  //LOGGED IN e RANDOM//
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("keyword searchrelated unrelated rewatch");
    $("#column2").children(".row").children(".thumbnail").addClass("unrelated");
    $("#row1b,#row2b,#row3b,#row4b-1,#row4b-2,#row4b-3").children(".row").children(".thumbnail").addClass("unrelated");
    $("#row4b-4,#row5b,#row6b,#row7b").children(".row").children(".thumbnail").addClass("rewatch");
    $("#row1a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/1.webp')"); //PRIMEVIDEO
    $("#row1a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/2.webp')");
    $("#row1a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/3.webp')");
    $("#row1a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/4.webp')");
    $("#row2a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/5.webp')");
    $("#row2a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/6.webp')");
    $("#row2a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/7.webp')");
    $("#row2a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/8.webp')");
    $("#row3a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/9.webp')");
    $("#row3a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/10.webp')");
    $("#row3a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/11.webp')");
    $("#row3a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/12.webp')");
    $("#row4a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/13.webp')");
    $("#row4a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/14.webp')");
    $("#row4a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/15.webp')");
    $("#row4a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/16.webp')");
    $("#row5a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/17.webp')");
    $("#row5a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/18.webp')");
    $("#row5a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/19.webp')");
    $("#row5a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/20.webp')");
    $("#row1b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/1.webp')"); //YOUTUBE//
    $("#row1b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/2.webp')");
    $("#row1b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/3.webp')");
    $("#row1b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/4.webp')");
    $("#row2b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/5.webp')");
    $("#row2b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/6.webp')");
    $("#row2b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/7.webp')");
    $("#row2b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/8.webp')");
    $("#row3b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/9.webp')");
    $("#row3b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/10.webp')");
    $("#row3b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/11.webp')");
    $("#row3b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/12.webp')");
    $("#row4b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/13.webp')");
    $("#row4b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/14.webp')");
    $("#row4b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/15.webp')");
    $("#row4b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/16.webp')");
    $("#row5b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/17.webp')");
    $("#row5b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/18.webp')");
    $("#row5b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/19.webp')");
    $("#row5b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/20.webp')");
    $("#row6b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/21.webp')");
    $("#row6b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/22.webp')");
    $("#row6b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/23.webp')");
    $("#row6b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/24.webp')");
    $("#row7b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/25.webp')");
    $("#row7b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/26.webp')");
    $("#row7b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/27.webp')");
    $("#column1").css("opacity","0");
    $("#column1").delay(500).addClass("off");
    $("#column2,#column3").removeClass("off");
    $("#column2,#column3").children(".row").removeClass("off");
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("off");
    $("#row11a,#row10a,#row9a,#row8a,#row7a,#row6a,#row12a").addClass("off");
    $("#row11b,#row10b,#row9b,#row8b,#row7b-2,#row7b-3,#row7b-4,#row12b").addClass("off");
    $("#column4").css("opacity","0");
    $("#column4").delay(500).addClass("off");
  } else if (!$("#login").hasClass("in") && $("#randomizza").hasClass("random")){ //LOGGED OUT e RANDOM//
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("keyword searchrelated unrelated rewatch");
    $("#column2").children(".row").children(".thumbnail").addClass("unrelated");
    $("#row1a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/1.webp')"); //PRIMEVIDEO//
    $("#row1a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/2.webp')");
    $("#row1a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/3.webp')");
    $("#row1a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/4.webp')");
    $("#row2a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/5.webp')");
    $("#row2a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/6.webp')");
    $("#row2a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/7.webp')");
    $("#row2a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/8.webp')");
    $("#row3a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/9.webp')");
    $("#row3a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/10.webp')");
    $("#row3a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/11.webp')");
    $("#row3a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/12.webp')");
    $("#row4a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/13.webp')");
    $("#row4a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/14.webp')");
    $("#row4a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/15.webp')");
    $("#row4a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/16.webp')");
    $("#row5a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/17.webp')");
    $("#row5a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/18.webp')");
    $("#row5a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/19.webp')");
    $("#row5a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/20.webp')");
    $("#row6a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/21.webp')");
    $("#row6a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/22.webp')");
    $("#row6a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/23.webp')");
    $("#row6a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/24.webp')");
    $("#row7a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/25.webp')");
    $("#row7a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/26.webp')");
    $("#row7a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/27.webp')");
    $("#row7a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/28.webp')");
    $("#row8a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/29.webp')");
    $("#row8a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/30.webp')");
    $("#row8a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/31.webp')");
    $("#row8a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/32.webp')");
    $("#row9a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/33.webp')");
    $("#row9a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/34.webp')");
    $("#row9a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/35.webp')");
    $("#row9a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/36.webp')");
    $("#row10a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/37.webp')");
    $("#row10a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/38.webp')");
    $("#row10a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/39.webp')");
    $("#row10a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/40.webp')");
    $("#row11a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/41.webp')");
    $("#row11a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/42.webp')");
    $("#row11a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/43.webp')");
    $("#row11a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/44.webp')");
    $("#column1").css("opacity","0");
    $("#column1").delay(500).addClass("off");
    $("#column2,#column3").removeClass("off");
    $("#column2,#column3").children(".row").removeClass("off");
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("off");
    $("#column3").addClass("off");
    $("#row11a,#row10a,#row9a,#row8a,#row7a,#row6a,#row12a").removeClass("off");
    $("#column4").css("opacity","0");
    $("#column4").delay(500).addClass("off");
  } else if ($("#login").hasClass("in") && !$("#randomizza").hasClass("random")){ //LOGGED IN e AKIRA//
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("keyword searchrelated unrelated rewatch");
    $("#row1-1").children(".row").children(".thumbnail").addClass("keyword");
    $("#row1-2,#row1-3,#row1-4,#row2,#row3,#row4,#row5,#row6,#row7,#row8,#row9,#row10,#row11").children(".row").children(".thumbnail").addClass("searchrelated");
    $("#row1a-1,#row1a-2,#row2a-3,#row2a-4,#row3a-1,#row4a-3").children(".row").children(".thumbnail").addClass("keyword");
    $("#row1a-3,#row1a-4,#row2a-1,#row2a-2,#row3a-2,#row3a-3,#row3a-4,#row4a-1,#row4a-2,#row4a-4,#row5a,#row6a,#row7a,#row8a,#row9a,#row10a").children(".row").children(".thumbnail").addClass("searchrelated");
    $("#row1b-1,#row1a-2,#row2a-3,#row2a-4,#row3a-1,#row4a-3").children(".row").children(".thumbnail").addClass("keyword"); //youtubedafinire//
    $("#row1a-1").css("background-image","url('/assets/primevideo_thumbnails/1.webp')"); //PRIMEVIDEO
    $("#row1a-2").css("background-image","url('/assets/primevideo_thumbnails/2.webp')");
    $("#row1a-3").css("background-image","url('/assets/primevideo_thumbnails/3.webp')");
    $("#row1a-4").css("background-image","url('/assets/primevideo_thumbnails/4.webp')");
    $("#row2a-1").css("background-image","url('/assets/primevideo_thumbnails/5.webp')");
    $("#row2a-2").css("background-image","url('/assets/primevideo_thumbnails/6.webp')");
    $("#row2a-3").css("background-image","url('/assets/primevideo_thumbnails/7.webp')");
    $("#row2a-4").css("background-image","url('/assets/primevideo_thumbnails/8.webp')");
    $("#row3a-1").css("background-image","url('/assets/primevideo_thumbnails/9.webp')");
    $("#row3a-2").css("background-image","url('/assets/primevideo_thumbnails/10.webp')");
    $("#row3a-3").css("background-image","url('/assets/primevideo_thumbnails/11.webp')");
    $("#row3a-4").css("background-image","url('/assets/primevideo_thumbnails/12.webp')");
    $("#row4a-1").css("background-image","url('/assets/primevideo_thumbnails/13.webp')");
    $("#row4a-2").css("background-image","url('/assets/primevideo_thumbnails/14.webp')");
    $("#row4a-3").css("background-image","url('/assets/primevideo_thumbnails/15.webp')");
    $("#row4a-4").css("background-image","url('/assets/primevideo_thumbnails/16.webp')");
    $("#row5a-1").css("background-image","url('/assets/primevideo_thumbnails/17.webp')");
    $("#row5a-2").css("background-image","url('/assets/primevideo_thumbnails/18.webp')");
    $("#row5a-3").css("background-image","url('/assets/primevideo_thumbnails/19.webp')");
    $("#row5a-4").css("background-image","url('/assets/primevideo_thumbnails/20.webp')");
    $("#row6a-1").css("background-image","url('/assets/primevideo_thumbnails/21.webp')");
    $("#row6a-2").css("background-image","url('/assets/primevideo_thumbnails/22.webp')");
    $("#row6a-3").css("background-image","url('/assets/primevideo_thumbnails/23.webp')");
    $("#row6a-4").css("background-image","url('/assets/primevideo_thumbnails/24.webp')");
    $("#row7a-1").css("background-image","url('/assets/primevideo_thumbnails/25.webp')");
    $("#row7a-2").css("background-image","url('/assets/primevideo_thumbnails/26.webp')");
    $("#row7a-3").css("background-image","url('/assets/primevideo_thumbnails/27.webp')");
    $("#row7a-4").css("background-image","url('/assets/primevideo_thumbnails/28.webp')");
    $("#row8a-1").css("background-image","url('/assets/primevideo_thumbnails/29.webp')");
    $("#row8a-2").css("background-image","url('/assets/primevideo_thumbnails/30.webp')");
    $("#row8a-3").css("background-image","url('/assets/primevideo_thumbnails/31.webp')");
    $("#row8a-4").css("background-image","url('/assets/primevideo_thumbnails/32.webp')");
    $("#row9a-1").css("background-image","url('/assets/primevideo_thumbnails/33.webp')");
    $("#row9a-2").css("background-image","url('/assets/primevideo_thumbnails/34.webp')");
    $("#row9a-3").css("background-image","url('/assets/primevideo_thumbnails/35.webp')");
    $("#row9a-4").css("background-image","url('/assets/primevideo_thumbnails/36.webp')");
    $("#row10a-1").css("background-image","url('/assets/primevideo_thumbnails/37.webp')");
    $("#row1b-1").css("background-image","url('/assets/youtube_thumbnails/1.webp')"); //YOUTUBE
    $("#row1b-2").css("background-image","url('/assets/youtube_thumbnails/2.webp')");
    $("#row1b-3").css("background-image","url('/assets/youtube_thumbnails/3.webp')");
    $("#row1b-4").css("background-image","url('/assets/youtube_thumbnails/4.webp')");
    $("#row2b-1").css("background-image","url('/assets/youtube_thumbnails/5.webp')");
    $("#row2b-2").css("background-image","url('/assets/youtube_thumbnails/6.webp')");
    $("#row2b-3").css("background-image","url('/assets/youtube_thumbnails/7.webp')");
    $("#row2b-4").css("background-image","url('/assets/youtube_thumbnails/8.webp')");
    $("#row3b-1").css("background-image","url('/assets/youtube_thumbnails/9.webp')");
    $("#row3b-2").css("background-image","url('/assets/youtube_thumbnails/10.webp')");
    $("#row3b-3").css("background-image","url('/assets/youtube_thumbnails/11.webp')");
    $("#row3b-4").css("background-image","url('/assets/youtube_thumbnails/12.webp')");
    $("#row4b-1").css("background-image","url('/assets/youtube_thumbnails/13.webp')");
    $("#row4b-2").css("background-image","url('/assets/youtube_thumbnails/14.webp')");
    $("#row4b-3").css("background-image","url('/assets/youtube_thumbnails/15.webp')");
    $("#row4b-4").css("background-image","url('/assets/youtube_thumbnails/16.webp')");
    $("#row5b-1").css("background-image","url('/assets/youtube_thumbnails/17.webp')");
    $("#row5b-2").css("background-image","url('/assets/youtube_thumbnails/18.webp')");
    $("#row5b-3").css("background-image","url('/assets/youtube_thumbnails/19.webp')");
    $("#row5b-4").css("background-image","url('/assets/youtube_thumbnails/20.webp')");
    $("#row6b-1").css("background-image","url('/assets/youtube_thumbnails/21.webp')");
    $("#row6b-2").css("background-image","url('/assets/youtube_thumbnails/22.webp')");
    $("#row6b-3").css("background-image","url('/assets/youtube_thumbnails/23.webp')");
    $("#row6b-4").css("background-image","url('/assets/youtube_thumbnails/24.webp')");
    $("#row7b-1").css("background-image","url('/assets/youtube_thumbnails/25.webp')");
    $("#row7b-2").css("background-image","url('/assets/youtube_thumbnails/26.webp')");
    $("#row7b-3").css("background-image","url('/assets/youtube_thumbnails/27.webp')");
    $("#row7b-4").css("background-image","url('/assets/youtube_thumbnails/28.webp')");
    $("#row8b-1").css("background-image","url('/assets/youtube_thumbnails/29.webp')");
    $("#row8b-2").css("background-image","url('/assets/youtube_thumbnails/30.webp')");
    $("#row8b-3").css("background-image","url('/assets/youtube_thumbnails/31.webp')");
    $("#row8b-4").css("background-image","url('/assets/youtube_thumbnails/32.webp')");
    $("#row9b-1").css("background-image","url('/assets/youtube_thumbnails/33.webp')");
    $("#row9b-2").css("background-image","url('/assets/youtube_thumbnails/34.webp')");
    $("#row9b-3").css("background-image","url('/assets/youtube_thumbnails/35.webp')");
    $("#row9b-4").css("background-image","url('/assets/youtube_thumbnails/36.webp')");
    $("#row10b-1").css("background-image","url('/assets/youtube_thumbnails/37.webp')");
    $("#row10b-2").css("background-image","url('/assets/youtube_thumbnails/38.webp')");
    $("#row10b-3").css("background-image","url('/assets/youtube_thumbnails/39.webp')");
    $("#row10b-4").css("background-image","url('/assets/youtube_thumbnails/40.webp')");
    $("#row11b-1").css("background-image","url('/assets/youtube_thumbnails/41.webp')");
    $("#row11b-2").css("background-image","url('/assets/youtube_thumbnails/42.webp')");
    $("#row11b-3").css("background-image","url('/assets/youtube_thumbnails/43.webp')");
    $("#row11b-4").css("background-image","url('/assets/youtube_thumbnails/44.webp')");
    $("#column1").removeClass("off");
    $("#column1").css("opacity","1");
    $("#column2,#column3").removeClass("off");
    $("#column2,#column3").children(".row").removeClass("off");
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("off");
    $("#row12a,#row11a,#row10a-2,#row10a-3,#row10a-4").addClass("off");
    $("#column4").removeClass("off");
    $("#column4").css("opacity","1");
  } else if (!$("#login").hasClass("in") && !$("#randomizza").hasClass("random")){ //LOGGED OUT E AKIRA//
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("keyword searchrelated unrelated rewatch");
    $("#row1a-1").css("background-image","url('/assets/primevideo_thumbnails/1.webp')"); //PRIMEVIDEO
    $("#row1a-2").css("background-image","url('/assets/primevideo_thumbnails/2.webp')");
    $("#row1a-3").css("background-image","url('/assets/primevideo_thumbnails/3.webp')");
    $("#row1a-4").css("background-image","url('/assets/primevideo_thumbnails/4.webp')");
    $("#row2a-1").css("background-image","url('/assets/primevideo_thumbnails/5.webp')");
    $("#row2a-2").css("background-image","url('/assets/primevideo_thumbnails/6.webp')");
    $("#row2a-3").css("background-image","url('/assets/primevideo_thumbnails/7.webp')");
    $("#row2a-4").css("background-image","url('/assets/primevideo_thumbnails/8.webp')");
    $("#row3a-1").css("background-image","url('/assets/primevideo_thumbnails/9.webp')");
    $("#row3a-2").css("background-image","url('/assets/primevideo_thumbnails/10.webp')");
    $("#row3a-3").css("background-image","url('/assets/primevideo_thumbnails/11.webp')");
    $("#row3a-4").css("background-image","url('/assets/primevideo_thumbnails/12.webp')");
    $("#row4a-1").css("background-image","url('/assets/primevideo_thumbnails/13.webp')");
    $("#row4a-2").css("background-image","url('/assets/primevideo_thumbnails/14.webp')");
    $("#row4a-3").css("background-image","url('/assets/primevideo_thumbnails/15.webp')");
    $("#row4a-4").css("background-image","url('/assets/primevideo_thumbnails/16.webp')");
    $("#row5a-1").css("background-image","url('/assets/primevideo_thumbnails/17.webp')");
    $("#row5a-2").css("background-image","url('/assets/primevideo_thumbnails/18.webp')");
    $("#row5a-3").css("background-image","url('/assets/primevideo_thumbnails/19.webp')");
    $("#row5a-4").css("background-image","url('/assets/primevideo_thumbnails/20.webp')");
    $("#row6a-1").css("background-image","url('/assets/primevideo_thumbnails/21.webp')");
    $("#row6a-2").css("background-image","url('/assets/primevideo_thumbnails/22.webp')");
    $("#row6a-3").css("background-image","url('/assets/primevideo_thumbnails/23.webp')");
    $("#row6a-4").css("background-image","url('/assets/primevideo_thumbnails/24.webp')");
    $("#row7a-1").css("background-image","url('/assets/primevideo_thumbnails/25.webp')");
    $("#row7a-2").css("background-image","url('/assets/primevideo_thumbnails/26.webp')");
    $("#row7a-3").css("background-image","url('/assets/primevideo_thumbnails/27.webp')");
    $("#row7a-4").css("background-image","url('/assets/primevideo_thumbnails/28.webp')");
    $("#row8a-1").css("background-image","url('/assets/primevideo_thumbnails/29.webp')");
    $("#row8a-2").css("background-image","url('/assets/primevideo_thumbnails/30.webp')");
    $("#row8a-3").css("background-image","url('/assets/primevideo_thumbnails/31.webp')");
    $("#row8a-4").css("background-image","url('/assets/primevideo_thumbnails/32.webp')");
    $("#row9a-1").css("background-image","url('/assets/primevideo_thumbnails/33.webp')");
    $("#row9a-2").css("background-image","url('/assets/primevideo_thumbnails/34.webp')");
    $("#row9a-3").css("background-image","url('/assets/primevideo_thumbnails/35.webp')");
    $("#row9a-4").css("background-image","url('/assets/primevideo_thumbnails/36.webp')");
    $("#row10a-1").css("background-image","url('/assets/primevideo_thumbnails/37.webp')");
    $("#row1b-1").css("background-image","url('/assets/youtube_logout_thumbnails/1.webp')"); //YOUTUBE
    $("#row1b-2").css("background-image","url('/assets/youtube_logout_thumbnails/2.webp')");
    $("#row1b-3").css("background-image","url('/assets/youtube_logout_thumbnails/3.webp')");
    $("#row1b-4").css("background-image","url('/assets/youtube_logout_thumbnails/4.webp')");
    $("#row2b-1").css("background-image","url('/assets/youtube_logout_thumbnails/5.webp')");
    $("#row2b-2").css("background-image","url('/assets/youtube_logout_thumbnails/6.webp')");
    $("#row2b-3").css("background-image","url('/assets/youtube_logout_thumbnails/7.webp')");
    $("#row2b-4").css("background-image","url('/assets/youtube_logout_thumbnails/8.webp')");
    $("#row3b-1").css("background-image","url('/assets/youtube_logout_thumbnails/9.webp')");
    $("#row3b-2").css("background-image","url('/assets/youtube_logout_thumbnails/10.webp')");
    $("#row3b-3").css("background-image","url('/assets/youtube_logout_thumbnails/11.webp')");
    $("#row3b-4").css("background-image","url('/assets/youtube_logout_thumbnails/12.webp')");
    $("#row4b-1").css("background-image","url('/assets/youtube_logout_thumbnails/13.webp')");
    $("#row4b-2").css("background-image","url('/assets/youtube_logout_thumbnails/14.webp')");
    $("#row4b-3").css("background-image","url('/assets/youtube_logout_thumbnails/15.webp')");
    $("#row4b-4").css("background-image","url('/assets/youtube_logout_thumbnails/16.webp')");
    $("#row5b-1").css("background-image","url('/assets/youtube_logout_thumbnails/17.webp')");
    $("#row5b-2").css("background-image","url('/assets/youtube_logout_thumbnails/18.webp')");
    $("#row5b-3").css("background-image","url('/assets/youtube_logout_thumbnails/19.webp')");
    $("#row5b-4").css("background-image","url('/assets/youtube_logout_thumbnails/20.webp')");
    $("#row6b-1").css("background-image","url('/assets/youtube_logout_thumbnails/21.webp')");
    $("#row6b-2").css("background-image","url('/assets/youtube_logout_thumbnails/22.webp')");
    $("#row6b-3").css("background-image","url('/assets/youtube_logout_thumbnails/23.webp')");
    $("#row6b-4").css("background-image","url('/assets/youtube_logout_thumbnails/24.webp')");
    $("#row7b-1").css("background-image","url('/assets/youtube_logout_thumbnails/25.webp')");
    $("#row7b-2").css("background-image","url('/assets/youtube_logout_thumbnails/26.webp')");
    $("#row7b-3").css("background-image","url('/assets/youtube_logout_thumbnails/27.webp')");
    $("#row7b-4").css("background-image","url('/assets/youtube_logout_thumbnails/28.webp')");
    $("#row8b-1").css("background-image","url('/assets/youtube_logout_thumbnails/29.webp')");
    $("#row8b-2").css("background-image","url('/assets/youtube_logout_thumbnails/30.webp')");
    $("#row8b-3").css("background-image","url('/assets/youtube_logout_thumbnails/31.webp')");
    $("#row8b-4").css("background-image","url('/assets/youtube_logout_thumbnails/32.webp')");
    $("#row9b-1").css("background-image","url('/assets/youtube_logout_thumbnails/33.webp')");
    $("#row9b-2").css("background-image","url('/assets/youtube_logout_thumbnails/34.webp')");
    $("#row9b-3").css("background-image","url('/assets/youtube_logout_thumbnails/35.webp')");
    $("#row9b-4").css("background-image","url('/assets/youtube_logout_thumbnails/36.webp')");
    $("#row10b-1").css("background-image","url('/assets/youtube_logout_thumbnails/37.webp')");
    $("#row10b-2").css("background-image","url('/assets/youtube_logout_thumbnails/38.webp')");
    $("#row10b-3").css("background-image","url('/assets/youtube_logout_thumbnails/39.webp')");
    $("#row10b-4").css("background-image","url('/assets/youtube_logout_thumbnails/40.webp')");
    $("#row11b-1").css("background-image","url('/assets/youtube_logout_thumbnails/41.webp')");
    $("#row11b-2").css("background-image","url('/assets/youtube_logout_thumbnails/42.webp')");
    $("#row11b-3").css("background-image","url('/assets/youtube_logout_thumbnails/43.webp')");
    $("#row11b-4").css("background-image","url('/assets/youtube_logout_thumbnails/44.webp')");
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


