"use strict";

const checkBrackets = (str) =>{
//изначально стек пустой
  const stack = new Stack(str.length);
//перебираем символы строки
  for (const symbol of str) {
//если символ открывающая скобка - пушим в стек
    if(symbol === '('){
      stack.push(symbol);
    }
    if(stack.empty){
      return false;
    }
//если символ закрывающая скобка - пикаем стек и 
//если на врешине стека парная открывающая - 
//то удаляем ее из стека   
    if(symbol === ')' && stack.pick()==='('){
      stack.pop();
    }
  }
//если в конце стек пустой - то последовательность правильная
  return stack.empty;
} 

console.log(checkBrackets('()()'))
console.log(checkBrackets('()'))
console.log(checkBrackets(')()'))
console.log(checkBrackets('((()'))