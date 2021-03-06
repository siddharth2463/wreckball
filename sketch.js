const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img, backgroundImg;
var score=0;
var bg = "images/city.jpg";
function preload(){
  backgroundImg = loadImage(bg);
  polygon_img=loadImage("images/stone.png");

  
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,390,900,20);
  stand1=new Ground(125,280,20,200)
  stand2=new Ground(175,200,100,20)
  block1=new Block(400,360,30,40)
  block2=new Block(425,360,30,40)
  block3=new Block(450,360,30,40)
  block4=new Block(475,360,30,40)
  block5=new Block(400,320,30,40)
  block6=new Block(425,320,30,40)  
  block7=new Block(450,320,30,40)
  block8=new Block(475,320,30,40)
  block9=new Block(400,280,30,40)
  block10=new Block(425,280,30,40)  
  block11=new Block(450,280,30,40)
  block12=new Block(475,280,30,40)
  block13=new Block(400,240,30,40)
  block14=new Block(425,240,30,40)  
  block15=new Block(450,240,30,40)
  block16=new Block(475,240,30,40)
 
  //level one
 

 
  //polygon holder with slings
  polygon = Bodies.circle(225,275,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:225,y:200});

}
function draw() {
  //background(56,44,44); 
  if(backgroundImg)
    background(backgroundImg);
  //Engine.update(engine);
 
  ground.display();
 
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 stand1.display();
 stand2.display();
 
 
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
