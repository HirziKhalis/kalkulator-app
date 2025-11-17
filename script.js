const calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearSign = document.querySelector(".all-clear");

let previousNumber = "";
let calculationOperator = "";
let currentNumber = "0";

//Menampilkan angka di layar
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputOperator = (operator) => {
  previousNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

const clearAll = () => {
  previousNumber = "";
  calculationOperator = "";
  currentNumber = "";
};

//Menyimpan angka
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number; // replace starting "0"
  } else {
    currentNumber += number; // append normally
  }
};

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(previousNumber + event.target.value);
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (event) => {
    console.log(event.target.value);
  });
}

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

//
clearSign.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";

  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);

  switch (calculationOperator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  calculationOperator = "";
};
