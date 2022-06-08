
//создать 3 переменных: две для чисел и одну для знака
//используя эти переменные составить пример и 
//вывести его в консоль с ответом

const number1 = 2;
const number2 = 5;
const sign = '+';
const sum = function(n1, n2){return n1+n2;}
//const strResult = number1+' '+sign+' '+number2+' = '+ sum(number1,number2);

const strResult = `${number1} ${sign} ${number2} = ${sum(number1,number2)}`;
console.log(strResult);


/*
функция принимает относительный путь 
style.css |  images/pic.png  |  index.html
и возвращает валидный url

https://127.0.0.1:5500/index.html

*/
const getValidURL = function(path='index.html'){
  return `${PROTOCOL}${LOCAL_SERVER_IP}:${LOCAL_SERVER_PORT}/${path}`;
}
//console.log(getValidURL());


const user = {
  name: 'Tom',
  age: 12,
  futureAgeInfo: function(n){
    return `In ${n} years ${this.name} will be ${this.age+n} years old.`;
  },
}
console.log(user.futureAgeInfo(25))
//добавить метод, который будет принимать число n и возвращать строку
//user.method(5) // In 5 years Tom will be 17 years old.
