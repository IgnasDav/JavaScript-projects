"use strict";
"use strict";

const btnSum = document.querySelector(".calculator__sum");
const btnSub = document.querySelector(".calculator__sub");
const btnDiv = document.querySelector(".calculator__div");
const btnMul = document.querySelector(".calculator__mul");
const btnMod = document.querySelector(".calculator__mod");
const input1 = document.querySelector(".calculator__input--1");
const input2 = document.querySelector(".calculator__input--2");
const calculatorSum = document.querySelector(".calculator__score");
const calcSign = document.querySelector(".calculator__sign");
const btnClear = document.querySelector(".calculator__clear");
const btn = document.querySelectorAll(".btn");

const calculate = function (btnName) {
  switch (btnName.target.textContent) {
    case "+":
      calculatorSum.textContent = Number(input1.value) + Number(input2.value);
      calcSign.textContent = "+";
      break;
    case "-":
      calculatorSum.textContent = Number(input1.value) - Number(input2.value);
      calcSign.textContent = "-";
      break;
    case "/":
      calculatorSum.textContent = Number(input1.value) / Number(input2.value);
      calcSign.textContent = "/";
      break;
    case "*":
      calculatorSum.textContent = Number(input1.value) * Number(input2.value);
      calcSign.textContent = "*";
      break;
    case "%":
      calculatorSum.textContent = Number(input1.value) % Number(input2.value);
      calcSign.textContent = "%";
      break;
    default:
      calculatorSum.textContent = "Wrong Number Input";
  }
};
function init() {
  input1.value = 0;
  input2.value = 0;
  input1.textContent = "";
  input2.textContent = "";
  calculatorSum.textContent = 0;
  calcSign.textContent = "";
}
init();

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", calculate);
}
btnClear.addEventListener("click", init);
