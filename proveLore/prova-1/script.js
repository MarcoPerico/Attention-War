jQuery(document).ready(function( $ ){
$(".vocemenu", this).on("click", function apri(){
  if(!$(this).hasClass(".opened")){
    $(this).addClass(".opened");
    $(".vocemenu").not(this).removeClass(".opened");
  $(this).css({"height":"40vh","align-items":"flex-start","justify-content":"flex-start"});
  $(".vocemenu").not(this).css({"height":"5vh","align-items":"center","justify-content":"center"});
  $(this).children().css("display","block");
  $(this).children().animate({opacity:"1"},100);
  $(".vocemenu").not(this).children(".desc,.bottone").css("display","none");}
  else {
    $(this).removeClass(".opened");
    $(this).css({"height":"5vh","align-items":"center","justify-content":"center"});
    $(this).children(".desc,.bottone").css("display","none");
  }
});
$(".vocemenu",this).hover(function allarga(){
  if(!$(this).hasClass(".opened")){
    $(this).css("height","8vh");
    $("#duck1").css({"opacity":"1","top":"30%","left":"20%"});
    $("#duck2").css({"opacity":"1","top":"70%","left":"80%"});
  }},function chiude(){
    if(!$(this).hasClass(".opened")){
    $(this).css("height","5vh");}
    $("#duck1").css({"opacity":"0","top":"50%","left":"50%"});
    $("#duck2").css({"opacity":"0","top":"50%","left":"50%"});
  });
});
