let pos = 25;
let myPos;
let videoNumber = 10;

// function cl(text) {
//   console.log(text);
// };

function ciao() {
  window.addEventListener("scroll", () => {
  
  const span = document.querySelector("span");
  // span.innerHTML = window.scrollY;
  span.innerHTML = pos;
  
  var wScroll = window.scrollY;

  const span2 = document.querySelector("span2");
  videosp.innerHTML = videoNumber;
  
});
}

// function ciao2() {
//   window.addEventListener("scroll", () => {
  
//   const span = document.querySelector(".hi", "span");
//   // span.innerHTML = window.scrollY;
//   span.innerHTML = videoNumber;
  
//   var wScroll = window.scrollY;
  
// });
// }

var offsetY = 0;

function preload() {
  netflix = loadImage("./assets/netflix-1.jpg.webp");
  twitch = loadImage("./assets/twitch.svg.png");
  yt = loadImage("./assets/YouTube.svg.png");
  amazon = loadImage("./assets/amazon.svg.png");
}

function setup() { 
  createCanvas(windowWidth, windowHeight, "canvas");
} 

function mouseWheel(){
    // offsetY += (mouseY - pmouseY)/2;
    // translate(0, offsetY);
  
    // print(event.delta);
    //move the square according to the vertical scroll amount
    pos += event.delta;
    // pos += offsetY;
      //block page scrolling
  // return false;
  

}

function draw() { 
  push();
  background(220);
  clear();
  pop();

  if (pos > 100 && pos < 110) {
  videoNumber = 20;
  }
  else if (pos > 200 && pos < 210) {
    videoNumber = 30;
    }

  console.log(videoNumber);

  fill("grey");
  noStroke();

  if (pos > 0) {

    for (let i = 0; i < 39; i++){
      image(netflix, width/8, 150 + i*50 - pos, 50, 40); 
    }

    for (let i = 0; i < 80; i++){
        image(amazon, width/2.6, 150 + i*50 - pos, 70, 20); 
    }

    for (let i = 0; i < 220; i++){
        image(yt, width/1.6, 150 + i*50 - pos, 70, 15); 
    }

    for (let i = 0; i < 25; i++){
        image(twitch, width/1.2, 150 + i*50 - pos, 60, 20);  
    }
  }

    else {
      for(var i = 0; i < 39; i++){
        // rect(width/8, 150 + i*50, 50, 40); 
        image(netflix, width/8, 150 + i*50, 50, 40); 
      }
  
      for(var i = 0; i < 80; i++){
        image(amazon, width/2.6, 150 + i*50, 70, 20); 
      }
  
      for(var i = 0; i < 220; i++){
          image(yt, width/1.6, 150 + i*50, 70, 15); 
      }
  
      for(var i = 0; i < 25; i++){
        image(twitch, width/1.2, 150 + i*50, 60, 20);   
      }
    
  }
    // console.log(pos);
    // console.log(offsetY);
    ciao();
    // ciao2()
}