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
      " seconds<br>and you did 15 interactions<br>to deactivate Netflix autoplay</span>";
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
    $(this).css("opacity", "0");
    $(this).delay(400).hide(0);
    $("#" + nome + progresso).show();
    testo();
    progresso++;
  });
  $("#goon").on("click", function cambio() {
    $("#campo").css("left", "-200%");
    $("campo").delay(500).hide(0);
    $("#campo2").css("opacity", "1");
    remove();
  });
  $(".visbottone", this).on("click", function attiva() {
    if ($(this).hasClass("active")) {
      if ($(this).attr("id") == "netflixbutton") {
        $("#netflixbutton").css("background-color", "transparent");
        $("#netflixstats").css("display", "none");
        $("#netflixpath").removeClass("active");
        $("#netflixbutton").removeClass("active");
      } else if ($(this).attr("id") == "primebutton") {
        $("#primebutton").css("background-color", "transparent");
        $("#primestats").css("display", "none");
        $("#primepath").removeClass("active");
        $("#primebutton").removeClass("active");
      } else if ($(this).attr("id") == "twitchbutton") {
        $("#twitchbutton").css("background-color", "transparent");
        $("#twitchstats").css("display", "none");
        $("#twitchpath").removeClass("active");
        $("#twitchbutton").removeClass("active");
      } else if ($(this).attr("id") == "youtubebutton") {
        $("#youtubebutton").css("background-color", "transparent");
        $("#youtubestats").css("display", "none");
        $("#youtubepath").removeClass("active");
        $("#youtubebutton").removeClass("active");
      }
    } else if (!$(this).hasClass("active")) {
      if ($(this).attr("id") == "netflixbutton") {
        $("#netflixbutton").css("background-color", "red");
        $("#netflixstats").css("display", "flex");
        $("#netflixbutton").addClass("active");
        $("#netflixpath").addClass("active");
      } else if ($(this).attr("id") == "primebutton") {
        $("#primebutton").css("background-color", "blue");
        $("#primestats").css("display", "flex");
        $("#primebutton").addClass("active");
        $("#primepath").addClass("active");
      } else if ($(this).attr("id") == "twitchbutton") {
        $("#twitchbutton").css("background-color", "rgb(195, 0, 255)");
        $("#twitchstats").css("display", "flex");
        $("#twitchpath").addClass("active");
        $("#twitchbutton").addClass("active");
      } else if ($(this).attr("id") == "youtubebutton") {
        $("#youtubebutton").css("background-color", "rgb(0, 255, 0)");
        $("#youtubestats").css("display", "flex");
        $("#youtubepath").addClass("active");
        $("#youtubebutton").addClass("active");
      }
    }
  });
  function testo() {
    if (progresso == 2) {
      document.getElementById("testo1").innerHTML += " Click on the downwards arrow next to the profile picture.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 2.jpg");
      start();
    } else if (progresso == 3) {
      document.getElementById("testo1").innerHTML += " In the dropdown menu, click on the Account button.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 3.jpg");
    } else if (progresso == 4) {
      document.getElementById("testo1").innerHTML += " Click on the scrollbar.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 4.jpg");
    } else if (progresso == 5) {
      document.getElementById("testo1").innerHTML += " Click on the downwards arrow of Bharath's profile.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 5.jpg");
    } else if (progresso == 6) {
      document.getElementById("testo1").innerHTML += " Next to Playback Settings, click on Change.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 6.jpg");
    } else if (progresso == 7) {
      document.getElementById("testo1").innerHTML += " Uncheck Autoplay next episode in a series.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 7.jpg");
    } else if (progresso == 8) {
      document.getElementById("testo1").innerHTML += " Uncheck Autoplay previews while browsing.";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 8.jpg");
    } else if (progresso == 9) {
      document.getElementById("testo1").innerHTML += " Click on the Save button";
      $("#screenshots").attr("src","/assets/Netflix/Netflix screenshot 9.jpg");
    } else if (progresso == 10) {
      end();
      document.getElementById("testo1").innerHTML += " You've done it!";
      $("#screenshots").css("opacity","0");
      $("#testo2").css("left", "2%");
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
  p1.image(freccia, p1.mouseX, p1.mouseY, 11, 16);
  // windowResized2();
}
