const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
 canvas=createCanvas(400,400)
 engine=Engine.create();
 world=engine.world;
 var options={
   isStatic:true
 }
 ground=Bodies.rectangle(200,385,50,50,options);
 World.add(world,ground);

 var ball_options={
   restitution:2.0
 }
 ball=Bodies.circle(200,200,20,ball_options);

 World.add(world,ball);
 console.log(ground);
 console.log(ground.position.x);
 console.log(ground.position.y);
}

function draw() {
  background(0); 
    Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,30);
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,50,50);
}