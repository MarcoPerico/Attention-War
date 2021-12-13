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
      endCountdown();
    } else {
      $("#countdown").html(count);
      count--;
    }
  }
  function endCountdown() {
    document.getElementById("countdown").innerHTML = "GO!!";
    $("#tutorial").hide();
    setup();
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
      document.getElementById("testo1").innerHTML += " clicca su accedi.";
      start();
      $("#gg").css("display", "none");
    } else if (progresso == 3) {
      document.getElementById("testo1").innerHTML += " apri le Impostazioni.";
    } else if (progresso == 4) {
      document.getElementById("testo1").innerHTML += " seleziona Autoplay.";
    } else if (progresso == 5) {
      document.getElementById("testo1").innerHTML += " Avanzate.";
    } else if (progresso == 6) {
      end();
      document.getElementById("testo1").innerHTML += " Turn Off Autoplay";
      $("#testo2").css("left", "2%");
      $("#goon").css("right", "2%");
      $("#campo").css("cursor", "auto");
      noLoop();
    }
  }
});
let freccia;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}
function preload() {
  freccia = loadImage("cursor.svg");
}
function draw() {
  imageMode(CENTER);
  image(freccia, mouseX, mouseY, 11, 16);
  // windowResized2();
}
