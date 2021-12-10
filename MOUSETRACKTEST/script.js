jQuery(document).ready(function( $ ){
var progresso=2;
var nome="bottone";
var count=3;
var startTime,endTime;
var x =setInterval(function(){
   handleTimer(count);
},800);
function start() {
  startTime = new Date();
};
function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000; //in ms
  // strip the ms
  // get seconds 
  var seconds = Math.round(timeDiff*100)/100;
  document.getElementById("testo2").innerHTML ="<span>you took "+ seconds +" seconds<br>and you did 15 interactions<br>to deactivate Netflix autoplay</span>";
}
function handleTimer() {
  if(count === 0) {
    clearInterval(x);
    endCountdown();
  } else {
    $('#countdown').html(count);
    count--;
  }
};
function endCountdown(){
  document.getElementById("countdown").innerHTML = "GO!!";
  $("#tutorial").hide();
  setup();
};
  $(".bottone",this).on("click", function entracarta6() {
      $(this).css("opacity","0");
      $("#"+nome+progresso).show();
      $("#"+nome+progresso).show();
      testo();
      progresso++;
});
function testo() {
  if (progresso==2){
    document.getElementById("testo1").innerHTML += " clicca su accedi.";
    start();
  } else if (progresso==3) {
    document.getElementById("testo1").innerHTML += " apri le Impostazioni.";
  }
  else if (progresso==4) {
    document.getElementById("testo1").innerHTML += " seleziona Autoplay.";
  } else if (progresso==5) {
    document.getElementById("testo1").innerHTML += " Avanzate.";
  }
  else if (progresso==6) {
    document.getElementById("testo1").innerHTML += " Turn Off Autoplay";
    $("#testo2").css("left","2%");
    progresso=7;
    noLoop();
    end();
  }
};
});
let freccia;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
};
function preload(){
  freccia= loadImage("cursor.svg");
};
function draw() {
  imageMode(CENTER);
  image(freccia,mouseX,mouseY,35,35);
  // windowResized2();
};
