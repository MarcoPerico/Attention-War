Matter.use("matter-attractors");

let image1;

let Engine = Matter.Engine,
  World = Matter.World,
  Body = Matter.Body,
  Bodies = Matter.Bodies,
  Events = Matter.Events,
  Runner = Matter.Runner,
  Render = Matter.Render,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

let canvas;
let canvasmouse;

let engine;
let world;
let box1;
let boxes = [];
let attractiveBody;

let boundaries = [];
let myImages = [];
let rx, ry, rz;

let box2;
let mConstraint;
let render;
let mouse;

// function preload() {
//   image1 = loadImage("./assets/buttons/nf1.png");
//   image2 = loadImage("./assets/buttons/pv1.png");
//   image3 = loadImage("./assets/buttons/yt4.png");
//   image4 = loadImage("./assets/buttons/tw1.png");
// }

// function setup() {
// }

function moveit() {
  if (!mouse.position.x) return;
  // smoothly move the attractor body towards the mouse
  Body.translate(attractiveBody, {
    x: (mouse.position.x - attractiveBody.position.x) * 0.12,
    y: (mouse.position.y - attractiveBody.position.y) * 0.12,
  });
}

// function draw() {
// }

function Boundary(x, y, w, h, a) {
  let options = {
    friction: 0,
    restitution: 0.95,
    angle: a,
    isStatic: true,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2);
    noFill();
    rect(0, 0, this.w, this.h);
    pop();
  };
}

function Box(source, x, y, w, h) {
  let options = {
    friction: 0.5,
    restitution: 0.4,
    mass: 0.1,
  };
  this.body = Bodies.rectangle(x, y, 100, 50, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(source, 0, 0, this.w, this.h);
    pop();
  };
}

//------------------------------------------------------------

let s0 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createElement("h1", "THE ATTENTION WAR");
    p.background(0);
  };
};

let s1 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createElement(
      "p",
      "Over the last few years, the world of streaming has exploded. As they compete for users' attention, <i>video streaming platforms</i> have gotten increasingly competitive.<br />"
    );
    p.background(0);
  };
};

let s2 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createElement(
      "p",
      "One of the most serious challenges to these services' viability is <i>'decision fatigue'</i>, in which the act of selecting something to watch can overwhelm and discourage viewers if they are unable to discover something fascinating in a reasonable amount of time."
    );
    p.background(0);
  };
};

let s3 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createElement(
      "p",
      "As a result of this problem, streaming platforms have used a variety of ways to develop their user interfaces.<br /> This guide will walk you through three different strategies used by <i>Netflix</i>, <i>Prime Video</i>, <i>YouTube</i> and <i>Twitch</i>."
    );
    p.createElement("button", "START THE EXPERIENCE");
    p.background(0);
  };
};

let p0 = new p5(s0, "canvas0");
let p1 = new p5(s1, "canvas1");
let p2 = new p5(s2, "canvas2");
let p3 = new p5(s3, "canvas3");

p0.draw = function () {
  p0.background(0);
};

p1.draw = function () {
  p1.ellipse(p1.mouseX, p1.mouseY, 20);
};

p2.draw = function () {
  p2.fill("blue");
  p2.ellipse(p2.mouseX, p2.mouseY, 20);
};

p3.draw = function () {
  p3.fill("pink");
  p3.ellipse(p3.mouseX, p3.mouseY, 20);
};