var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;

  wall=createSprite(1500,200,10,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  
  if(wall.x<car.x){
    car.velocityX=0;
    var derformation=0.5*weight*speed*speed/22509;
    if(derformation>180){
      car.shapeColor=color(255,0,0); 
    }
    if(derformation<180 && derformation>100){
      car.shapeColor=color(230,230,0); 
    }
    if(derformation<100){
      car.shapeColor=color(0,255,0); 
    }
  }
  

  drawSprites();
}