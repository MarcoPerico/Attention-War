jQuery(document).ready(function( $ ){
  var symbols1 = document.querySelectorAll(".symbol1");
  var symbols2 = document.querySelectorAll(".symbol2");
  $("#finding1").hover(function findon(){
    randomizza(symbols1);
 $(".symbol1").css("opacity","1");
},function findout(){
  randomizza(symbols1);
$(".symbol1").css("opacity","0");
}
);
$("#finding2").hover(function findon(){
  randomizza(symbols2);
$(".symbol2").css("opacity","1");
},function findout(){
randomizza(symbols2);
$(".symbol2").css("opacity","0");
}
);
function randomizza(symbols){
  for (i = 0; i < symbols.length; i++) {
 symbols[i].style.transition = Math.floor(Math.random()*(1.5-0+1)+0)+"s";
}
};
});
