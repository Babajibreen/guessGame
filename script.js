"use strict";
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".start").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".number").value;

  //When there is no guess
  if (!guess) {
    displayMessage("⛔ No number selected");
    //When guess is correct
  } else if (guess == secretNumber) {
    displayMessage("😊🎉 Correct number!");
    document.querySelector(".secret").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".secret").style.width = "20%";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When guess is higher
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 Number is too high!"
          : "📉 Number is too low!"
      );
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😔 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Working on Again-Button
document.querySelector(".again").addEventListener("click", function () {
  displayMessage("Start guessing...");
  document.querySelector(".secret").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".secret").style.width = "8%";
});
