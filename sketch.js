const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(20,20);
    box1 = new Box(400,300,70,70);
    box2 = new Box(600,300,70,70);
    box3 = new Box(400,210,70,70);
    box4 = new Box(600,210,70,70);
    box5 = new Box(500,100,70,70)
    pig1 = new Pig(500,300);
    pig2 = new Pig(500,210);
    log1 = new Log(495,230,270,PI/2);
    log2 = new Log(495,140,270,PI/2);
    log3 = new Log(460,100,180,PI/7);
    log4 = new Log(550,100,180,-PI/7);
    ground = new Ground(400,height,800,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    bird.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
}