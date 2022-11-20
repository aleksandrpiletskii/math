const heading = document.querySelector(".heading");
const input = document.querySelector(".input");
const button = document.querySelector(".button");

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstNumber = randomIntFromInterval(1, 9);
let secondNumber = randomIntFromInterval(1, 9);
heading.textContent = `${firstNumber} * ${secondNumber}`;

button.addEventListener("click", function (e) {
  if (Number(input.value) === firstNumber * secondNumber) {
    alert("Верно, но ты все равно тупой)");
    firstNumber = randomIntFromInterval(1, 9);
    secondNumber = randomIntFromInterval(1, 9);
    heading.textContent = `${firstNumber} * ${secondNumber}`;
  } else {
    alert("Ну ты тупой");
  }
  input.value = '';
});
