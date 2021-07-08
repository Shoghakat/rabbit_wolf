const myFunction = function() {
  location.reload();
};


const updateData = function() {
  context.clearRect(0,0,canvas.width,canvas.height);
  drawBoard(GAME_BOARD, squareSide);
  drawWalls(walls, squareSide);
  drawImg(house, houseImg, squareSide);
  drawImg(rabbit, rabbitImg, squareSide);
  checkWinner(rabbit, wolves, house);

  wolves.forEach((el, index, theArr) => {
    if(!isRabbit) {
      theArr[index] = nextMove("wolf", "rabbit", el, rabbit, GAME_BOARD);
    }
    drawImg(theArr[index], wolfImg, squareSide);
    checkWinner(rabbit, theArr[index], house);
  })

  isRabbit = true;
}; 


const loop = function() {
  if(!isDone) {
    updateData();
  } else {
    drawkWinner();
  }
    
  requestAnimationFrame(loop);
};

loop();
    
    
//////////////////

    
document.addEventListener('keydown', function(event) {
  if(isRabbit && !isDone) {
    //move left
    if(event.keyCode === 37) {
      rabbitMove("rabbit", "wall", rabbit, 0, -1, GAME_BOARD);
    }

    //move right
    if(event.keyCode === 39) {
      rabbitMove("rabbit", "wall", rabbit, 0, 1, GAME_BOARD);
    }

    //move up
    if(event.keyCode === 38) {
      rabbitMove("rabbit", "wall", rabbit, 1, -1, GAME_BOARD);
    }

    //move down
    if(event.keyCode === 40) {
      rabbitMove("rabbit", "wall", rabbit, 1, 1, GAME_BOARD);
    }
  }
}, false);


document.addEventListener('keydown', function(event) {
  if(event.keyCode === 13) {
    location.reload();
  }
}, false);