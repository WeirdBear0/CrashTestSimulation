var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 30, 30);
  wall = createSprite(775, 200, 25, 320);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car.velocityX = speed;
  car.shapeColor = color(255,255,255);


}

function draw() {
  background(0,0,0); 
  if(car.x-wall.x<car.width/2+wall.width/2 && wall.x-car.x < wall.width/2 + car.width/2 && 
    car.y-wall.y<car.height/2+wall.height/2 && wall.y-car.y < wall.height/2 + car.height/2){
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation >= 180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation< 100){
      car.shapeColor = color(0,255,0);
    }
  }
 
  drawSprites();
}