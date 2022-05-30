// console.log("word");
// console.log(123);
// console.log(1n);
// console.log(true);
// console.log(undefined);
// console.log(null);

/*
начинается только: с буквы  или _  или $
не должно быть пробелов
регистрозависимое
camelCase
отвечает на вопрос что в ней
*/


let userAge2 = 3; 
userAge2 = 5;      
const userAge3 = 12n;
userAge2 = 35; 
console.log(userAge2);
// userAge3 = 12;

{
  let userAge2 = 456;
  console.log('in block',userAge2);
}

console.log('under block',userAge2);


let userName = null;
console.log(userName);
userName = 'Elon';
console.log(userName);