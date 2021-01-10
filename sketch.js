var car,wall;
var speed,weight;
var carImg,start,startImg,wallImg;
var deformation;


function preload()
{
  carImg = loadImage("Polish_20201229_102109711.png");
  startImg = loadImage("Polish_20201229_105028284.png");
  wallImg = loadImage("wallImage2.jpg");
}

function setup() 
{
  createCanvas(1300,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(70,200,100,50);
  car.shapeColor=(255,255,255);
  

  start = createSprite(50,350,60,80);
  start.addImage("j",startImg);
  start.scale=0.2;

  wall=createSprite(1200,200,20,height/2);
  wall.addImage("f",wallImg);
  wall.visible=true;

  
  
}

function draw()
{
  background("lightpink");

  if(mousePressedOver(start))
  {
    car.velocityX = speed;
  }

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    deformation = 0.5*weight*speed*speed/22500;

    if(deformation > 180)
    {
      car.shapeColor=color(255,0,0);
    }

     if(deformation > 100 && deformation < 180)
     {
       car.shapeColor=color(230,230,0);
     }
      
      if(deformation < 10)
       {
         car.shapeColor=color(0,255,0);
       }
  }

  drawSprites();

 
  
}


  
