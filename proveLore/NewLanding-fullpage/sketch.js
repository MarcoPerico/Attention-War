function preload() {
  px = loadFont("./assets/fonts/PxGrotesk/PxGrotesk-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill("red");
  circle(mouseX, mouseY, 20);
  // fill(255);
  // textAlign(CENTER);
  // textSize(20);
  // textFont(px);
  // push();
  // // translate(-windowWidth / 5, 0);

  // let intro1 = text(
  //   "Over the last few years, the world of streaming has exploded. As they compete for users' attention, video streaming platforms have gotten increasingly competitive.",
  //   windowWidth / 2,
  //   windowHeight / 2,
  //   windowWidth / 2
  // );
  // pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
