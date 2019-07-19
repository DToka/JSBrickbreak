export default class InputHandler{
  constructor(paddle, game){
    //alert(event.keyCode);

    document.addEventListener('keydown', (event) =>{
      switch(event.keyCode){
        case 37:
          //move left

          paddle.moveLeft();
          break;
        case 39:
          //move right
          paddle.moveRight();
          break;

        case 27:
          game.togglePause();
          break;

        case 32:
          game.start();
          break;
      }
    });
    document.addEventListener('keyup', (event) =>{
      //alert(event.keyCode);
      switch(event.keyCode){
        case 37:
          //move left

          paddle.stopx();


          break;
        case 39:
          //move right
          paddle.stopx();
          break;
      }
    });

    document.addEventListener('keydown', (event) =>{
      //alert(event.keyCode);
      switch(event.keyCode){
        case 40:
          //move left
          paddle.moveUp();
          break;
        case 38:
          //move right
          paddle.moveDown();
          break;
      }
    });
    document.addEventListener('keyup', (event) =>{
      //alert(event.keyCode);
      switch(event.keyCode){
        case 40:
          //move left
          paddle.stopy();
          break;
        case 38:
          //move right
          paddle.stopy();
          break;
      }
    });

  }


}
