let boxes = [];
let myImages = [];

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
  if (boxes.length < 3) {
    for (let i = 0; i < myImages.length; i++) {
      const provabox = new Box(
        myImages[i],
        windowWidth / 2,
        windowHeight / 2,
        100,
        80
      );
      boxes.push(provabox);
    }
  }
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
