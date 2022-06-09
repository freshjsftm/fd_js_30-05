//object with data
function MyArray() {
  this.length = 0;
  for(let i=0; i<arguments.length; i++){
    this.push(arguments[i]);
  }
}
//object with logic
function MyArrayPrototype(){
  this.push = function (element) {
    this[this.length] = element;
    return ++this.length;
  };
  this.pop = function(){   
    if(this.length===0){
      return;
    } 
    const lastElement = this[--this.length];
    delete this[this.length];
    return lastElement;
  }
}
MyArray.prototype = new MyArrayPrototype();

const myArr = new MyArray(4,4,4,4,4);
//myArr.push(11);
console.log(myArr);
/*-------------------------*/
const arr = [1,2,3,54,5,8];
const arr2 = [];
arr.push(55);
arr2.push(55);
console.log(arr);





