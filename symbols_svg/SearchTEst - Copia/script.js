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

// Interpret the data as the correct format. Use d3.csv or d3.tsv accordingly.
const cards = d3.select("#all-cards");

d3.json("data/portviews.json").then(function(myData){
    console.log(myData);

    let card = cards.selectAll("div")
    .data(myData)
    .enter()
    .append("div")
    .classed("card", true);

    card.append("img")
    .classed("card-img-top", true)
    .attr("src", function(d){
        console.log(d);
        return d.url;
    })
});


