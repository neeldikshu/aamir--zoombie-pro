class Stone {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
      };
      this.r = 30;
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }
  
  
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      noStroke();
    fill("white");
    ellipse(pos.x, pos.y, this.r)
      pop();
  
    }
  }
  