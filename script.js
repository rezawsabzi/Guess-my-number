"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMassage = function (massage) {
  document.querySelector(".message").textContent = massage;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input

  if (!guess) {
    displayMassage("⛔ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMassage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".game").style.background = "#60b347";

    document.querySelector(".number").style.width = "";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }

    // When quess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMassage("Game Over! Try again...");
      document.querySelector(".score").textContent = 0;
    }

    // When quess is too low
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMassage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".game").style.backgroundColor = " #1864ab";
});
