
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var img;


function preload()
{
img = loadImage("sprites/dustbingreen.png")	;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	dust=createSprite(650, 550, 500,400);
	dust.addImage("Img",img);
	dust.scale = 0.6;
	
	
	groundSprite.shapeColor=color(255)
	box1 = new Dustbin(650,650,180,20);
	box2 = new Dustbin(740,560,20,200);
	box3 = new Dustbin(560,560,20,200);
	ball = new paper(200,648,70);

	

	ground = Bodies.rectangle(width/2,height-35 , width, 10 , {isStatic:true} );
	
	
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  
  box1.display();
  box2.display();
  box3.display();
  ball .display();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position, {x:450, y:-1000});
	 }
   }
   
   



