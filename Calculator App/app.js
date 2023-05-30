const firstNumberElement = document.querySelector("#firstNumber");
const secondNumberElement = document.querySelector("#secondNumber");
const operatorElement = document.querySelector("#operator");
const plusButtonElement = document.querySelector("#plus-button");
const minusButtonElement = document.querySelector("#minus-button");
const divideButtonElement = document.querySelector("#divide-button");
const multiplyButtonElement = document.querySelector("#multiply-button");
const resultButtonElement = document.querySelector("#result-button");
const clearButtonElement = document.querySelector("#clear-button");
const finalResultElement = document.querySelector("#final-result");

firstNumberElement.addEventListener("input", (event) => {});

plusButtonElement.addEventListener("click", (event) => {
  operatorElement.textContent = "+";
});

minusButtonElement.addEventListener("click", (event) => {
  operatorElement.textContent = "-";
});

multiplyButtonElement.addEventListener("click", (event) => {
  operatorElement.textContent = "*";
});

divideButtonElement.addEventListener("click", (event) => {
  operatorElement.textContent = "/";
});

clearButtonElement.addEventListener("click", (event) => {
  operatorElement.textContent = "+";
});

resultButtonElement.addEventListener("click", (event) => {
  const firstNumber = Number(firstNumberElement.value);
  const secondNumber = Number(secondNumberElement.value);
  const operatorElementContent = operatorElement.textContent;

  switch (operatorElementContent) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }
  finalResultElement.textContent = result.toString();
  console.log(result);
});
