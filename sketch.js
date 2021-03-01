const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 580, 1200, 20);
    box1 = new Box(580, 200, 70, 70);
    box2 = new Box(580, 180, 70, 70);
    box3 = new Box(580, 160, 70, 70);
    box4 = new Box(580, 140, 70, 70);
    box5 = new Box(580, 120, 70, 70);

    box11 = new Box(670, 200, 70, 70);
    box22 = new Box(670, 180, 70, 70);
    box33 = new Box(670, 160, 70, 70);
    box44 = new Box(670, 140, 70, 70);
    box55 = new Box(670, 120, 70, 70);
    box66 = new Box(670, 100, 70, 70);

    box111 = new Box(760, 200, 70, 70);
    box222 = new Box(760, 180, 70, 70);
    box333 = new Box(760, 160, 70, 70);
    box444 = new Box(760, 140, 70, 70);
    box555 = new Box(760, 120, 70, 70);

    ball = new Ball(200, 200, 80, 80, 1);
}

function draw(){
    background("lightpink");
    Engine.update(engine);
    
    ground.display();
    fill("white");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    box11.display();
    box22.display();
    box33.display();
    box44.display();
    box55.display();
    box66.display();

    box111.display();
    box222.display();
    box333.display();
    box444.display();
    box555.display();

    ball.display();
}
