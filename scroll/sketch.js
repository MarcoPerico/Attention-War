function cl(text) {
  console.log(text);
};

window.addEventListener("scroll", () => {
  
  const span = document.querySelector("span");
  span.innerHTML = window.scrollY;
  
  var wScroll = window.scrollY;
  
});

var offsetY = 0;

function setup() { 
  createCanvas(windowWidth, 8000, "canvas");
} 

function mouseWheel(){
    offsetY += (mouseY - pmouseY)/2;
}

function draw() { 
  background(220);
    for(var i = 0; i < 1000; i++){
      rect(width/8, -10000 + i*50 + offsetY, 50, 40); 
        rect(width/2.6, -10000 + i*50 + offsetY, 50, 40); 
        rect(width/1.6, -10000 + i*50 + offsetY, 50, 40); 
        rect(width/1.2, -10000 + i*50 + offsetY, 50, 40);  
    }
}