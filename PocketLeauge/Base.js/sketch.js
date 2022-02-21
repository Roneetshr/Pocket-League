const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car1, goal, ground, ball, goal2, wall1, wall2, wall3, wall4;

function setup() {
    var canvas = createCanvas(1200,400,"gray");
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ball = new Ball(700,200,50,50);
    car1 = new Car(750,300,100,100);
    goal = new Ground(100,200,20,200)
    goal2 = new Ground(1100,200,20,200)
    wall1 = new Ground(150,100,100,200)
    wall2 = new Ground(150,300,100,200)
    wall3 = new Ground(1050,100,100,200)
    wall4 = new Ground(1050,300,100,200)
}
function draw() {
    background(206,237,227);
    Engine.update(engine);
    

    if(ball.y>1210){
        ball.y=1200
    }
    if(ball.isTouching(goal)){
        ball.x=600
        ball.y=1200
        gameOver();
    }
    if(ball.isTouching(goal2)){
        ball.x=600
        ball.y=1200
        gameOver();
    }


    background();
    car1.display();
    ground.display();
    ball.display();
    goal.display();
    goal2.display();
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
}

function gameOver() {
  if(ball.isTouching(goal)){
      Text("You Scored!")
  }
function keyPressed(){
    if(keydown==="left"){
        car1.velocity.x=car1.velocity.x-5
    }
    if(keydown==="right"){
        car1.velocity.x=car1.velocity.x+5
    }
    if(keyup==="left"){
        car1.velocity.x=car1.velocity.x
    }
    if(keyup==="right"){
        car1.velocity.x=car1.velocity.x
    }
    if(keydown==="B"){
        car1.velocity.x=car1.velocity.x*2
        car1.velocity.y=car1.velocity.y*2
    }
    if(keydown==="space"){
        car1.velocity.y=car1.velocity.y+5
    }
    
}  
}

