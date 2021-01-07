const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  sling, ball;
var stand1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;


function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background("white");
  Engine.update(engine);
  rectMode(CENTER);
 
  box1.display("yellow", "black");
  box2.display("yellow", "black");
  box3.display("yellow", "black");
  box4.display("red", "black");
  box5.display("red", "black");
  box6.display("green", "black");
  box7.display("green", "black");
  box8.display("blue", "black");
  box9.display("yellow", "black");
  box10.display("blue", "black");
  box11.display("blue", "black");
  box12.display("yellow", "black");
  box13.display("orange", "black");
  box14.display("yellow", "black");
  box15.display("blue", "black");
  sling.display("limegreen");
  stand1.display();
  ball.display("orange", "orange");
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}