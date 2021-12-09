let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner;
World = Matter.World;
Bodies = Matter.Bodies;

let engine, world, box;
let boundaries = [];
let circles = [];

let colorPattern = [
  "#F54F8E",
  "#0FF2C9",
  "#F2E96B",
  "#F2F2EB",
  "#2949BD",
  "#A75E8A",
  "#FBA3B2",
  "#C4DD89",
  "#EAA56F",
  "#F5DA62",
];

let rx, ry, rz;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createMetaTag();
  setupDevice();
  engine = Engine.create();
  runner = Runner.create();
  world = engine.world;
  box = Bodies.rectangle(400, 200, 80, 80);
  Runner.run(engine);

  boundaries.push(new Boundary(width / 2, height, width, 10, 0));
  boundaries.push(new Boundary(width / 2, 0, width, 10, 0));
  boundaries.push(new Boundary(0, height / 2, 10, height, 0));
  boundaries.push(new Boundary(width, height / 2, 10, height, 0));

  let boxNum = int(random(10, 70));
  let boxMaxSize = (windowWidth * windowHeight) / 10000 - boxNum;
  for (let i = 0; i < boxNum; i++) {
    let c = colorPattern[int(random(colorPattern.length))];
    circles.push(
      new Circle(random(width), random(height), random(10, boxMaxSize), c)
    );
  }
}

function draw() {
  background(200);
  let gravity = 1.3;
  if (rotationX === 0 && rotationY === 0) {
    rx = map(mouseX, 0, width, -gravity, gravity);
    ry = map(mouseY, 0, height, -gravity, gravity);
  } else {
    rx = map(rotationY, -90, 90, -gravity, gravity);
    ry = map(rotationX, -90, 90, -gravity, gravity);
  }
  engine.world.gravity.x = rx;
  engine.world.gravity.y = ry;

  Engine.update(engine);
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
}

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
  //console.log(this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    noStroke();
    fill(0);
    rect(0, 0, this.w, this.h);
    pop();
  };
}

function Circle(x, y, r, c) {
  let options = {
    friction: 0,
    restitution: 0.95,
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  this.c = c;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(this.c);
    ellipse(0, 0, this.r * 2);
    pop();
  };
}

function createMetaTag() {
  let meta = createElement("meta");
  meta.attribute("name", "viewport");
  meta.attribute(
    "content",
    "user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
  );

  let head = select("head");
  meta.parent(head);
}

//デバイスの設定を行う関数
function setupDevice() {
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    // ios 13 の場合
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        // 最初だけボタンを表示する
        let button = createButton("click to allow access to sensors");
        button.style("font-size", "24px");
        button.center();
        button.mousePressed(requestAccess);
        throw error;
      })
      .then(() => {
        // 1回設定すればOKに
        permissionGranted = true;
      });
  } else {
    // ios 13以外
    permissionGranted = true;
  }
}

//ios 13
function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
    .catch(console.error);
  this.remove();
}
