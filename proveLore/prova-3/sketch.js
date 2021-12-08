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

let box2;
let mConstraint;
let render;
let mouse;

function preload() {
  image1 = loadImage("./assets/play.png");
}

function setup() {
  // canvas = $("#wrapper-canvas").get(0);
  canvas = createCanvas(windowWidth, windowHeight);
  console.log("matter-attractors");
  engine = Engine.create();

  let runner = Runner.create();

  world = engine.world;
  engine.world.gravity.y = 0.2;

  Matter.Runner.run(engine);
  // Matter.Render.run(render);

  let options = {
    isStatic: true,
    friction: 0.5,
    restitution: 1,
  };

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

  attractiveBody = Bodies.circle(100, 100, 10, {
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
    x: (mouse.position.x - attractiveBody.position.x) * 0.03,
    y: (mouse.position.y - attractiveBody.position.y) * 0.03,
  });
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 80, 80));
}

function draw() {
  background(255);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  moveit();
}
