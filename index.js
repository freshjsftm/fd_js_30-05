"use strict";

const dictionary = new Map();
dictionary.set('мир','peace');
dictionary.set('небо','sky');
dictionary.set('людина','man');
dictionary.set('море','sea');
dictionary.set('поїхати','go');
dictionary.set('на','on');
dictionary.set('як','as');
dictionary.set('група','group');
dictionary.set('навчання','teaching');
dictionary.set('мова','language');
dictionary.set('програмування','programming');
dictionary.set('займатися','engage in');

for (const iterator of dictionary) {
  console.log(iterator)
}
console.log(dictionary.entries())

const mySet = new Set();//мир, небо
console.log(mySet);
// mySet.add(1);
// mySet.add(4);
// mySet.add('4');
// mySet.add([4]);
// mySet.add({4:4});

//console.log(mySet);

const numbers1 = [1,2,3];
const numbers2 = [2,3,2,5,4,2,5,2,2];

//из двух массивов создать третий с уникальными значениями

const numbersUnique =[...new Set([...numbers1,...numbers2])]

