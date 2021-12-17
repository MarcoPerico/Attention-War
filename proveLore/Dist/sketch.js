// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   immagine = loadImage("ehi.jpg");
// }

// function draw() {
//   background(220);

//   x = constrain(
//     dist(windowWidth / 2, windowHeight / 2, mouseX, mouseY),
//     0,
//     200
//   );

//   imageMode(CENTER);
//   image(immagine, windowWidth / 2, windowHeight / 2, 100, 50);
//   if (x<200) {

//   }
// }

let rectLocation;
function setup() {
  // create vector that keeps track of the location of the rect
  rectLocation = createVector(width / 2, height / 2);
}
function draw() {
  createCanvas(windowWidth, windowHeight);

  // Assign your mouseX and mouseY to a vector called target.
  var target = createVector(mouseX, mouseY);

  // Calculate the distance between your target and
  // the current location of your rect
  var distance = target.dist(rectLocation);

  // map the distance between your rect location and
  // the mouse to a new number which will dictate how
  // much slower it will move based on how close it
  // will get to the target.
  var mappedDistance = map(distance, 100, 0, 1.5, 0.5);

  // this is where you actually calculate the direction
  // of your target towards your rect.
  target.sub(rectLocation);

  // then you're going to normalize that value
  // (normalize sets the length of the vector to 1)
  target.normalize();

  // then you can multiply that vector by the distance
  // we mapped to a new number (in this case it gets
  // multiplied somewhere between 1.5 and 0.5 based
  // on how far the target is.)
  target.mult(mappedDistance);

  // last we add the target vector (which we modfied
  // multiple times) to the rect location.
  rectLocation.add(target);

  // draw and watch math do it's job!
  fill("red");
  rect(rectLocation.x, rectLocation.y, 100, 50);
  rect(rectLocation.x, rectLocation.y + 100, 100, 50);

  rect(rectLocation.x, rectLocation.y + 200, 100, 50);
}
