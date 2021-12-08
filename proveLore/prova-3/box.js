function Box(x, y, w, h) {
  let options = {
    friction: 0.5,
    restitution: 0.8,
    mass: 0.1,
  };
  this.body = Bodies.rectangle(x, y, 100, 60, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(image1, 0, 0, this.w, this.h);
    pop();
  };
}