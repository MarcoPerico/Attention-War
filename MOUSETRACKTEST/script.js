jQuery(document).ready(function ($) {
  var progresso = 2;
  var nome = "bottone";
  var count = 3;
  var startTime, endTime;
  var x = setInterval(function () {
    handleTimer(count);
  }, 800);
  function start() {
    startTime = new Date();
  }
  function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000; //in ms
    // strip the ms
    // get seconds
    var seconds = Math.round(timeDiff * 100) / 100;
    document.getElementById("testo2").innerHTML =
      "<span>you took " +
      seconds +
      " seconds<br>and you did 9 interactions<br>to deactivate Netflix autoplay function</span>";
  }
  function handleTimer() {
    if (count === 0) {
      clearInterval(x);
    } else {
      $("#countdown").html(count);
      count--;
    }
  }
  $(".bottone", this).on("click", function entracarta6() {
    $(this).hide(0);
    $("#" + nome + progresso).show();
    testo();
    progresso++;
  });
  $("#goon").on("click", function cambio() {
    $("#campo").css("left", "-200%");
    $("campo").delay(500).hide(0);
    $("#campo2").css("opacity", "1");
    $("#goon").css("display","none");
    remove();
  });
  $(".visbottone", this).on("click", function attiva() {
    if ($(this).hasClass("active")) {
      if ($(this).attr("id") == "netflixbutton") {
        $("#netflixbutton").css({"background-color":"transparent","height":"35px"});
        $("#netflixstats").css("display", "none");
        $("#titolettonetflix").css({"color":"white","margin-top":"0%"});
        $("#netflixpath").removeClass("active");
        $("#netflixbutton").removeClass("active");
      } else if ($(this).attr("id") == "primebutton") {
        $("#primebutton").css({"background-color":"transparent","height":"35px"});
        $("#primestats").css("display", "none");
        $("#primepath").removeClass("active");
        $("#titolettoprime").css({"color":"white","margin-top":"0%"});
        $("#primebutton").removeClass("active");
      } else if ($(this).attr("id") == "twitchbutton") {
        $("#twitchbutton").css({"background-color":"transparent","height":"35px"});
        $("#twitchstats").css("display", "none");
        $("#twitchpath").removeClass("active");
        $("#titolettotwitch").css({"color":"white","margin-top":"0%"});
        $("#twitchbutton").removeClass("active");
      } else if ($(this).attr("id") == "youtubebutton") {
        $("#youtubebutton").css({"background-color":"transparent","height":"35px"});
        $("#youtubestats").css("display", "none");
        $("#titolettoyoutube").css({"color":"white","margin-top":"0%"});
        $("#youtubepath").removeClass("active");
        $("#youtubebutton").removeClass("active");
      }
    } else if (!$(this).hasClass("active")) {
      if ($(this).attr("id") == "netflixbutton") {
        $("#netflixbutton").css({"background-color":"white","height":"15vh"});
        $("#netflixstats").css("display", "flex");
        $("#titolettonetflix").css({"color":"red","margin-top":"6%"});
        $("#netflixbutton").addClass("active");
        $("#netflixpath").addClass("active");
      } else if ($(this).attr("id") == "primebutton") {
        $("#primebutton").css({"background-color":"white","height":"15vh"});
        $("#primestats").css("display", "flex");
        $("#titolettoprime").css({"color":"blue","margin-top":"6%"});
        $("#primebutton").addClass("active");
        $("#primepath").addClass("active");
      } else if ($(this).attr("id") == "twitchbutton") {
        $("#twitchbutton").css({"background-color":"white","height":"15vh"});
        $("#twitchstats").css("display", "flex");
        $("#titolettotwitch").css({"color":"fuchsia","margin-top":"6%"});
        $("#twitchpath").addClass("active");
        $("#twitchbutton").addClass("active");
      } else if ($(this).attr("id") == "youtubebutton") {
        $("#youtubebutton").css({"background-color":"white","height":"15vh"});
        $("#youtubestats").css("display", "flex");
        $("#titolettoyoutube").css({"color":"rgb(0,255,0)","margin-top":"6%"});
        $("#youtubepath").addClass("active");
        $("#youtubebutton").addClass("active");
      }
    }
  });
  function testo() {
    if (progresso == 2) {
      document.getElementById("testo1").innerHTML += "<br><br>Click on the downwards arrow next to the profile picture.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 2.jpg");
      start();
    } else if (progresso == 3) {
      document.getElementById("testo1").innerHTML += "<br><br>In the dropdown menu, click on the Account button.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 3.jpg");
    } else if (progresso == 4) {
      document.getElementById("testo1").innerHTML += "<br><br>Click on the scrollbar.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 4.jpg");
    } else if (progresso == 5) {
      document.getElementById("testo1").innerHTML += "<br><br>Click on the downwards arrow of Bharath's profile.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 5.jpg");
    } else if (progresso == 6) {
      document.getElementById("testo1").innerHTML += "<br><br>Next to Playback Settings, click on Change.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 6.jpg");
    } else if (progresso == 7) {
      document.getElementById("testo1").innerHTML += "<br><br>Uncheck Autoplay next episode in a series.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 7.jpg");
    } else if (progresso == 8) {
      document.getElementById("testo1").innerHTML += "<br><br>Uncheck Autoplay previews while browsing.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 8.jpg");
    } else if (progresso == 9) {
      document.getElementById("testo1").innerHTML += "<br><br>Click on the Save button";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 9.jpg");
    } else if (progresso == 10) {
      end();
      document.getElementById("testo1").innerHTML += "<br><br>You've done it!";
      $("#screenshots").css("opacity","0");
      $("#testo2").css("bottom", "0%");
      $("#goon").css("right", "2%");
      $("#campo").css("cursor", "auto");
      p1.noLoop();
    }
  }
});
let freccia;
let s1 = function(p){
p.setup = function() {
  freccia = p.loadImage("cursor.svg");
  p.createCanvas(p.windowWidth, p.windowHeight);
  p.background(0);
}}
let p1 = new p5(s1,"screenshotscont");
p1.draw = function(){
  p1.imageMode(p1.CENTER);
  p1.image(freccia, p1.mouseX, p1.mouseY, 10, 16);
  // windowResized2();
}
