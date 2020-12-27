var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2)
}

function draw() {
  background(255); 
  
  bullet.velocityX = speed;
  
  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX = 0;
    bullet.visible = false
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation > 69)
 {
   wall.shapeColor = "green";
 }
 if (deformation < 69)
 {
   wall.shapeColor = ("red");
 }
 
  }
  drawSprites();
}