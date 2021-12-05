jQuery(document).ready(function( $ ){
  var symbols1 = document.querySelectorAll(".symbol1");
  $("#finding1").hover(function find1(){
    for (i = 0; i < symbols1.length; i++) {
   symbols1[i].style.transition = Math.floor(Math.random()*(2-0+1)+0)+"s";
 };
 $(".symbol1").css("opacity","1");
},function find1out(){
  for (i = 0; i < symbols1.length; i++) {
 symbols1[i].style.transition = Math.floor(Math.random()*(2-0+1)+0)+"s";
};
$(".symbol1").css("opacity","0");

}
);
});
