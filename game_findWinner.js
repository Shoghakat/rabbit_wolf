const checkWinner = function(player, chaser, destination) {
  if(player[0] === destination[0] && player[1] === destination[1]) {
    rabbitWins = true;
    isDone = true;
    return;
  } 

  const check = chaser.some(el => player[0] === el[0] && player[1] === el[1]);

  if(check) {
    wolfWins = true;
    isDone = true;
  }
}


const drawkWinner = function() {
  if(rabbitWins) {
    context.fillStyle = "AliceBlue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.textAlign = 'center';
    context.font = "40px Vardana";
    context.fillStyle = 'DarkGreen';
    context.fillText('You won!',300,100);
    context.drawImage(winningHouseImg, 100, 150, 400, 400);
  }

  if(wolfWins) {
    context.fillStyle = "AliceBlue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.textAlign = 'center';
    context.fillStyle = 'red';
    context.font = "40px Vardana";
    context.fillText('You lost!',300,100);
    context.drawImage(wolfImg, 100, 150, 400, 400);
  }
}