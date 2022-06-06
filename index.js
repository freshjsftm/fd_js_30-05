function isAdult(age, AGE_ADULT = 18) {
  return age >= AGE_ADULT ? "adult" : "not adult";
}

const requestAnything = function () {
  return prompt("Please input anything:") ? "Thanks" : "Error";
};

const summa = function (number1, number2) {
  return number1 + number2;
};
const mult = function (number1, number2) {
  return number1 * number2;
};
const subtr = function (number1, number2) {
  return number1 - number2;
};
const div = function (number1, number2) {
  return number1 / number2;
};
const rem = function (number1, number2) {
  return number1 % number2;
};
/**
 *
 * @param {number} number1
 * @param {number} number2
 * @param {string} operator
 * @returns {number}
 */
const calculate = function (number1 = 10, number2 = 5, operator = "*") {
  let func = null;
  switch (operator) {
    case "+":
      func = summa;
      break;
    case "*":
      func = mult;
      break;
    case "-":
      func = subtr;
      break;
    case "/":
      func = div;
      break;
    case "%":
      func = rem;
      break;
  }
  if (typeof func === "function") {
    return func(number1, number2);
  }
  return null;
};

console.log(calculate());

//hight order function
const HOF = function (number1, number2, func) {
  return func(number1, number2);
};
debugger
console.log(HOF(1, 6, summa));

console.log(HOF(18, 6, div));
