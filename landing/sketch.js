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

function preload() {
  image1 = loadImage("./assets/ehi.jpg");
  image2 = loadImage("./assets/2.JPG");
  image3 = loadImage("./assets/1.jpeg");
  image4 = loadImage("./assets/4.jpg");
}

function setup() {
  // canvas = $("#wrapper-canvas").get(0);
  canvas = createCanvas(windowWidth, windowHeight);
  console.log("matter-attractors");
  engine = Engine.create();

  myImages.push(image1, image2, image3, image4);

  // // create renderer
  // var render = Render.create({
  //  canvas: canvas.elt,
  //   engine: engine,
  //   options: {
  //     showVelocity: false,
  //     width: 100,
  //     height: 100,
  //     wireframes: false,
  //     background: 'rgb(240,240,240)'
  //   }
  // });

  // create renderer
  // render = Render.create({
  //   element: document.body,
  //   engine: engine,
  //   options3: {
  //     width: Math.min(document.documentElement.clientWidth, 1024),
  //     height: Math.min(document.documentElement.clientHeight, 1024),
  //     wireframes: false
  //   }
  // });

  let runner = Runner.create();

  world = engine.world;
  engine.world.gravity.y = 0.2;

  Matter.Runner.run(engine);
  // Matter.Render.run(render);
  push();
  boundaries.push(new Boundary(width / 2, height, width, 10, 0));
  boundaries.push(new Boundary(width / 2, 0, width, 10, 0));
  boundaries.push(new Boundary(0, height / 2, 10, height, 0));
  boundaries.push(new Boundary(width, height / 2, 10, height, 0));
  pop();

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

  attractiveBody = Bodies.circle(mouseX, mouseY, 10, {
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
}

function moveit() {
  if (!mouse.position.x) return;
  // smoothly move the attractor body towards the mouse
  Body.translate(attractiveBody, {
    x: (mouse.position.x - attractiveBody.position.x) * 0.12,
    y: (mouse.position.y - attractiveBody.position.y) * 0.12,
  });
}

// function mousePressed() {
//   boxes.push(new Box(mouseX, mouseY, 50, 30));
// }

function draw() {
  background(255);
  // rect(box1.position.x, box1.position.y, 80, 80);
  // rect(box2.position.x, box2.position.y, width/2, 10);
  // rectMode(CENTER)
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

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  //   for (let i = 0; i < boundaries.length; i++) {
  //     boundaries[i].show();
  // }
  // ellipse(attractiveBody.position.x, attractiveBody.position.y, 10, 10);
  // console.log(canvasmouse.position.x);
  // console.log(attractiveBody.position.x)
  moveit();
}

// Events.on(engine, 'afterUpdate', function() {
//   if (!canvasmouse.position.x) return;
//   // smoothly move the attractor body towards the mouse
//   Body.translate(attractiveBody, {
//       x: (canvasmouse.position.x - attractiveBody.position.x) * 0.12,
//       y: (canvasmouse.position.y - attractiveBody.position.y) * 0.12
//   });
// });

// return a context for MatterDemo to control
// return {
//   engine: engine,
//   runner: runner,
//   render: render,
//   canvas: render.canvas,
//   stop: function() {
//     Matter.Render.stop(render);
//     Matter.Runner.stop(runner);
//   }
// };
// };

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
  this.body = Bodies.rectangle(x, y, 100, 80, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    // let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    // rotate(angle);
    // rectMode(CENTER);
    // rect(0, 0, this.w, this.h);
    imageMode(CENTER);
    image(source, 0, 0, this.w, this.h);
    pop();
  };
}
