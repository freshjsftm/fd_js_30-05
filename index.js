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

const str = 'Група студенти ранок субота поїхати 2022 займатися Програмування на Море як мир'; 

const translate = (str, separator=' ') => {
  return str.toLowerCase()
    .split(separator)
    .map((word)=> dictionary.has(word) ? dictionary.get(word) : word )
    .join(separator);
}

//console.log(translate(str))


for (const key of dictionary.keys()) {
  console.log(key)
}

console.log(...dictionary.values())

//создать массив из ключей мапы
const arrayKeys = [...dictionary.keys()]
