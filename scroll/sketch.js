let pos = 25;
let myPos;

// function cl(text) {
//   console.log(text);
// };

function ciao() {
  window.addEventListener("scroll", () => {
  
  const span = document.querySelector("span");
  // span.innerHTML = window.scrollY;
  span.innerHTML = pos;
  
  var wScroll = window.scrollY;
  
});
}

var offsetY = 0;



function setup() { 
  createCanvas(windowWidth, windowHeight, "canvas");
} 

function mouseWheel(){
    // offsetY += (mouseY - pmouseY)/2;
    // translate(0, offsetY);
    print(event.delta);
    //move the square according to the vertical scroll amount
    pos += event.delta;
    // pos += offsetY;
      //block page scrolling
  // return false;

}

function draw() { 
  background(220);

    for(var i = 0; i < 100; i++){
      rect(width/8, 150 + i*50 - pos, 50, 40); 
    }

    // for(var i = 0; i < 10; i++){
    //     rect(width/2.6, 150 + i*50 - pos, 50, 40); 
    //     // rect(width/1.6, -10000 + i*50, 50, 40); 
    //     // rect(width/1.2, -10000 + i*50, 50, 40);  
    // }
    // console.log(pos);
    // console.log(offsetY);
    ciao();
}