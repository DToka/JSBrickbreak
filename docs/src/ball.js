import { detectCollision } from './collisionDetection.js';

export default class Ball{
  constructor(game){
    this.image=document.getElementById("img_ball");
    this.speed = {x: 0, y: 0};
    this.maxspeed = 10;
    this.position = {x:500, y:500};
    this.size=40;
    this.gameWidth=game.gameWidth;
    this.gameHeight=game.gameHeight;
    this.game = game;
  }

  draw(ctx){

    ctx.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);

  }

  update(deltaTime){

    if(this.position.y+this.size>=this.gameHeight){
      console.log(this.game.lives);
      this.game.lives--;
    }
    //console.log(this.game.paddle.position.x);
    if(this.position.x<-10||this.position.x+this.size>this.gameWidth+10||this.position.y<-10||this.position.y+this.size>this.gameHeight+10){
      this.position.x=this.gameWidth/2;
      this.position.y=this.gameHeight/2;
    }

    this.speed.x = this.speed.x * 0.999;
    this.speed.y = this.speed.y * 0.999;
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if(this.position.x + this.size > this.gameWidth || this.position.x < 0){
      this.speed.x = -this.speed.x;
    }
    if(this.position.y + this.size > this.gameHeight || this.position.y < 0){
      this.speed.y = -this.speed.y;
    }

    let bottomOfBall= this.position.y+this.size;
    let topOfBall= this.position.y;
    let rightOfBall= this.position.x+this.size;
    let leftOfBall = this.position.x;

    detectCollision(this,this.game.paddle);

/*
    //top bounce
    if(bottomOfBall > this.game.paddle.topOfPaddle
    && bottomOfBall < this.game.paddle.bottomOfPaddle
    && topOfBall < this.game.paddle.topOfPaddle
    && topOfBall < this.game.paddle.bottomOfPaddle
    && rightOfBall > this.game.paddle.leftOfPaddle
    && leftOfBall < this.game.paddle.rightOfPaddle){
      this.speed.y=-this.maxspeed;
      console.log("top bounce");

    }
    //bottom bounce
    if(bottomOfBall > this.game.paddle.topOfPaddle
    && bottomOfBall > this.game.paddle.bottomOfPaddle
    && topOfBall > this.game.paddle.topOfPaddle
    && topOfBall < this.game.paddle.bottomOfPaddle
    && rightOfBall > this.game.paddle.leftOfPaddle
    && leftOfBall < this.game.paddle.rightOfPaddle){
      this.speed.y=this.maxspeed;
      console.log("bottom bounce");
    }


    //left bounce
    if(rightOfBall>this.game.paddle.leftOfPaddle
    && rightOfBall<this.game.paddle.rightOfPaddle
    && leftOfBall<this.game.paddle.leftOfPaddle
    && leftOfBall<this.game.paddle.rightOfPaddle
    && topOfBall<this.game.paddle.bottomOfPaddle
    && bottomOfBall>this.game.paddle.topOfPaddle){
      this.speed.x=-this.maxspeed;
      console.log("left bounce");
    }
    //right bounce
    if(leftOfBall>this.game.paddle.leftOfPaddle
    && leftOfBall<this.game.paddle.rightOfPaddle
    && rightOfBall>this.game.paddle.leftOfPaddle
    && rightOfBall>this.game.paddle.rightOfPaddle
    && topOfBall<this.game.paddle.bottomOfPaddle
    && bottomOfBall>this.game.paddle.topOfPaddle){
      this.speed.x=this.maxspeed;
      console.log("right bounce");
    }
    */

  }

  reset(){
    this.positon={x: 10, y:400};
    this.speed = {x: 5, y:5};
  }
}
