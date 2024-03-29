import {detectCollision} from './collisionDetection.js';

export default class Brick{
  constructor(game, position){
    this.image = document.getElementById("img_brick");
    this.game =  game;
    this.position = position;
    this.width = 100;
    this.height = 24;
    this.markedForDeletion = false;
  }

  update(){
    if(detectCollision(this.game.ball, this)){
      console.log("brick hit");
      this.markedForDeletion=true;
    }

  }
  draw(ctx){
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }


}
