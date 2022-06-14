"use strict";

const f1 = function(){
  console.log(arguments)
}

const f2 = ()=>{
  console.log(arguments)
}

console.dir(f1)
console.dir(f2)

f1(1,1,1,1);
f2(2,2,2,2);

