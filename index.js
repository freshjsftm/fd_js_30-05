/**
 * 
 * @param {any} value1 
 * @param {any} value2 
 * @returns {any | null}
 */
const returnMaxOfTwo = function(value1, value2){
  if(typeof value1 === typeof value2){
    if(value1>value2){
      return value1;
    }
    return value2;
  }
  return null;
}

console.log(returnMaxOfTwo(true, 5));
console.log(returnMaxOfTwo(45, 5));
console.log(returnMaxOfTwo('45', 5));




const compareTypeOfValue = function (value1, value2) {
  if( typeof value1 === typeof value2) {
      return compareTwoValue(value1, value2);
  }
  return null;
}
const compareTwoValue = function (value1, value2) {
  if(value1 > value2) {
      return value1;
  } 
  return value2;
}

console.log(compareTypeOfValue('h', 'w'));
console.log(compareTypeOfValue(15, 'w'));



/*
const isEven = function (value) {
   if(value%2===1) {
       return false;
   }
   return true;
}

console.log(isEven(4));
console.log(isEven(3));
*/

/*
const takeANumber = function (number) {
  if (number % 2 === 0) {
    return true
  }
  return false
}
console.log(takeANumber(10));
*/


/*
const isNumberEven = function(number){
  if(number % 2 === 0){
    return true
  }
  return false;
}

const result = isNumberEven(5);
console.log(result);
*/


