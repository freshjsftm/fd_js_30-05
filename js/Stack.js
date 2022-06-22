'use strict';

class Stack{
  constructor(maxSize = 5, ...args){
    this._maxSize = maxSize;
    this._size = 0;
    for (const argument of args) {
      this.push(argument);
    }
  }
  get size(){
    return this._size;
  }
  get empty(){
    return this._size === 0;
  }
  push(argument){
    //this['_'+this._size] = argument;
    this[`_${this._size}`] = argument;
    return ++this._size;
  }
  pick(){}
  pop(){}
};

const stack1 = new Stack(5,1,2,3,4,5,6,7,8,9);
console.log(stack1);