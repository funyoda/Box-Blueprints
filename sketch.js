const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World;
var gameEngine
var gameWorld
var ground,ball
var a
var b
var box1, box2, box3;

function setup() {
  createCanvas(800,400);
  gameEngine = Engine.create();
  gameWorld = gameEngine.world;
  ground = new Ground()
  box1=new Box(200,300,50,50);
  box2 = new Box(240,100,50,50);
  //console.log(ground);
  // b={restitution:0.8};
  // ball = Bodies.circle(400,200,30,b)
  // World.add(gameWorld,ball);
  // console.log(ball);
}


function draw() {
  background(230,20,255);  
  
 

 Engine.update(gameEngine);

//  ellipseMode(RADIUS);
//  circle(ball.position.x,ball.position.y,30);
ground.display();
box1.display();
box2.display();
}