Matter.use(
  'matter-attractors'
);

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

function setup() {
  // canvas = $("#wrapper-canvas").get(0);
  canvas = createCanvas(windowWidth, windowHeight);
 console.log('matter-attractors');
engine = Engine.create();
image1 = loadImage("./assets/ehi.jpg");

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

let options = {
  isStatic: true,
  friction: 0.5,
  restitution: 1,
}

// box2 = Bodies.rectangle(500, height/2, width/2, 10, options)
// World.add(world, box2);
// box1 = Bodies.rectangle(windowWidth/2, windowHeight/2, 80, 80);
// World.add(world, box1);

// canvasmouse = Mouse.create(canvas.elt);
// canvasmouse.pixelRatio = pixelDensity();
// let options2 = {
//   mouse: canvasmouse
//   }

// mConstraint = MouseConstraint.create(engine, options2);
// World.add(world, mConstraint);


render = Render.create({
  element: canvas.elt,
  engine: engine,
  options3: {
    showVelocity: false,
    width: 100,
    height: 100,
    wireframes: false,
    background: 'rgb(240,240,240)'
  }
});
World.add(world, render);

// add mouse control
mouse = Mouse.create(render.canvas.elt);

attractiveBody = Bodies.circle(100,
100, 10, {
  render: {
    fillStyle: `rgb(240,240,240)`,
    strokeStyle: `rgb(240,240,240)`,
    lineWidth: 0
  },
  isStatic: true,
  plugin: {
    attractors: [
      function(bodyA, bodyB) {
        return {
          x: (bodyA.position.x - bodyB.position.x) * 1e-6,
          y: (bodyA.position.y - bodyB.position.y) * 1e-6,
        };
      }
    ]
  }
}
);
World.add(world, attractiveBody);

}



function moveit() {
    if (!mouse.position.x) return;
    // smoothly move the attractor body towards the mouse
    Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12
    });
};


function mousePressed(){
  boxes.push(new Box(mouseX, mouseY, 50, 30));
}

function draw() {
  background(255);
  // rect(box1.position.x, box1.position.y, 80, 80);
// rect(box2.position.x, box2.position.y, width/2, 10);
// rectMode(CENTER)
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
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

