
//name spacing
const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

//declaring variables for abg
var engine,world,object;

function setup() {
  createCanvas(800,400);
  //creating engine for abg
  engine = Engine.create();

  //the world of abg is equal to engines world
  world = engine.world;

  //to make the ground not fall down
  var options = {
    isStatic:true 
  }
  //created a rectangle ground from bodies class
  object = Bodies.rectangle(400,350,800,10,options);
  //added ground to the main world
  World.add(world,object)

  //making the ball bounce off the ground
  var ball_options ={
     restitution: 1.0
   }
   //created a circle ball from bodies class
   ball = Bodies.circle(200,100,20, ball_options);
   //added ball to the main world
   World.add(world,ball);

  console.log(object);
}

function draw() {
  background("lightgreen");
  //to update the engine  
  Engine.update(engine);
  //to create rectangle in center
  rectMode(CENTER);
  //to display the ground
  rect(object.position.x,object.position.y,800,10);
  //to make the ball acctually touch the ground
   ellipseMode(RADIUS);
   //to display the ball
   ellipse(ball.position.x, ball.position.y, 20, 20);
}