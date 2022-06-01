  
const isInputNotNumber = function(value){
  return value===null || value==='' || isNaN(Number(value)) ;
}  

const getSumTwoNumber = function(number1, number2){
  if(isInputNotNumber(number1) || isInputNotNumber(number2)){
    return false;
  }
  return Number(number1)+Number(number2);
}

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

logResultInput();