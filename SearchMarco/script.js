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
    if($(this).hasClass("keyword")){
$(".keyword").css("outline","2px red solid");
$("#category1").removeClass("off");
$(".hoveringred").removeClass("off");
$(".hoveringred").css("color","red");
$(".thumbnail").not(".keyword").css("opacity","0.3");
  }else if($(this).hasClass("searchrelated")){
    $(".hoveringblue").removeClass("off");
    $(".hoveringblue").css("color","blue");
    $("#category2").removeClass("off");
    $(".searchrelated").css("outline","2px blue solid");
    $(".thumbnail").not(".searchrelated").css("opacity","0.3");
      }else if($(this).hasClass("unrelated")){
        $(".hoveringgreen").removeClass("off");
        $(".hoveringgreen").css("color","rgb(0,255,0)");
        $("#category3").removeClass("off");
        $(".unrelated").css("outline","2px rgb(0,255,0) solid");
        $(".thumbnail").not(".unrelated").css("opacity","0.3");
          }else if($(this).hasClass("rewatch")){
            $(".hoveringfuchsia").removeClass("off");
            $(".hoveringfuchsia").css("color","fuchsia");
            $("#category4").removeClass("off");
            $(".rewatch").css("outline","2px fuchsia solid");
            $(".thumbnail").not(".rewatch").css("opacity","0.3");
              }},function norosso(){
                $(".hoveringred").addClass("off");
                $(".hoveringblue").addClass("off");
                $(".hoveringgreen").addClass("off");
                $(".hoveringfuchsia").addClass("off");
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
    $('#primeresultsgreen').html('20 results');
    $('#primeresults').html('20 results');
    $('#primeresults').html('20 results');
    $('#logintext').html('LOGGED IN');
    $('#youtuberesults').html('25 results');
    $('#twitchresults').html('No results');
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("keyword searchrelated unrelated rewatch");
    $("#column2").children(".row").children(".thumbnail").addClass("unrelated");
    $("#row1b-1,#row1b-2,#row1b-3,#row1b-4,#row2b-1,#row2b-2,#row2b-3,#row2b-4,#row3b-1,#row3b-2,#row3b-3,#row3b-4,#row4b-1,#row4b-2,#row4b-3").addClass("unrelated");
    $("#row4b-4,#row5b-1,#row5b-2,#row5b-3,#row5b-4,#row6b-1,#row6b-2,#row6b-3,#row6b-4,#row7b-1,#row7b-2,#row7b-3,#row7b-4").addClass("rewatch");
    $("#row1a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/1.jpg')"); //PRIMEVIDEO
    $("#row1a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/2.jpg')");
    $("#row1a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/3.jpg')");
    $("#row1a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/4.jpg')");
    $("#row2a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/5.jpg')");
    $("#row2a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/6.jpg')");
    $("#row2a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/7.jpg')");
    $("#row2a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/8.jpg')");
    $("#row3a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/9.jpg')");
    $("#row3a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/10.jpg')");
    $("#row3a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/11.jpg')");
    $("#row3a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/12.jpg')");
    $("#row4a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/13.jpg')");
    $("#row4a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/14.jpg')");
    $("#row4a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/15.jpg')");
    $("#row4a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/16.jpg')");
    $("#row5a-1").css("background-image","url('/assets/random_login_primevideo_thumbnails/17.jpg')");
    $("#row5a-2").css("background-image","url('/assets/random_login_primevideo_thumbnails/18.jpg')");
    $("#row5a-3").css("background-image","url('/assets/random_login_primevideo_thumbnails/19.jpg')");
    $("#row5a-4").css("background-image","url('/assets/random_login_primevideo_thumbnails/20.jpg')");
    $("#row1b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/1.jpg')"); //YOUTUBE//
    $("#row1b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/2.jpg')");
    $("#row1b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/3.jpg')");
    $("#row1b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/4.jpg')");
    $("#row2b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/5.jpg')");
    $("#row2b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/6.jpg')");
    $("#row2b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/7.jpg')");
    $("#row2b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/8.jpg')");
    $("#row3b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/9.jpg')");
    $("#row3b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/10.jpg')");
    $("#row3b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/11.jpg')");
    $("#row3b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/12.jpg')");
    $("#row4b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/13.jpg')");
    $("#row4b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/14.jpg')");
    $("#row4b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/15.jpg')");
    $("#row4b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/16.jpg')");
    $("#row5b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/17.jpg')");
    $("#row5b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/18.jpg')");
    $("#row5b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/19.jpg')");
    $("#row5b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/20.jpg')");
    $("#row6b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/21.jpg')");
    $("#row6b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/22.jpg')");
    $("#row6b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/23.jpg')");
    $("#row6b-4").css("background-image","url('/assets/random_login_youtube_thumbnails/24.jpg')");
    $("#row7b-1").css("background-image","url('/assets/random_login_youtube_thumbnails/25.jpg')");
    $("#row7b-2").css("background-image","url('/assets/random_login_youtube_thumbnails/26.jpg')");
    $("#row7b-3").css("background-image","url('/assets/random_login_youtube_thumbnails/27.jpg')");
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
    $('#primeresults').html('308 results');
    $('#netflixresults').html('No results');
    $('#logintext').html('LOGGED OUT');
    $('#youtuberesults').html('No results');
    $('#twitchresults').html('No results');
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("keyword searchrelated unrelated rewatch");
    $("#column2").children(".row").children(".thumbnail").addClass("unrelated");
    $('#primeresultsgreen').html('308 results');
    $('#youtuberesultsgreen').html('');
    $("#row1a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/1.jpg')"); //PRIMEVIDEO//
    $("#row1a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/2.jpg')");
    $("#row1a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/3.jpg')");
    $("#row1a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/4.jpg')");
    $("#row2a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/5.jpg')");
    $("#row2a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/6.jpg')");
    $("#row2a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/7.jpg')");
    $("#row2a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/8.jpg')");
    $("#row3a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/9.jpg')");
    $("#row3a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/10.jpg')");
    $("#row3a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/11.jpg')");
    $("#row3a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/12.jpg')");
    $("#row4a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/13.jpg')");
    $("#row4a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/14.jpg')");
    $("#row4a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/15.jpg')");
    $("#row4a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/16.jpg')");
    $("#row5a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/17.jpg')");
    $("#row5a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/18.jpg')");
    $("#row5a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/19.jpg')");
    $("#row5a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/20.jpg')");
    $("#row6a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/21.jpg')");
    $("#row6a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/22.jpg')");
    $("#row6a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/23.jpg')");
    $("#row6a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/24.jpg')");
    $("#row7a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/25.jpg')");
    $("#row7a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/26.jpg')");
    $("#row7a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/27.jpg')");
    $("#row7a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/28.jpg')");
    $("#row8a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/29.jpg')");
    $("#row8a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/30.jpg')");
    $("#row8a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/31.jpg')");
    $("#row8a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/32.jpg')");
    $("#row9a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/33.jpg')");
    $("#row9a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/34.jpg')");
    $("#row9a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/35.jpg')");
    $("#row9a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/36.jpg')");
    $("#row10a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/37.jpg')");
    $("#row10a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/38.jpg')");
    $("#row10a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/39.jpg')");
    $("#row10a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/40.jpg')");
    $("#row11a-1").css("background-image","url('/assets/random_logout_primevideo_thumbnails/41.jpg')");
    $("#row11a-2").css("background-image","url('/assets/random_logout_primevideo_thumbnails/42.jpg')");
    $("#row11a-3").css("background-image","url('/assets/random_logout_primevideo_thumbnails/43.jpg')");
    $("#row11a-4").css("background-image","url('/assets/random_logout_primevideo_thumbnails/44.jpg')");
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
    $('#primeresults').html('37 results');
    $('#netflixresults').html('315 results');
    $('#youtuberesults').html('828 results');
    $('#logintext').html('LOGGED IN');
    $('#twitchresults').html('22 results');
    $('#primeresultsgreen').html('');
    $('#netflixresultsblue').html('314 results');
    $('#netflixresultsred').html('1 results');
    $('#youtuberesultsgreen').html('16 results');
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("keyword searchrelated unrelated rewatch");
    $("#row1-1").children(".row").children(".thumbnail").addClass("keyword");
    $("#row1-2,#row1-3,#row1-4,#row2-1,#row2-2,#row2-3,#row2-4,#row3-1,#row3-2,#row3-3,#row3-4,#row4-1,#row4-2,#row4-3,#row4-4,#row5-1,#row5-2,#row5-3,#row5-4,#row6-1,#row6-2,#row6-3,#row6-4,#row7-1,#row7-2,#row7-3,#row7-4,#row8-1,#row8-2,#row8-3,#row8-4,#row9-1,#row9-2,#row9-3,#row9-4,#row10-1,#row10-2,#row10-3,#row10-4,#row11-1,#row11-2,#row11-3,#row11-4").addClass("searchrelated");
    $("#row1a-1,#row1a-2,#row2a-3,#row2a-4,#row3a-1,#row4a-3").addClass("keyword");
    $("#row1a-3,#row1a-4,#row2a-1,#row2a-2,#row3a-2,#row3a-3,#row3a-4,#row4a-1,#row4a-2,#row4a-4,#row5a-1,#row5a-2,#row5a-3,#row5a-4,#row6a-1,#row6a-2,#row6a-3,#row6a-4,#row7a-1,#row7a-2,#row7a-3,#row7a-4,#row8a-1,#row8a-2,#row8a-3,#row8a-4,#row9a-1,#row9a-2,#row9a-3,#row9a-4,#row10a-1,#row10a-2,#row10a-3,#row10a-4").addClass("searchrelated");
    $("#row1b-1,#row1b-4,#row2b-1,#row2b-2,#row2b-3,#row2b-4,#row4b-1,#row4b-2,#row4b-3,#row4b-4,#row5b-1,#row5b-2,#row9b-3,#row9b-4,#row10b-1,#row10b-2,#row10b-3,#row10b-4,#row11b-1,#row11b-2,#row11b-3,#row11b-4").addClass("keyword");
    $("#row1b-2,#row1b-3,#row3b-1,#row3b-2,#row3b-3,#row3b-4").addClass("searchrelated");
    $("#row5b-3,#row5b-4,#row6b-1,#row6b-2,#row6b-3,#row6b-4,#row7b-1,#row7b-2,#row7b-3,#row7b-4,#row8b-1,#row8b-2,#row8b-3,#row8b-4,#row9b-1,#row9b-2").addClass("unrelated");
    $("#column4").children(".row").children(".thumbnail").addClass("keyword");
    $("#row1a-1").css("background-image","url('/assets/primevideo_thumbnails/1.jpg')"); //PRIMEVIDEO
    $("#row1a-2").css("background-image","url('/assets/primevideo_thumbnails/2.jpg')");
    $("#row1a-3").css("background-image","url('/assets/primevideo_thumbnails/3.jpg')");
    $("#row1a-4").css("background-image","url('/assets/primevideo_thumbnails/4.jpg')");
    $("#row2a-1").css("background-image","url('/assets/primevideo_thumbnails/5.jpg')");
    $("#row2a-2").css("background-image","url('/assets/primevideo_thumbnails/6.jpg')");
    $("#row2a-3").css("background-image","url('/assets/primevideo_thumbnails/7.jpg')");
    $("#row2a-4").css("background-image","url('/assets/primevideo_thumbnails/8.jpg')");
    $("#row3a-1").css("background-image","url('/assets/primevideo_thumbnails/9.jpg')");
    $("#row3a-2").css("background-image","url('/assets/primevideo_thumbnails/10.jpg')");
    $("#row3a-3").css("background-image","url('/assets/primevideo_thumbnails/11.jpg')");
    $("#row3a-4").css("background-image","url('/assets/primevideo_thumbnails/12.jpg')");
    $("#row4a-1").css("background-image","url('/assets/primevideo_thumbnails/13.jpg')");
    $("#row4a-2").css("background-image","url('/assets/primevideo_thumbnails/14.jpg')");
    $("#row4a-3").css("background-image","url('/assets/primevideo_thumbnails/15.jpg')");
    $("#row4a-4").css("background-image","url('/assets/primevideo_thumbnails/16.jpg')");
    $("#row5a-1").css("background-image","url('/assets/primevideo_thumbnails/17.jpg')");
    $("#row5a-2").css("background-image","url('/assets/primevideo_thumbnails/18.jpg')");
    $("#row5a-3").css("background-image","url('/assets/primevideo_thumbnails/19.jpg')");
    $("#row5a-4").css("background-image","url('/assets/primevideo_thumbnails/20.jpg')");
    $("#row6a-1").css("background-image","url('/assets/primevideo_thumbnails/21.jpg')");
    $("#row6a-2").css("background-image","url('/assets/primevideo_thumbnails/22.jpg')");
    $("#row6a-3").css("background-image","url('/assets/primevideo_thumbnails/23.jpg')");
    $("#row6a-4").css("background-image","url('/assets/primevideo_thumbnails/24.jpg')");
    $("#row7a-1").css("background-image","url('/assets/primevideo_thumbnails/25.jpg')");
    $("#row7a-2").css("background-image","url('/assets/primevideo_thumbnails/26.jpg')");
    $("#row7a-3").css("background-image","url('/assets/primevideo_thumbnails/27.jpg')");
    $("#row7a-4").css("background-image","url('/assets/primevideo_thumbnails/28.jpg')");
    $("#row8a-1").css("background-image","url('/assets/primevideo_thumbnails/29.jpg')");
    $("#row8a-2").css("background-image","url('/assets/primevideo_thumbnails/30.jpg')");
    $("#row8a-3").css("background-image","url('/assets/primevideo_thumbnails/31.jpg')");
    $("#row8a-4").css("background-image","url('/assets/primevideo_thumbnails/32.jpg')");
    $("#row9a-1").css("background-image","url('/assets/primevideo_thumbnails/33.jpg')");
    $("#row9a-2").css("background-image","url('/assets/primevideo_thumbnails/34.jpg')");
    $("#row9a-3").css("background-image","url('/assets/primevideo_thumbnails/35.jpg')");
    $("#row9a-4").css("background-image","url('/assets/primevideo_thumbnails/36.jpg')");
    $("#row10a-1").css("background-image","url('/assets/primevideo_thumbnails/37.jpg')");
    $("#row1b-1").css("background-image","url('/assets/youtube_thumbnails/1.jpg')"); //YOUTUBE
    $("#row1b-2").css("background-image","url('/assets/youtube_thumbnails/2.jpg')");
    $("#row1b-3").css("background-image","url('/assets/youtube_thumbnails/3.jpg')");
    $("#row1b-4").css("background-image","url('/assets/youtube_thumbnails/4.jpg')");
    $("#row2b-1").css("background-image","url('/assets/youtube_thumbnails/5.jpg')");
    $("#row2b-2").css("background-image","url('/assets/youtube_thumbnails/6.jpg')");
    $("#row2b-3").css("background-image","url('/assets/youtube_thumbnails/7.jpg')");
    $("#row2b-4").css("background-image","url('/assets/youtube_thumbnails/8.jpg')");
    $("#row3b-1").css("background-image","url('/assets/youtube_thumbnails/9.jpg')");
    $("#row3b-2").css("background-image","url('/assets/youtube_thumbnails/10.jpg')");
    $("#row3b-3").css("background-image","url('/assets/youtube_thumbnails/11.jpg')");
    $("#row3b-4").css("background-image","url('/assets/youtube_thumbnails/12.jpg')");
    $("#row4b-1").css("background-image","url('/assets/youtube_thumbnails/13.jpg')");
    $("#row4b-2").css("background-image","url('/assets/youtube_thumbnails/14.jpg')");
    $("#row4b-3").css("background-image","url('/assets/youtube_thumbnails/15.jpg')");
    $("#row4b-4").css("background-image","url('/assets/youtube_thumbnails/16.jpg')");
    $("#row5b-1").css("background-image","url('/assets/youtube_thumbnails/17.jpg')");
    $("#row5b-2").css("background-image","url('/assets/youtube_thumbnails/18.jpg')");
    $("#row5b-3").css("background-image","url('/assets/youtube_thumbnails/19.jpg')");
    $("#row5b-4").css("background-image","url('/assets/youtube_thumbnails/20.jpg')");
    $("#row6b-1").css("background-image","url('/assets/youtube_thumbnails/21.jpg')");
    $("#row6b-2").css("background-image","url('/assets/youtube_thumbnails/22.jpg')");
    $("#row6b-3").css("background-image","url('/assets/youtube_thumbnails/23.jpg')");
    $("#row6b-4").css("background-image","url('/assets/youtube_thumbnails/24.jpg')");
    $("#row7b-1").css("background-image","url('/assets/youtube_thumbnails/25.jpg')");
    $("#row7b-2").css("background-image","url('/assets/youtube_thumbnails/26.jpg')");
    $("#row7b-3").css("background-image","url('/assets/youtube_thumbnails/27.jpg')");
    $("#row7b-4").css("background-image","url('/assets/youtube_thumbnails/28.jpg')");
    $("#row8b-1").css("background-image","url('/assets/youtube_thumbnails/29.jpg')");
    $("#row8b-2").css("background-image","url('/assets/youtube_thumbnails/30.jpg')");
    $("#row8b-3").css("background-image","url('/assets/youtube_thumbnails/31.jpg')");
    $("#row8b-4").css("background-image","url('/assets/youtube_thumbnails/32.jpg')");
    $("#row9b-1").css("background-image","url('/assets/youtube_thumbnails/33.jpg')");
    $("#row9b-2").css("background-image","url('/assets/youtube_thumbnails/34.jpg')");
    $("#row9b-3").css("background-image","url('/assets/youtube_thumbnails/35.jpg')");
    $("#row9b-4").css("background-image","url('/assets/youtube_thumbnails/36.jpg')");
    $("#row10b-1").css("background-image","url('/assets/youtube_thumbnails/37.jpg')");
    $("#row10b-2").css("background-image","url('/assets/youtube_thumbnails/38.jpg')");
    $("#row10b-3").css("background-image","url('/assets/youtube_thumbnails/39.jpg')");
    $("#row10b-4").css("background-image","url('/assets/youtube_thumbnails/40.jpg')");
    $("#row11b-1").css("background-image","url('/assets/youtube_thumbnails/41.jpg')");
    $("#row11b-2").css("background-image","url('/assets/youtube_thumbnails/42.jpg')");
    $("#row11b-3").css("background-image","url('/assets/youtube_thumbnails/43.jpg')");
    $("#row11b-4").css("background-image","url('/assets/youtube_thumbnails/44.jpg')");
    $("#column1").removeClass("off");
    $("#column1").css("opacity","1");
    $("#column2,#column3").removeClass("off");
    $("#column2,#column3").children(".row").removeClass("off");
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("off");
    $("#row12a,#row11a,#row10a-2,#row10a-3,#row10a-4").addClass("off");
    $("#column4").removeClass("off");
    $("#column4").css("opacity","1");
  } else if (!$("#login").hasClass("in") && !$("#randomizza").hasClass("random")){ //LOGGED OUT E AKIRA//
    $('#primeresults').html('37 results');
    $('#netflixresults').html('No results');
    $('#youtuberesults').html('828 results');
    $('#logintext').html('LOGGED OUT');
    $('#twitchresults').html('22 results');
    $('#primeresultsgreen').html('');
    $('#netflixresultsblue').html('');
    $('#netflixresultsred').html('');
    $('#youtuberesultsgreen').html('16 results');
    $("#column2,#column3").children(".row").children(".thumbnail").removeClass("keyword searchrelated unrelated rewatch");
    $("#row1a-1,#row1a-2,#row2a-3,#row2a-4,#row3a-1,#row4a-3").addClass("keyword");
    $("#row1a-3,#row1a-4,#row2a-1,#row2a-2,#row3a-2,#row3a-3,#row3a-4,#row4a-1,#row4a-2,#row4a-4,#row5a-1,#row5a-2,#row5a-3,#row5a-4,#row6a-1,#row6a-2,#row6a-3,#row6a-4,#row7a-1,#row7a-2,#row7a-3,#row7a-4,#row8a-1,#row8a-2,#row8a-3,#row8a-4,#row9a-1,#row9a-2,#row9a-3,#row9a-4,#row10a-1,#row10a-2,#row10a-3,#row10a-4").addClass("searchrelated");
    $("#row1b-1,#row1b-4,#row2b-1,#row2b-2,#row2b-3,#row2b-4,#row4b-1,#row4b-2,#row4b-3,#row4b-4,#row5b-1,#row5b-2,#row5b-3,#row5b-4,#row6b-1,#row6b-2,#row6b-3,#row6b-4,#row7b-1,#row7b-2,#row7b-3,#row7b-4,#row8b-1,#row8b-2,#row8b-3,#row8b-4,#row9b-1,#row9b-2,#row9b-3,#row9b-4,#row10b-1,#row10b-2,#row10b-3,#row10b-4,#row11b-1,#row11b-2,#row11b-3,#row11b-4").addClass("keyword");
    $("#row1b-2,#row1b-3,#row3b-1,#row3b-2,#row3b-3,#row3b-4").addClass("searchrelated");
    $("#row1a-1").css("background-image","url('/assets/primevideo_thumbnails/1.jpg')"); //PRIMEVIDEO
    $("#row1a-2").css("background-image","url('/assets/primevideo_thumbnails/2.jpg')");
    $("#row1a-3").css("background-image","url('/assets/primevideo_thumbnails/3.jpg')");
    $("#row1a-4").css("background-image","url('/assets/primevideo_thumbnails/4.jpg')");
    $("#row2a-1").css("background-image","url('/assets/primevideo_thumbnails/5.jpg')");
    $("#row2a-2").css("background-image","url('/assets/primevideo_thumbnails/6.jpg')");
    $("#row2a-3").css("background-image","url('/assets/primevideo_thumbnails/7.jpg')");
    $("#row2a-4").css("background-image","url('/assets/primevideo_thumbnails/8.jpg')");
    $("#row3a-1").css("background-image","url('/assets/primevideo_thumbnails/9.jpg')");
    $("#row3a-2").css("background-image","url('/assets/primevideo_thumbnails/10.jpg')");
    $("#row3a-3").css("background-image","url('/assets/primevideo_thumbnails/11.jpg')");
    $("#row3a-4").css("background-image","url('/assets/primevideo_thumbnails/12.jpg')");
    $("#row4a-1").css("background-image","url('/assets/primevideo_thumbnails/13.jpg')");
    $("#row4a-2").css("background-image","url('/assets/primevideo_thumbnails/14.jpg')");
    $("#row4a-3").css("background-image","url('/assets/primevideo_thumbnails/15.jpg')");
    $("#row4a-4").css("background-image","url('/assets/primevideo_thumbnails/16.jpg')");
    $("#row5a-1").css("background-image","url('/assets/primevideo_thumbnails/17.jpg')");
    $("#row5a-2").css("background-image","url('/assets/primevideo_thumbnails/18.jpg')");
    $("#row5a-3").css("background-image","url('/assets/primevideo_thumbnails/19.jpg')");
    $("#row5a-4").css("background-image","url('/assets/primevideo_thumbnails/20.jpg')");
    $("#row6a-1").css("background-image","url('/assets/primevideo_thumbnails/21.jpg')");
    $("#row6a-2").css("background-image","url('/assets/primevideo_thumbnails/22.jpg')");
    $("#row6a-3").css("background-image","url('/assets/primevideo_thumbnails/23.jpg')");
    $("#row6a-4").css("background-image","url('/assets/primevideo_thumbnails/24.jpg')");
    $("#row7a-1").css("background-image","url('/assets/primevideo_thumbnails/25.jpg')");
    $("#row7a-2").css("background-image","url('/assets/primevideo_thumbnails/26.jpg')");
    $("#row7a-3").css("background-image","url('/assets/primevideo_thumbnails/27.jpg')");
    $("#row7a-4").css("background-image","url('/assets/primevideo_thumbnails/28.jpg')");
    $("#row8a-1").css("background-image","url('/assets/primevideo_thumbnails/29.jpg')");
    $("#row8a-2").css("background-image","url('/assets/primevideo_thumbnails/30.jpg')");
    $("#row8a-3").css("background-image","url('/assets/primevideo_thumbnails/31.jpg')");
    $("#row8a-4").css("background-image","url('/assets/primevideo_thumbnails/32.jpg')");
    $("#row9a-1").css("background-image","url('/assets/primevideo_thumbnails/33.jpg')");
    $("#row9a-2").css("background-image","url('/assets/primevideo_thumbnails/34.jpg')");
    $("#row9a-3").css("background-image","url('/assets/primevideo_thumbnails/35.jpg')");
    $("#row9a-4").css("background-image","url('/assets/primevideo_thumbnails/36.jpg')");
    $("#row10a-1").css("background-image","url('/assets/primevideo_thumbnails/37.jpg')");
    $("#row1b-1").css("background-image","url('/assets/youtube_logout_thumbnails/1.jpg')"); //YOUTUBE
    $("#row1b-2").css("background-image","url('/assets/youtube_logout_thumbnails/2.jpg')");
    $("#row1b-3").css("background-image","url('/assets/youtube_logout_thumbnails/3.jpg')");
    $("#row1b-4").css("background-image","url('/assets/youtube_logout_thumbnails/4.jpg')");
    $("#row2b-1").css("background-image","url('/assets/youtube_logout_thumbnails/5.jpg')");
    $("#row2b-2").css("background-image","url('/assets/youtube_logout_thumbnails/6.jpg')");
    $("#row2b-3").css("background-image","url('/assets/youtube_logout_thumbnails/7.jpg')");
    $("#row2b-4").css("background-image","url('/assets/youtube_logout_thumbnails/8.jpg')");
    $("#row3b-1").css("background-image","url('/assets/youtube_logout_thumbnails/9.jpg')");
    $("#row3b-2").css("background-image","url('/assets/youtube_logout_thumbnails/10.jpg')");
    $("#row3b-3").css("background-image","url('/assets/youtube_logout_thumbnails/11.jpg')");
    $("#row3b-4").css("background-image","url('/assets/youtube_logout_thumbnails/12.jpg')");
    $("#row4b-1").css("background-image","url('/assets/youtube_logout_thumbnails/13.jpg')");
    $("#row4b-2").css("background-image","url('/assets/youtube_logout_thumbnails/14.jpg')");
    $("#row4b-3").css("background-image","url('/assets/youtube_logout_thumbnails/15.jpg')");
    $("#row4b-4").css("background-image","url('/assets/youtube_logout_thumbnails/16.jpg')");
    $("#row5b-1").css("background-image","url('/assets/youtube_logout_thumbnails/17.jpg')");
    $("#row5b-2").css("background-image","url('/assets/youtube_logout_thumbnails/18.jpg')");
    $("#row5b-3").css("background-image","url('/assets/youtube_logout_thumbnails/19.jpg')");
    $("#row5b-4").css("background-image","url('/assets/youtube_logout_thumbnails/20.jpg')");
    $("#row6b-1").css("background-image","url('/assets/youtube_logout_thumbnails/21.jpg')");
    $("#row6b-2").css("background-image","url('/assets/youtube_logout_thumbnails/22.jpg')");
    $("#row6b-3").css("background-image","url('/assets/youtube_logout_thumbnails/23.jpg')");
    $("#row6b-4").css("background-image","url('/assets/youtube_logout_thumbnails/24.jpg')");
    $("#row7b-1").css("background-image","url('/assets/youtube_logout_thumbnails/25.jpg')");
    $("#row7b-2").css("background-image","url('/assets/youtube_logout_thumbnails/26.jpg')");
    $("#row7b-3").css("background-image","url('/assets/youtube_logout_thumbnails/27.jpg')");
    $("#row7b-4").css("background-image","url('/assets/youtube_logout_thumbnails/28.jpg')");
    $("#row8b-1").css("background-image","url('/assets/youtube_logout_thumbnails/29.jpg')");
    $("#row8b-2").css("background-image","url('/assets/youtube_logout_thumbnails/30.jpg')");
    $("#row8b-3").css("background-image","url('/assets/youtube_logout_thumbnails/31.jpg')");
    $("#row8b-4").css("background-image","url('/assets/youtube_logout_thumbnails/32.jpg')");
    $("#row9b-1").css("background-image","url('/assets/youtube_logout_thumbnails/33.jpg')");
    $("#row9b-2").css("background-image","url('/assets/youtube_logout_thumbnails/34.jpg')");
    $("#row9b-3").css("background-image","url('/assets/youtube_logout_thumbnails/35.jpg')");
    $("#row9b-4").css("background-image","url('/assets/youtube_logout_thumbnails/36.jpg')");
    $("#row10b-1").css("background-image","url('/assets/youtube_logout_thumbnails/37.jpg')");
    $("#row10b-2").css("background-image","url('/assets/youtube_logout_thumbnails/38.jpg')");
    $("#row10b-3").css("background-image","url('/assets/youtube_logout_thumbnails/39.jpg')");
    $("#row10b-4").css("background-image","url('/assets/youtube_logout_thumbnails/40.jpg')");
    $("#row11b-1").css("background-image","url('/assets/youtube_logout_thumbnails/41.jpg')");
    $("#row11b-2").css("background-image","url('/assets/youtube_logout_thumbnails/42.jpg')");
    $("#row11b-3").css("background-image","url('/assets/youtube_logout_thumbnails/43.jpg')");
    $("#row11b-4").css("background-image","url('/assets/youtube_logout_thumbnails/44.jpg')");
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


