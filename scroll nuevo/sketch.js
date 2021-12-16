jQuery(document).ready(function( $ ){
$(document).scroll(function(){
  var y = $(this).scrollTop();
  if(y>8680){
    $("#goon").removeClass("flexioni");
    $("#goon").css("opacity","1");
  } else {
    $("#goon").css("opacity","0");
    $("#goon").addClass("flexioni");
  }
})
$("#goon").on("click", function spariscizioviatiprego(){
$("#campotot").css("opacity","0");
$("#campotot").delay(500).addClass("off");
$("#goon").css("opacity","0");
$("#campotot").delay(500).addClass("off");
$("body").css("overflow-y","hidden");
$("#campotot2").removeClass("off");
$('html, body').animate({scrollTop: 0}, 1000);
});
$("#boxinoisbacc").on("click",function(){
  if($(".shown").hasClass("chiuso")){
    $("#daytonakk1").css({"height":"2vh","width":"2vh"});
    $("#netflixshown").css("height","0.67%");
    $("#primeshown").css("height","14.67%");
    $("#youtubeshown").css("height","6%");
    $("#twitchshown").css("height","2.67%");
    $(".shown").removeClass("chiuso");
  } else{
    $("#netflixshown,#primeshown, #youtubeshown, #twitchshown").css("height","0%");
    $(".shown").addClass("chiuso");
    $("#daytonakk1").css({"height":"0","width":"0"});
  }
});
$("#boxinoisbacc2").on("click",function(){
  if($(".scroll").hasClass("chiuso")){
    $("#netflixscroll").css("height","40%");
    $("#daytonakk2").css({"height":"2vh","width":"2vh"});
    $("#primescroll").css("height","25.33%");
    $("#youtubescroll").css("height","13.33%");
    $("#twitchscroll").css("height","18.67%");
    $(".scroll").removeClass("chiuso");
  } else{
    $("#netflixscroll,#primescroll, #youtubescroll, #twitchscroll").css("height","0%");
    $(".scroll").addClass("chiuso");
    $("#daytonakk2").css({"height":"0","width":"0"});
  }
});
$("#boxinoisbacc3").on("click",function(){
  if($(".click").hasClass("chiuso")){
    $("#netflixclick").css("height","36%");
    $("#daytonakk3").css({"height":"2vh","width":"2vh"});
    $("#primeclick").css("height","21.33%");
    $("#youtubeclick").css("height","9.33%");
    $("#twitchclick").css("height","5.33%");
    $(".click").removeClass("chiuso");
  } else{
    $("#netflixclick,#primeclick, #youtubeclick, #twitchclick").css("height","0%");
    $(".click").addClass("chiuso");
    $("#daytonakk3").css({"height":"0","width":"0"});
  }
});
});
function cl(text) {
  console.log(text);
};

window.addEventListener("scroll", () => {
  
  const span = document.querySelector("span");
  span.innerHTML = Math.round(window.scrollY);
  
  var wScroll = window.scrollY;
  
});

let twitchcounter = document.getElementById("tspan");
let twitchscroll = document.getElementById("twitch");

let netflixcounter = document.getElementById("nspan");
let netflixscroll = document.getElementById("netflix");

let youtubecounter = document.getElementById("yspan");
let youtubescroll = document.getElementById("youtube");

let primecounter = document.getElementById("pspan");
let primescroll = document.getElementById("prime");

// function updateCounter() {
//   'use strict';
//   var height = document.documentElement.scrollHeight - window.innerHeight;
//    counters.textContent= document.documentElement.scrollTop / height * 150;
// }

// scrollHeight = pixel counter for an element
// scrollTop = quanto ho scrollato di quell'elemento
// heightno = how much scroll i have left

let twitchmap;
let netflixmap;
let youtubemap;
let primemap;

// function updateCounter() {
//   'use strict';
//   var heightno = twitchm.scrollHeight - window.innerHeight;
//    counters.textContent = document.documentElement.scrollTop / heightno * 150;
//   //  console.log(heightno);
//   //  console.log(window.innerHeight)
//   // console.log(window.innerHeight)
// }
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function draw() {
  updateTwitchCounter()
  updateNetflixCounter()
  updateYouTubeCounter()
  updatePrimeCounter()
}
function updateTwitchCounter() {
  'use strict';
  twitchmap = map(document.documentElement.scrollTop, 0, twitchscroll.scrollHeight, 0, 73);
  twitchcounter.textContent = round(twitchmap);
if (round(twitchmap) > 73) {
  twitchcounter.textContent = 73;
}
}

function updateNetflixCounter() {
  'use strict';
  netflixmap = map(document.documentElement.scrollTop, 0, netflixscroll.scrollHeight, 0, 235);
  netflixcounter.textContent = round(netflixmap);
if (round(netflixmap) > 235) {
  netflixcounter.textContent = 235;
}
}

function updateYouTubeCounter() {
  'use strict';
  youtubemap = map(document.documentElement.scrollTop, 0, youtubescroll.scrollHeight, 0, 881);
  youtubecounter.textContent = round(youtubemap);
if (round(youtubemap) > 881) {
  youtubecounter.textContent = 881;
}
}
function updatePrimeCounter() {
  'use strict';
  primemap = map(document.documentElement.scrollTop, 0, primescroll.scrollHeight, 0, 433);
  primecounter.textContent = round(primemap);
if (round(primemap) > 433) {
  primecounter.textContent = 433;
}
}

document.addEventListener('scroll', updateTwitchCounter);
document.addEventListener('scroll', updateNetflixCounter);
document.addEventListener('scroll', updateYouTubeCounter);
document.addEventListener('scroll', updatePrimeCounter);
