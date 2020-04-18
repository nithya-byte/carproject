var car1,wall;
function setup() {
  createCanvas(800,400);
  car1= new car(2260,10,"red");
wall=createSprite(400,200,60,400);
wall.shapeColor="green";

}

function draw() {
  background(255,255,255);  
car1.bounceoff(wall,car1);
  drawSprites();
}