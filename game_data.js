const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//////////////

const houseImg = new Image();
houseImg.src = './house.png';

const winningHouseImg = new Image();
winningHouseImg.src = './winning_house.png';

const rabbitImg = new Image();
rabbitImg.src = './rabbit.png';

const wolfImg = new Image();
wolfImg.src = './wolf.png';


///////////////////////

const BOARD_SIZE = {
  numberOfColumns: 10,
  numberOfRows: 10,
}
const { numberOfColumns: M, numberOfRows: N } = BOARD_SIZE;


const GAME_BOARD = Array(M).fill(0); //the entries corresponding to empty squares are equal to 0
GAME_BOARD.forEach((el, index, theArr) => {
  theArr[index] = Array(N).fill(0);
})


const INITIAL_NUMBERS = {
  numberOfWalls: Math.ceil(M*N*7/100),
  numberOfWolves: Math.ceil(M*N*5/100)
}
const { numberOfWalls : numberOfWalls, numberOfWolves : numberOfWolves } = INITIAL_NUMBERS;


const INITIAL_STATE = {
  isRabbit: true, // rabbit's turn in the beginning
  isDone: false,
  rabbitWins: false,
  wolfWins: false,
}
var { isRabbit : isRabbit, isDone : isDone, rabbitWins : rabbitWins, wolfWins : wolfWins } = INITIAL_STATE;


const GAME_DATA = {
  house: randomEmptyCell("house", GAME_BOARD),
  walls: randomEmptyCells("wall", numberOfWalls, GAME_BOARD),
  rabbit: randomEmptyCell("rabbit", GAME_BOARD),
  wolves: randomEmptyCells("wolf", numberOfWolves, GAME_BOARD)
}
const {house: house, walls: walls, rabbit: rabbit, wolves: wolves} = GAME_DATA;


//////////////////
const squareSide = Math.floor((canvas.height)/Math.max(M,N));