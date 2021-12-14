function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  x = constrain(
    dist(windowWidth / 2, windowHeight / 2, mouseX, mouseY),
    0,
    100
  );

  console.log(x);
  circle(windowWidth / 2, windowHeight / 2, 50);
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight / 2, x, x / 2);
}
