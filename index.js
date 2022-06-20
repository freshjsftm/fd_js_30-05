"use strict";
const mySymbol = Symbol('mark for developer');
const mySymbol2 = Symbol('123');
console.log(mySymbol);

const obj1 = {
  mySymbol:123,
  [mySymbol]:'qwerty',
}

console.log(obj1.mySymbol)
console.log(obj1["mySymbol"])
console.log(obj1[mySymbol])

delete obj1[mySymbol]