"use strict";



//написать функцию, которая принимает строку 
//и возвращает количество гласных в этой строке. 
//регистр не учитывать
// aeiouy

//перевести строку к нижнему регистру
//разобрать строку на буквы
//перебирать буквы и если буква гласная - увеличивать счетчик

const str = 'Elon Musk';
const countSomeLetters = (str, arr = ['a','e','i','o','u','y']) => {
  return [...str.toLowerCase()]
    .filter((elem)=>arr.includes(elem))
    .length;
}
console.log(countSomeLetters(str))



// 'First Lastname' => 'Lastname F.'