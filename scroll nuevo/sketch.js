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

// scrollHeight = pixel counter for an element
// scrollTop = quanto ho scrollato di quell'elemento
// heightno = how much scroll i have left

let m;

// function updateCounter() {
//   'use strict';
//   var heightno = twitchm.scrollHeight - window.innerHeight;
//    counters.textContent = document.documentElement.scrollTop / heightno * 150;
//   //  console.log(heightno);
//   //  console.log(window.innerHeight)
//   // console.log(window.innerHeight)
// }

function draw() {
  updateCounter()
}

function updateCounter() {
  'use strict';
  m = map(document.documentElement.scrollTop, 0, twitchm.scrollHeight, 0, 150);
   counters.textContent = round(m);

}



document.addEventListener('scroll', updateCounter);
window.addEventListener('resize', updateCounter);