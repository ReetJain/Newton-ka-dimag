const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5,bobmeter

function setup() {
	createCanvas(windowWidth, windowHeight-4);

	engine = Engine.create();
	world = engine.world;

	bobmeter = 40;

	roof = new Roof(width/2, 6, 350, 40);

	bob1 = new Bob(width/2, 200, 50);
	bob2 = new Bob(width/2+50, 200, 50);
	bob3 = new Bob(width/2-50, 200, 50);
	bob4 = new Bob(width/2+100, 200, 50);
	bob5 = new Bob(width/2-100, 200, 50);

	rope1 = new Rope(bob1.body, roof.body, bobmeter, 0);

	Engine.run(engine);
}

function draw() {
	
	background("lightgray");

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
}