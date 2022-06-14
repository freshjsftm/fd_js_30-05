"use strict";

const f1 = function(num1, num2, ...restArguments){
  console.log(restArguments)
}

const f2 = (...numbers)=>{  //...rest
  console.log(numbers)
  return 12;
}

// console.dir(f1)
// console.dir(f2)

f1(1,1,1,1);
f2(2,2,2,2);

// напишите функцию стрелку, которая
// считает сумму неограниченного количества аргуметов

const sumNum = (...num) => num.reduce((acum, vol) => acum + vol );
sumNum(1,2,3,4);

const arrNumbers = [1,10,15];

console.log(...arrNumbers) //...spred
console.log(arrNumbers[0], arrNumbers[1], arrNumbers[2])

sumNum(...arrNumbers);


const arr1 = [2,5,8];
const arr2 = [12,25,38];

//const arr3 = arr1.concat(100).concat(arr2);
const arr3 = [100,...arr1,...arr2,12];
console.log(arr3);


const f = (...qwerty)=>{}

sumNum(...[1,2,3]);