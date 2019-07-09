export function detectCollision(ball, gameObject){

  let bottomOfBall= ball.position.y+ball.size;
  let topOfBall= ball.position.y;
  let rightOfBall= ball.position.x+ball.size;
  let leftOfBall = ball.position.x;

  let bottomOfObject = gameObject.position.y + gameObject.height;
  let topOfObject = gameObject.position.y;
  let leftOfObject = gameObject.position.x;
  let rightOfObject = gameObject.position.x + gameObject.width;

  let bounced=false;
  //top bounce
  if(bottomOfBall > topOfObject
  && bottomOfBall < bottomOfObject
  && topOfBall < topOfObject
  && topOfBall < bottomOfObject
  && rightOfBall > leftOfObject
  && leftOfBall < rightOfObject){
    ball.speed.y=-ball.maxspeed;
    console.log("top bounce");
    bounced=true;


  }
  //bottom bounce
  if(bottomOfBall > topOfObject
  && bottomOfBall > bottomOfObject
  && topOfBall > topOfObject
  && topOfBall < bottomOfObject
  && rightOfBall > leftOfObject
  && leftOfBall < rightOfObject){
    ball.speed.y=ball.maxspeed;
    console.log("bottom bounce");
    bounced=true;

  }


  //left bounce
  if(rightOfBall>leftOfObject
  && rightOfBall<rightOfObject
  && leftOfBall<leftOfObject
  && leftOfBall<rightOfObject
  && topOfBall<bottomOfObject
  && bottomOfBall>topOfObject){
    ball.speed.x=-ball.maxspeed;
    console.log("left bounce");
    bounced=true;

  }
  //right bounce
  if(leftOfBall>leftOfObject
  && leftOfBall<rightOfObject
  && rightOfBall>leftOfObject
  && rightOfBall>rightOfObject
  && topOfBall<bottomOfObject
  && bottomOfBall>topOfObject){
    ball.speed.x=ball.maxspeed;
    console.log("right bounce");
    bounced=true;

  }

  return bounced;
}
