
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var engine, world;
	var box1, box2, bbox3
	var paper
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper (100,320)
ground = new Ground(600,height,1200,20)
box1 = createSprite (630,690,150,10);
World.add(world,box1);

box2 = createSprite (545,640, 10, 100)
World.add(world,box2);

box3 = createSprite (700,640,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 95, y:-95})
	}
} 


