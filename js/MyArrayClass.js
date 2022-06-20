"use strict";
class MyArrayIterator{
  constructor(myArray){
    this.collection = myArray;
    this.currentPosition = 0;
  }
  next(){
    return {
      value:this.collection[this.currentPosition++],
      done:this.currentPosition>this.collection.length,
    }
  }
};
class MyArrayClass {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  push(element) {
    this[this.length] = element;
    return ++this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastElement = this[--this.length];
    delete this[this.length];
    return lastElement;
  }
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  //написать метод every
  every(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  }
  //написать метод some
  some(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  filter(callback) {
    const newMyArr = new MyArrayClass(); //create instanse MyArray
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newMyArr.push(this[i]);
      }
    }
    return newMyArr;
  }
  concat(instanceMyArray) {
    if (MyArrayClass.isMyArrayClass(instanceMyArray) === false) {
      throw new TypeError("need instance MyArrayClass");
    }
    const newMyArr = new MyArrayClass();
    for (let i = 0; i < this.length; i++) {
      newMyArr.push(this[i]);
    }
    for (let i = 0; i < instanceMyArray.length; i++) {
      newMyArr.push(instanceMyArray[i]);
    }
    return newMyArr;
  }
  flat(depth = 1) {
    let newMyArr = new MyArrayClass();
    this.forEach((elem) => {
      if (MyArrayClass.isMyArrayClass(elem) && depth) {
        newMyArr = newMyArr.concat(elem.flat(depth - 1));
      } else if (elem !== undefined) {
        newMyArr.push(elem);
      }
    });
    return newMyArr;
  }

  static isMyArrayClass(obj) {
    return obj instanceof MyArrayClass;
  }

  [Symbol.iterator]() {
    return new MyArrayIterator(this);
  }
}

const myArr1 = new MyArrayClass(2, 5, 8, 9, 4);
const myArr2 = new MyArrayClass(4,5,6);
const myArr3 = new MyArrayClass(8,5,2,1,4,5,6,8,8);

console.log(...myArr1);
for (const elem of myArr1) {
  console.log(elem);
}
console.log(...myArr2);
console.log(...myArr3);