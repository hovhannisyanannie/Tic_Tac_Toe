const container = document.querySelectorAll(".block");
const winner = document.querySelector(".winner");
const game = document.querySelector(".tic-tac-tac");
const restartBtn = document.querySelector(".restart");
const heading = document.querySelector(".heading");
const quitBtn = document.querySelector(".btn-quit");
const audioClick = document.querySelector(".audio-click");
const audioGame = document.querySelector(".audio-game");


restartBtn.addEventListener("click", restartGame);
quitBtn.addEventListener("click", quit);


function startGame() {
  container.forEach(block => {
    block.addEventListener("click", checkWinner, {
      once: true
    });
  })
}



let player = true;
let count = 0;
function checkWinner() {
  this.innerText = player ? "X" : "0";
  audioClick.play();
  count++;

    if ((container[0].innerText != "" && container[0].innerText == container[1].innerText && container[1].innerText == container[2].innerText) ||
        (container[3].innerText != "" && container[3].innerText == container[4].innerText && container[4].innerText == container[5].innerText) ||
        (container[6].innerText != "" && container[6].innerText == container[7].innerText && container[7].innerText == container[8].innerText) ||
        (container[0].innerText != "" && container[0].innerText == container[3].innerText && container[3].innerText == container[6].innerText) ||
        (container[1].innerText != "" && container[1].innerText == container[4].innerText && container[4].innerText == container[7].innerText) ||
        (container[2].innerText != "" && container[2].innerText == container[5].innerText && container[5].innerText == container[8].innerText) ||
        (container[0].innerText != "" && container[0].innerText == container[4].innerText && container[4].innerText == container[8].innerText) ||
        (container[2].innerText != "" && container[2].innerText == container[4].innerText && container[4].innerText == container[6].innerText)) {

    game.style.display = "flex";
    winner.innerText = player ? "X won" : "0 won";
    heading.style.display = "none";
    audioGame.play();
    return;
  }

  if(count == 9) {
    winner.innerText = "Nobody wins";
    game.style.display = "flex";
    heading.style.display = "none";
    return;
  }
    player = !player;
    player? heading.innerText = "X's turn":heading.innerText = "0's turn";
}


startGame()


function restartGame() {
  game.style.display = "none";
  container.forEach(block => {
    block.innerText = "";
  })
  startGame();
  player = true;
  count = 0;
  heading.style.display="block" 
  heading.innerText = "X's turn";
}

function quit() {
  window.close();
}
