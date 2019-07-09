export default class Paddle{
  constructor(game){
    this.width = 40;
    this.height = 40;
    this.gameWidth=game.gameWidth;
    this.gameHeight=game.gameHeight;

    this.maxspeed = 10;
    this.speed = {
      x: 0,
      y: 0
    };

    this.position = {
      x: game.gameWidth/2 - this.width/2,
      y: game.gameHeight - this.height - 10
    };


  }


  draw(ctx){
    ctx.fillStyle='blue'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

  }
  update(deltaTime){
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    this.topOfPaddle=this.position.y;
    this.bottomOfPaddle=this.position.y+this.height;
    this.rightOfPaddle=this.position.x+this.width;
    this.leftOfPaddle=this.position.x;

    if(this.position.x < 0){
      this.position.x=0;
      this.speed.x=0;
    }

    if(this.position.x + this.width > this.gameWidth){
      this.position.x = this.gameWidth - this.width;
      this.speed.x=0;
    }

    if(this.position.y<0){
      this.position.y=0;
      this.speed.y=0;
    }
    if(this.position.y + this.height > this.gameHeight){
      this.position.y=this.gameHeight - this.height;
      this.speed.y=0;
    }

  }
  moveLeft(){
    this.speed.x=-this.maxspeed;
  }
  moveRight(){
    this.speed.x=this.maxspeed;
  }
  moveUp(){
    this.speed.y=this.maxspeed;
  }
  moveDown(){
    this.speed.y=-this.maxspeed;
  }
  stopx(){
    this.speed.x=0;
  }
  stopy(){
    this.speed.y=0;
  }
}
