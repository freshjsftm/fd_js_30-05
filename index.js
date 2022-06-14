"use strict";

function test1(){
  console.log(this)
}

const test2 = function(){
  console.log(this)
}

const test3 = ()=> {
  console.log(this)  
}

test1();
test2();
test3();