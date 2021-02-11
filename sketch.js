const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3;
var ball, dustbin_img;

function setup() {
	createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,390,800,25);

	box3 = new Box(590,335,10,80);
	box2 = new Box(510,335,10,80);
	box1 = new Box(550,370,89,15);

	ball = new Ball(200,320,12);
  
}


function draw() {
	background(220);
	Engine.update(engine);

	
	ground.display();
	
	box3.display();
	box2.display();
	box1.display();
	ball.display();
	

	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:3.5, y:-2.5})
	}
	
}


