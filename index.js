function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const arr1 = [];
const amount = 2;
const min=0;
const max=10;

for(let i=0; i<amount; i++){
  arr1.push(Math.round(getRandomArbitrary(min, max)));
}
console.log(arr1);

const summa = arr1.reduce(function(accumulator, currentValue){
  return accumulator+currentValue;
},0);
console.log(summa);
const mult = arr1.reduce(function(accumulator, currentValue){
  return accumulator*currentValue;
},1);
console.log(mult);


