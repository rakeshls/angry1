class Log {
    constructor(x, y,height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.width = 20;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      Matter.Body.setAngle(this.body,angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("green")
      strokeWeight(4)
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  