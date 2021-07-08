const possibleMoves = function(position, board) {
  const x = position[0];
  const y = position[1];

  const list = [];
  list[0] = [x - 1, y]; // move left
  list[1] = [x, y - 1]; // move up
  list[2] = [x + 1, y]; // move right
  list[3] = [x, y + 1]; // move down

  return list;
}


const legalMoves = function(hunt, moves, board) {
  const nCols = board.length;
  const nRows = board[0].length;

  const movesOnBoard = moves.filter(el => {
    return el[0] >= 0 && el[0] < nCols && el[1] >= 0 && el[1] < nRows;
  })
  
  const legalMovesOnBoard = movesOnBoard.filter(el => {
    return board[el[0]][el[1]] === 0 || board[el[0]][el[1]] === hunt;
  })

  return legalMovesOnBoard;
}


const distance = function(position1, position2) {
  const xDist = position1[0] - position2[0];
  const yDist = position1[1] - position2[1];

  return Math.sqrt(xDist*xDist + yDist*yDist);
}


const shortestMove = function(hunt, legalMoves, positionToCompare, board) {
  const nextTheRabbit = legalMoves.some(el => board[el[0]][el[1]] === hunt);

  if(nextTheRabbit) {
    return legalMoves.find(el => board[el[0]][el[1]] === hunt);
  }

  const distances = legalMoves.map(el => {
    return el = distance(el, positionToCompare);
  })

  let ind = 0;
  const shortestDist = distances.reduce((acc, el, index) => {
    if(acc <= el) {
      return acc;
    }
    ind = index;
    return el;
  })
  
  return legalMoves[ind];
}


const nextMove = function(id, hunt, position, positionToCompare, board) {
  const allPossibleMoves = possibleMoves(position, board);
  const allLegalMoves = legalMoves(hunt, allPossibleMoves, board);
  const move = shortestMove(hunt, allLegalMoves, positionToCompare, board);

  if(move.length === 0) {
    return position;
  }

  board[position[0]][position[1]] = 0;
  board[move[0]][move[1]] = id;

  return move;
}