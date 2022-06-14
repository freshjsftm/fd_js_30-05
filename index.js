"use strict";

/*
4! = 4*3*2*1 = 4 * 3!
3! = 3*2*1 = 3 * 2!
2! = 2*1 = 2 * 1!
1! = 1                //base
0! = 1                //base
*/

const factorial = (num=4) =>{
  if(num<0){
    return null;
  }
  if(num===1 || num===0){
    return 1n;
  }
  return BigInt(num) * factorial(num-1);
}
console.log(factorial(3))


/*
2^4 = 2*2*2*2 = 2*2^3
2^3 = 2*2*2   = 2*2^2
2^2 = 2*2     = 2*2^1
2^1 = 2*2^0
2^0 = 1
*/
// const power = (num, pow) =>{
//   if(pow===0){
//     return 1;
//   }
//   return num *power(num, pow-1);
// }
// console.log(power(3, 2)) //9

const power = (num, pow) =>{ 
  if(pow<0){ 
    return power(num,pow+1)/num ; 
    //return 1/num * power(num,pow+1) ; 
  } 
  if( pow===0){ 
    return 1; 
  }; 
  if( pow>0){ 
  return power(num,pow-1)*num 
}; 
} 
console.log(power(2222,22222))
