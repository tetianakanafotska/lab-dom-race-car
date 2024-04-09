window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let newGame;
  startButton.addEventListener("click", function () {
    startGame();
  });

  window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight") {
      e.preventDefault();
      newGame.player.directionX = 3;
      //console.log(newGame.player.directionX);
    }
    if (e.code === "ArrowLeft") {
      e.preventDefault();
      newGame.player.directionX = -3;
      //console.log(newGame.player.directionX);
    }
    if (e.code === "ArrowUp") {
      e.preventDefault();
      newGame.player.directionY = -3;
      //console.log(newGame.player.directionY);
    }
    if (e.code === "ArrowDown") {
      e.preventDefault();
      newGame.player.directionY = 3;
      //console.log(newGame.player.directionY);
    }
  });

  function startGame() {
    console.log("start game");
    newGame = new Game();
    newGame.start();
  }
  restartButton.addEventListener("click", () => {
    location.reload();
  });
};
