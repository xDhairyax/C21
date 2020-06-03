var movingRect,fixedRect;

var ob1,ob2,ob3;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,200,50,80);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect.debug=true;
ob1=createSprite(600,300,100,70);
ob2=createSprite(500,200,70,60);
ob3=createSprite(100,300,80,100);
ob1.velocityX=-5;
ob3.velocityX=5;
}

function draw() {
  background(0);

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x);
  console.log(movingRect.y);

  
  if(isTouching(movingRect,ob2)){

  
      movingRect.shapeColor="red";
     ob2.shapeColor="red";
    }
else
{movingRect.shapeColor="green";
ob2.shapeColor="green";}

bounceOff(ob1,ob3);

  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x <object2.width/2+object1.width/2 &&
    object2.x-object1.x <object2.width/2+object1.width/2 &&
    object1.y-object2.y <object2.height/2+object1.height/2 &&
    object2.y-object1.y <object2.height/2+object1.height/2){
      return true;

}
else {
  return false;
}
}

function bounceOff(object1,object2){
  if(object1.x-object2.x <object2.width/2+object1.width/2 &&
    object2.x-object1.x <object2.width/2+object1.width/2 ){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
   if( object1.y-object2.y <object2.height/2+object1.height/2 &&
    object2.y-object1.y <object2.height/2+object1.height/2){
      object2.velocityY=object2.velocityY*(-1);
      object1.velocityY=object1.velocityY*(-1);
    }
  }