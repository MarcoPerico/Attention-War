let x = 1;
let y = 1;
let x2 = 1;
let y2 = 1;
let duck;
let michael;
let easing = 0.05;
let easing2 = 0.06;

function preload() {
  duck = loadImage("assets/duck-vacuum.gif");
  michael = loadImage("assets/michael.gif");
}

let s1 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("red");
  };
};

let s2 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    duck = p.loadImage("assets/duck-vacuum.gif");
    michael = p.loadImage("assets/michael.gif");
  };
};

let p1 = new p5(s1);
let p2 = new p5(s2);

p1.draw = function () {
  p1.ellipse(p1.mouseX, p1.mouseY, 20);
  // windowResized2();
};

p2.draw = function () {
  p2.background(237, 34, 93);
  let targetX = p2.mouseX;
  let dx = targetX - x;
  x += dx * easing;
  x2 += dx * easing2;

  let targetY = p2.mouseY;
  let dy = targetY - y;
  y += dy * easing;
  y2 += dy * easing2;

  p2.image(duck, x, y);
  p2.image(michael, x2, y2);

  // windowResized1();
};
// function windowResized1() {
//   p1.resizeCanvas(p1.windowWidth, p1.windowHeight);
// }
// function windowResized2() {
//   p2.resizeCanvas(p2.windowWidth, p2.windowHeight);
// }

// ----------------- GIF SEGUE MOUSE ---------------------------

// let x = 1;
// let y = 1;
// let x2 = 1;
// let y2 = 1;
// let duck;
// let michael;
// let easing = 0.05;
// let easing2 = 0.06;

// function preload() {
//   duck = loadImage("assets/duck-vacuum.gif");
//   michael = loadImage("assets/michael.gif");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(237, 34, 93);
//   let targetX = mouseX;
//   let dx = targetX - x;
//   x += dx * easing;
//   x2 += dx * easing2;

//   let targetY = mouseY;
//   let dy = targetY - y;
//   y += dy * easing;
//   y2 += dy * easing2;

//   image(duck, x, y);
//   image(michael, x2, y2);
// }
