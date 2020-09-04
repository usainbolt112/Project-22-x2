var helicopter,helicopterImage
var package

function setup() {
  createCanvas(400, 400);
  helicopter = createSprite(200,100,50,50)
  helicopter.addImage("helicopter", helicopter.png)
  
  package = createSprite(200,100,30,30)
  package.addImage("package",package.png)
}

function draw() {
  background(220);
  helicopter.depth=package.depth+1
  if(keyDown(DOWN_ARROW)){
  package.velocityY=-2
  
  }
}