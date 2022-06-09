//object with data
function MyArray() {
  this.length = 0;
}
//object with logic
function MyArrayPrototype(){
   this.push = function (element) {
    this[this.length] = element;
    return ++this.length;
  };
}
MyArray.prototype = new MyArrayPrototype();



const myArr = new MyArray();
myArr.push(11);
console.log(myArr);
/*-------------------------*/
const arr = [];
arr.push(55);
console.log(arr);



