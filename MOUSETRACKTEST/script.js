jQuery(document).ready(function( $ ){
var progresso=2;
var nome="bottone";
var x =setInterval(function(){
  
})
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
  } else if (progresso==3) {
    document.getElementById("testo1").innerHTML += " clicca su accedi. apri le Impostazioni.";
  }
  else if (progresso==4) {
    document.getElementById("testo1").innerHTML += " seleziona Autoplay.";
  } else if (progresso==5) {
    document.getElementById("testo1").innerHTML += " Avanzate.";
  }
  else if (progresso==6) {
    document.getElementById("testo1").innerHTML += " Turn Off Autoplay";
    $("#testo2").css("right","5%");
  }
};
});
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  ellipse(mouseX, mouseY, 20);
  // windowResized2();
};
