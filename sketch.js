var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(600, 400, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  rect2 = createSprite(400, 400, 50, 80);
  rect2.shapeColor = "red";
  rect2.debug = true;
  rect3 = createSprite(200, 400, 50, 80);
  rect3.shapeColor = "orange";
  rect3.debug = true;
  rect4 = createSprite(800, 400, 50, 80);
  rect4.shapeColor = "yellow";
  rect4.debug = true;
  box1 = createSprite (200,100,80,30);
  box1.shapeColor = "white";
  box1.velocityX = 0;
  box2 = createSprite (800,100,80,30);
  box2.shapeColor = "brown";
  box2.velocityX = -5;
  box3 = createSprite (200,600,80,30);
  box3.shapeColor = "pink";
  box3.velocityX = 0;
  box4 = createSprite (800,600,80,30);
  box4.shapeColor = "gray";
  box4.velocityX = -5;
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(rect1,movingRect)){
  movingRect.shapeColor="green";
}
if(isTouching(rect2,movingRect)){
  movingRect.shapeColor="red";
}
if(isTouching(rect3,movingRect)){
  movingRect.shapeColor="orange"
}
if(isTouching(rect4,movingRect)){
  movingRect.shapeColor="yellow"
}
bounceOff(box1,box2);
collide (box3,box4);
  drawSprites();
}
