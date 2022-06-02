/**
 * function get perimeter
 * @param {number} sideSquare
 * @returns false | number
 */
const getPerimeterSquare = function (sideSquare = 0) {
  if (sideSquare <= 0) {
    return false;
  }
  return 4 * sideSquare;
};

//debugger
const side = 5;
// console.log(getPerimeterSquare(side));
// console.log(getPerimeterSquare("5"));
// console.log(getPerimeterSquare(-5));
// console.log(getPerimeterSquare());

/**
 * function check age on adult
 * @param {number} value
 * @returns {boolean}
 */
const isAdult = function (age, AGE_ADULT = 18) {
  return age >= AGE_ADULT;
};
console.log(isAdult(23));

/**
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {boolean}
 */
const determineMultiplicity = function (value1, value2) {
  return value1 % value2 === 0;
};
console.log(determineMultiplicity(23, 23));

/**
 *
 * @param {number}
 * @returns {boolean}
 */
const multiplicityOfNumbers = function (number) {
  return number > 20 && number % 7 === 0;
};
console.log(multiplicityOfNumbers(21));

/**
 *
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @returns boolean
 */
const determineSideLength = function (side1, side2, side3) {
  return (
    side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2
  );
};

console.log(determineSideLength(10, 10, 10));
console.log(determineSideLength(3, 4, 5));
console.log(determineSideLength(1, 1, 8));

const getResultNumbers = function (num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return num1 + num2;
  }
  if (num1 % 2 === 1 && num2 % 2 === 1) {
    return num1 * num2;
  }
  if (num1 % 2 === 1) {
    return num1;
  }
  return num2;
};


