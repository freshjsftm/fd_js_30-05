const n1 = 1;
const n2 = 1;

const obj1 = {
  prop: 123,
};
const obj2 = {
  prop: 1,
};

const save = obj1;//копирование по ссылке

console.log(save.prop);
save.prop = "hi!";

const link = save;
link.prop = true;

console.log(save.prop);
console.log(obj1.prop);
