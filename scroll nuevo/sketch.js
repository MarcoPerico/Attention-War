function cl(text) {
  console.log(text);
};

window.addEventListener("scroll", () => {
  
  const span = document.querySelector("span");
  span.innerHTML = window.scrollY;
  
  var wScroll = window.scrollY;
  
});

var counters = document.getElementById("counterspan");
var twitchm = document.getElementById("twitch");

// function updateCounter() {
//   'use strict';
//   var height = document.documentElement.scrollHeight - window.innerHeight;
//    counters.textContent= document.documentElement.scrollTop / height * 150;
// }

function updateCounter() {
  'use strict';
  var heightno = twitchm.scrollHeight - twitchm.height;
   counters.textContent= twitchm.scrollTop / heightno * 150;
}

console.log(twitchm.width);

document.addEventListener('scroll', updateCounter);
window.addEventListener('resize', updateCounter);