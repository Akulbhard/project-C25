class paper {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'isStatic' :false,
          'friction':0.5,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x,y, radius,options);
      this.radius = radius;
      this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body,this.image);
    }
    display(){
      
      
      
      fill("white");
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
      
    }
  };