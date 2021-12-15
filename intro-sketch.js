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
let boxes2 = [];

let attractiveBody;

let boundaries = [];

let myImages = [];
let myImages2 = [];

let rx, ry, rz;

let box2;
let mConstraint;
let render;
let mouse;

function moveit() {
  if (!mouse.position.x) return;
  // smoothly move the attractor body towards the mouse
  Body.translate(attractiveBody, {
    x: (mouse.position.x - attractiveBody.position.x) * 0.12,
    y: (mouse.position.y - attractiveBody.position.y) * 0.12,
  });
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

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;
    p.push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2);
    noFill();
    rect(0, 0, this.w, this.h);
    p.pop();
  };
}

function Box(source, x, y, w, h) {
  let options = {
    friction: 0.5,
    restitution: 0.4,
    mass: 0.1,
  };
  this.body = Bodies.rectangle(x, y, 100, 80, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;

    p1.push();
    p1.translate(pos.x, pos.y);
    p1.imageMode(p1.CENTER);
    p1.image(source, 0, 0, this.w, this.h);
    p1.pop();
  };
}

//---------------------------------------------------

let s1 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    image1 = p.loadImage("./assets/ehi.jpg");
    image2 = p.loadImage("./assets/2.JPG");
    image3 = p.loadImage("./assets/1.jpeg");
    image4 = p.loadImage("./assets/4.jpg");

    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    // console.log("matter-attractors");
    engine = Engine.create();

    myImages.push(image1, image2, image3, image4);

    let runner = Runner.create();

    world = engine.world;
    engine.world.gravity.y = 0.2;

    Matter.Runner.run(engine);
    p.push();
    boundaries.push(new Boundary(p.width / 2, p.height, p.width, 10, 0));
    boundaries.push(new Boundary(p.width / 2, 0, p.width, 10, 0));
    boundaries.push(new Boundary(0, p.height / 2, 10, p.height, 0));
    boundaries.push(new Boundary(p.width, p.height / 2, 10, p.height, 0));
    p.pop();

    render = Render.create({
      element: canvas.elt,
      engine: engine,
      options3: {
        showVelocity: false,
        width: 100,
        height: 100,
        wireframes: false,
        background: "rgb(240,240,240)",
      },
    });
    World.add(world, render);

    // add mouse control
    mouse = Mouse.create(render.canvas.elt);

    attractiveBody = Bodies.circle(p1.mouseX, p1.mouseY, 10, {
      render: {
        fillStyle: `rgb(240,240,240)`,
        strokeStyle: `rgb(240,240,240)`,
        lineWidth: 0,
      },
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          },
        ],
      },
    });
    World.add(world, attractiveBody);
  };
};

let s2 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createCanvas(p.windowWidth, p.windowHeight);
    image5 = p.loadImage("./assets/logos/n.png");
    image6 = p.loadImage("./assets/logos/p.png");
    image7 = p.loadImage("./assets/logos/t.png");
    image8 = p.loadImage("./assets/logos/y.png");

    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    // console.log("matter-attractors");
    engine = Engine.create();

    myImages2.push(image5, image6, image7, image8);

    let runner = Runner.create();

    world = engine.world;
    engine.world.gravity.y = 0.2;

    Matter.Runner.run(engine);
    p.push();
    boundaries.push(new Boundary(p.width / 2, p.height, p.width, 10, 0));
    boundaries.push(new Boundary(p.width / 2, 0, p.width, 10, 0));
    boundaries.push(new Boundary(0, p.height / 2, 10, p.height, 0));
    boundaries.push(new Boundary(p.width, p.height / 2, 10, p.height, 0));
    p.pop();

    render = Render.create({
      element: canvas.elt,
      engine: engine,
      options3: {
        showVelocity: false,
        width: 100,
        height: 100,
        wireframes: false,
        background: "rgb(240,240,240)",
      },
    });
    World.add(world, render);

    // add mouse control
    mouse = Mouse.create(render.canvas.elt);

    attractiveBody = Bodies.circle(p1.mouseX, p1.mouseY, 10, {
      render: {
        fillStyle: `rgb(240,240,240)`,
        strokeStyle: `rgb(240,240,240)`,
        lineWidth: 0,
      },
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          },
        ],
      },
    });
    World.add(world, attractiveBody);
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
  p1.background(0);

  if (boxes.length < 3) {
    for (let i = 0; i < myImages.length; i++) {
      const provabox = new Box(
        myImages[i],
        p1.windowWidth / 2,
        p1.windowHeight / 2,
        100,
        80
      );
      boxes.push(provabox);
    }
  }

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  moveit();
};

p2.draw = function () {
  p2.fill("blue");
  p2.background(0);
  p2.ellipse(p2.mouseX, p2.mouseY, 20);

  if (boxes2.length < 3) {
    for (let i = 0; i < myImages2.length; i++) {
      const provabox2 = new Box(
        myImages2[i],
        p2.windowWidth / 2,
        p2.windowHeight / 2,
        100,
        80
      );
      boxes2.push(provabox2);
    }
  }

  for (let i = 0; i < boxes2.length; i++) {
    boxes2[i].show();
  }

  moveit();
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
