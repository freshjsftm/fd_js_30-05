  
const isInputNotNumber = function(value){
  return value===null || value==='' || isNaN(Number(value)) ;
}  

const getSumTwoNumber = function(number1, number2){
  return number1+number2;
}

const logResultInput = function(){
  const userInputNum1 = prompt('Enter first number');
  const userInputNum2 = prompt('Enter second number');
  if(isInputNotNumber(userInputNum1) || isInputNotNumber(userInputNum2)){
    console.log('error')
  }else{
    console.log(getSumTwoNumber(Number(userInputNum1),Number(userInputNum2)))
  }
}

logResultInput();