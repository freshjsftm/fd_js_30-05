
function sum(){
  console.log(arguments)
  let summa = 0;
  for (let index = 0; index < arguments.length; index++) {
     summa +=  arguments[index];  
  }
  return summa;
}

//sum(1,2,5,4,6);

