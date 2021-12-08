jQuery(document).ready(function( $ ){
$(".vocemenu", this).on("click", function apri(){
  $(this).css({"height":"50vh","align-items":"flex-start"});
  $(".vocemenu").not(this).css({"height":"5vh","align-items":"center"});
  $(this).children().css({"display":"block","opacity":"1"});
  $(".vocemenu").not(this).children(".desc").css("display","none");
});
});
