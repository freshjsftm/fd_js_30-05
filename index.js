/**
 * 
 * @param {any} value {null|string|number}
 * @returns {boolean}
 */  
const isInputNotNumber = function(value){
  return value===null || value==='' || isNaN(Number(value)) ;
}  
/**
 * 
 * @param {any} number1 {string | number} 
 * @param {any} number2 {string | number}
 * @returns {false | number}
 */
const getSumTwoNumber = function(number1=0, number2=0){
  if(isInputNotNumber(number1) || isInputNotNumber(number2)){
    return false;
  }
  return Number(number1)+Number(number2);
}
/**
 * log result summ two numer input user
 */
const logResultInput = function(){
  const userInputNum1 = prompt('Enter first number');
  const userInputNum2 = prompt('Enter second number');
  const result = getSumTwoNumber(userInputNum1,userInputNum2);
  if(result===false){
    console.log('error')
  }else{
    console.log(result)
  }
}
//debugger
logResultInput();