// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
// }

// function draw() {
//   fill("red");
//   circle(mouseX, mouseY, 20);
// }

//---------------------------------------------------

let s1 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
};

let s2 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
};

let s3 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
};

let p1 = new p5(s1, "intro1");
let p2 = new p5(s2, "intro2");
let p3 = new p5(s3, "intro3");

p1.draw = function () {
  p1.fill("pink");
  p1.background(0);

  p1.ellipse(p1.mouseX, p1.mouseY, 20);
};

p2.draw = function () {
  p2.fill("blue");
  p2.background(0);

  p2.ellipse(p2.mouseX, p2.mouseY, 20);
};

p3.draw = function () {
  p3.fill("yellow");
  p3.background(0);

  p3.ellipse(p3.mouseX, p3.mouseY, 20);
};

//NON FUNZIONA NOICE
function windowResized() {
  p1.resizeCanvas(p1.windowWidth, p1.windowHeight);
}
