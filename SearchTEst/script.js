jQuery(document).ready(function( $ ){
  var search = "Akira"
  var i=0;
  $(document).keydown(function akira() {
    $("#searchinput").hide();
    $("#searchakira").show();
    document.getElementById("searchakira").innerText += search.slice(i, i+1);
               i += 1;
  });
  $("#login").click(function(){
  if($("#login").hasClass("in")){
    document.getElementById("login").innerText = logout;
  }
});
});
