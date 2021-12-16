var coll = document.getElementsByClassName("about-button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var options = {
  animate: true,
  patternWidth: 500,
  patternHeight: 500,
  grainOpacity: 0.15,
  grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1,
};
grained("#about-container", options);
