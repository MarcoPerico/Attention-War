jQuery(document).ready(function( $ ){




});
function cl(text) {
  console.log(text);
};

window.addEventListener("scroll", () => {
  
  const span = document.querySelector("span");
  span.innerHTML = Math.round(window.scrollY);
  
  var wScroll = window.scrollY;
  
});

let twitchcounter = document.getElementById("tspan");
let twitchscroll = document.getElementById("twitch");

let netflixcounter = document.getElementById("nspan");
let netflixscroll = document.getElementById("netflix");

let youtubecounter = document.getElementById("yspan");
let youtubescroll = document.getElementById("youtube");

// function updateCounter() {
//   'use strict';
//   var height = document.documentElement.scrollHeight - window.innerHeight;
//    counters.textContent= document.documentElement.scrollTop / height * 150;
// }

// scrollHeight = pixel counter for an element
// scrollTop = quanto ho scrollato di quell'elemento
// heightno = how much scroll i have left

let twitchmap;
let netflixmap;
let youtubemap;

// function updateCounter() {
//   'use strict';
//   var heightno = twitchm.scrollHeight - window.innerHeight;
//    counters.textContent = document.documentElement.scrollTop / heightno * 150;
//   //  console.log(heightno);
//   //  console.log(window.innerHeight)
//   // console.log(window.innerHeight)
// }

function draw() {
  updateTwitchCounter()
  updateNetflixCounter()
  updateYouTubeCounter()
}

function updateTwitchCounter() {
  'use strict';
  twitchmap = map(document.documentElement.scrollTop, 0, twitchscroll.scrollHeight, 0, 150);
  twitchcounter.textContent = round(twitchmap);
if (round(twitchmap) > 150) {
  twitchcounter.textContent = 150;
}
}

function updateNetflixCounter() {
  'use strict';
  netflixmap = map(document.documentElement.scrollTop, 0, netflixscroll.scrollHeight, 0, 300);
  netflixcounter.textContent = round(netflixmap);
if (round(netflixmap) > 300) {
  netflixcounter.textContent = 300;
}
}

function updateYouTubeCounter() {
  'use strict';
  youtubemap = map(document.documentElement.scrollTop, 0, youtubescroll.scrollHeight, 0, 1500);
  youtubecounter.textContent = round(youtubemap);
if (round(youtubemap) > 1500) {
  youtubecounter.textContent = 1500;
}
}



document.addEventListener('scroll', updateTwitchCounter);
document.addEventListener('scroll', updateNetflixCounter);
document.addEventListener('scroll', updateYouTubeCounter);
window.addEventListener('resize', updateTwitchCounter);