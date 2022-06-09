const obj1 = {
  prop: 123,
};
const obj2 = new Object({
  prop: 1,
});
const obj3 = Object({
  prop: 1,
});

function MyObject() {
  if (!new.target) {
    return new MyObject();
  }
}

const myObj = new MyObject();
console.log(myObj);
