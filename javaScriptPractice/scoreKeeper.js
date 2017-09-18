var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var reset = document.querySelector("#reset");
var p1Count = document.querySelector("#p1Count");
var p2Count = document.querySelector("#p2Count");
var numOfGames = document.querySelector("#numOfGames")
var input = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

function resetGame() {
  p1Count.textContent = 0;
  p1Score = 0;
  p2Count.textContent = 0;
  p2Score = 0;
  gameOver = false;
  p1Count.classList.remove("winner");
  p2Count.classList.remove("winner");
}

playerOne.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    p1Count.textContent = p1Score;
      if (p1Score === winningScore) {
        gameOver = true;
        p1Count.classList.add("winner");
    }
    p1Count.textContent = p1Score;
  }
});

playerTwo.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    p2Count.textContent = p1Score;
      if (p2Score === winningScore) {
        gameOver = true;
        p2Count.classList.add("winner");
    }
    p2Count.textContent = p2Score;
  }
});


reset.addEventListener("click" , function() {
  resetGame();
});

input.addEventListener("change", function() {
  numOfGames.textContent = this.value;
  winningScore = parseInt((this.value), 10);
  resetGame();
});
