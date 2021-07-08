const rabbitMove = function(id, block, position, index, sign, board) {
  const nCols = board.length;
  const nRows = board[0].length;
  const size = [nCols, nRows];

  const position2 = [position[0], position[1]];
  position2[index] += sign;

  if(position2[index] < 0) {
    position2[index] += size[index];
  }

  if(position2[index] >= size[index]) {
    position2[index] = 0;
  }

  if(board[position2[0]][position2[1]] !== block) {
    board[position[0]][position[1]] = 0;
    board[position2[0]][position2[1]] = id;

    position[0] = position2[0];
    position[1] = position2[1];

    isRabbit = false;
  }
}