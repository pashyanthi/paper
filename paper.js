class paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 70;
      this.height =70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     // pos.x=mouseX;
      //pos.y=mouseY
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
     // strokeWeight(3);
     // stroke('blue')
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  