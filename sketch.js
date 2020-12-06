const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];
var stand,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
,box11,box12,box13,box14,box15
var polygon1,polygonImg
var launcher1
function preload(){
  polygonImg=loadImage("polygon.png")
}
function setup() {
  createCanvas(1500,800);
  engine=Engine.create();
  world=engine.world;
  
  stroke(255)
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
 
  stand=new Ground(900,650,300,30)
  box1=new Box(850,600,20,40);
  box2=new Box(870,600,20,40)
  box3=new Box(890,600,20,40)
  box4=new Box(910,600,20,40)
  box5=new Box(930,600,20,40)
  box6=new Box(870,630,20,40)
  box7=new Box(890,630,20,40)
  box8=new Box(910,630,20,40)
  box9=new Box(890,650,20,40)
  polygon1=new polygon(50,200,20,20);
  launcher1=new launcher(this.polygon1.body,{x:100,y:200})
  

}

function draw() {
  
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine)
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
 /* for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}*/
stand.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();

polygon1.display();
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    launcher1.fly()
  }

   function keyPressed(){
    if(keyCode === 32){
    
        launcher1.attach(polygon1.body)
    }
    
    }
