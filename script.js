"use strict";
const checkButton = document.querySelector(".check");
const secretNumber = document.querySelector(".broj");
const main = document.querySelector(".main");
const again = document.querySelector(".again");
let score = document.querySelector(".score");
const checkVal = document.querySelector(".check");
const foter = document.querySelector(".foter");
const heiScore = document.querySelector(".hei-score");
let startMes = document.querySelector(".start");
let newNumber = Math.floor(Math.random() * 20) + 1;
let bestScore = 20;
let finalScore = 0;
checkVal.addEventListener("click", function () {
  let intVal = Number(document.querySelector(".inp").value);
  console.log(intVal);
  if (!intVal) {
    startMes.textContent = "⛔  Zahl eingeben";
  } else if (intVal === newNumber) {
    secretNumber.textContent = newNumber;

    startMes.textContent = " 💥  Genaue Zahl";

    if (bestScore > finalScore) {
      finalScore = bestScore;
      heiScore.textContent = finalScore;
    }
  } else if (intVal > newNumber) {
    if (bestScore > 1) {
      bestScore--;
      startMes.textContent = "📈 Zu hoch";
      score.textContent = bestScore;
    } else {
      startMes.textContent = "🛑 Sie haben das Spiel verloren";
      score.textContent = 0;
    }
  } else if (intVal < newNumber) {
    if (bestScore > 1) {
      bestScore--;
      startMes.textContent = "📉 Zu niedrig";
      score.textContent = bestScore;
    } else {
      startMes.textContent = "🛑 You lost the game";
      score.textContent = 0;
    }
  }
});
again.addEventListener("click", function () {
  startMes.textContent = "Fangen Sie an zu raten ...";
  score.textContent = 20;
  bestScore = 20;

  newNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".inp").value = "";
  secretNumber.textContent = "?";
});
