

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

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;
  x2 += dx * easing2;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
  y2 += dy * easing2;

  image(duck, x, y);
  image(michael, x2, y2);
}
