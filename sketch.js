
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground = new Ground(400,655,800,20);
	paper1 = new Paper(160,555,25,25);
	bin1 = new Bin(680,690,10,80);
	bin2 = new Bin(710,690,10,80);
	bin3 = new Bin(695,710,80,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.body.applyForce(paper1Object.body,paper1Object.body.position,{x=85,y=-85})

}

}


