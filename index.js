"use strict";

//const str = 'to Be or NoT To bE';

//написать, котороя приводит переданную строку
//к Jaden Case
//'To be Or Not To Be'
/*
1) разбить строку на отдельные слова - массив слов  //split
2) с каждым словом: //array.map
    - все слово привести к нижнему регистру и вернуть, //toLowerCase
      а первую букву - к верхнему                      //toUpperCase
3) массив слов склеить обратно в строку //array.join   
*/

const str = "to    Be    or NoT     To    bE";
const toJadenCase = (str, separator = " ") =>
  str
    .split(separator)
    .filter((word)=> word)
    .map((word) => word.at(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

console.log(toJadenCase(str));
