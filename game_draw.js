const drawImg = function(position, img, sideLength) {
  context.drawImage(img, position[0]*sideLength+1, position[1]*sideLength+1, sideLength-2, sideLength-2);
}


const drawBoard = function(board, sideLength) {
  const nCols = board.length;
  const nRows = board[0].length;

  //color the background
  context.fillStyle = 'white';
  context.fillRect(0, 0, nCols*sideLength, nRows*sideLength);


  //draw the lines
  context.strokeStyle = 'DarkGreen';
  context.lineWidth = '1';

  for(let i=0; i<=nRows; i++) { //draw the rows
    context.beginPath();
    context.moveTo(0, sideLength*i);
    context.lineTo(sideLength*nCols, sideLength*i);
    context.stroke();
  }

  for(let j=0; j<=nCols; j++) { //draw the columns
    context.beginPath();
    context.moveTo(sideLength*j, 0);
    context.lineTo(sideLength*j, sideLength*nRows);
    context.stroke();
  }
}  


const drawWalls = function(positions, sideLength) {
  context.fillStyle = 'SeaGreen';

  positions.forEach(el => {
    context.fillRect(el[0]*sideLength+1, el[1]*sideLength+1, sideLength-2, sideLength-2);
  })
}