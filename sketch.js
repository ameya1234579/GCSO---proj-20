var car,car2,car3,wall,wall2,wall3;
var speed,weight;

function setup() {
 createCanvas(800,400);
 speed=random(55,90);
 weight=random(400,1500);
 car = createSprite(50, 100, 50, 50);
 wall = createSprite(700, 100, 60, 80);
 car2 = createSprite(50, 200, 50, 50);
 wall2 = createSprite(700, 200, 60, 80);
 car3 = createSprite(50, 300, 50, 50);
 wall3 = createSprite(700, 300, 60, 80);
 car.velocityX = speed;
 car2.velocityX = speed;
 car3.velocityX = speed;
 }

function draw() {
  background(255,255,255);

  
  
 if(wall.x - car.x < (car.width + wall.width)/2){
   car.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/22500;
   if(damage > 180){
     car.shapeColor = color(255,0,0);
   }

   if(damage > 100 && damage < 180){
     car.shapeColor = color(230,230,0);
   }
   
   if(damage < 100){
     car.shapeColor = color(0,255,0);
   }
 } 
 if(wall2.x - car2.x < (car2.width + wall2.width)/2){
  car2.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/22500;
  if(damage > 180){
    car2.shapeColor = color(255,0,0);
  }

  if(damage > 100 && damage < 180){
    car2.shapeColor = color(230,230,0);
  }
  
  if(damage < 100){
    car2.shapeColor = color(0,255,0);
  }
}
if(wall3.x - car3.x < (car3.width+wall3.width)/2){
  car3.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/22500;
  if(damage > 180){
    car3.shapeColor = color(255,0,0);
  }

  if(damage > 100 && damage < 180){
    car3.shapeColor = color(230,230,0);
  }
  
  if(damage < 100){
    car3.shapeColor = color(0,255,0);
  }
}  
  drawSprites();
}

