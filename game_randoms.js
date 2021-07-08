const randomEmptyCell = function(id, board) { // returns a random entry equal to 0 and sets it to be "name"
  let i = Math.floor(Math.random() * M);
  let j = Math.floor(Math.random() * N);
  if(board[i][j] === 0) {
    board[i][j] = id;
    return [i,j];
  } 
  return randomEmptyCell(id, board);
}


const randomEmptyCells = function(id, number, board) { // returns "number" of numbers random entries equal to 0 and sets them to be "name"
  const arr = Array(number).fill(0);
  arr.forEach((el, index, theArr) => {
    theArr[index] = randomEmptyCell(id, board);
  })
  return arr;
}