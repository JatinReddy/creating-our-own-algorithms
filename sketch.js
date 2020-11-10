var fixedRect, movingRect
var ball

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,30,70);
  ball = createSprite(300,200,10,10);
  ball.velocityX = 3;

}

function draw() {
  background(255,255,255); 
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(Math.abs(fixedRect.x - movingRect.x) < (fixedRect.width/2 + movingRect.width/2) &&
  Math.abs(fixedRect.y - movingRect.y) < (fixedRect.height/2 + movingRect.height/2)){
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  else {
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }
  if (Math.abs(fixedRect.x - ball.x)<(fixedRect.width/2 + ball.width/2) &&
  Math.abs(fixedRect.y - ball.y) < (fixedRect.height/2 + ball.height/2)){
    ball.velocityX = -ball.velocityX;

  }

  drawSprites();
}

//Hi!
