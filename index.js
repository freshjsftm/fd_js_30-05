//накопить сумму первых 10 чисел
/*
0 = 0+1
1 = 1+2
3 = 3+3
6 = 6+4

1+2+3+4+5 = 15
*/
const getSum = function (limit = 10) {
  let summa = 0;
  for (let i = 0; i <= limit; i++) {
    summa += i;
  }
  return summa;
};

//5 ! = 1 * 2 * 3 * 4 * 5 = 120

const getFactorial = function(limit = 5){
  let factorial = 1n;
  for(let i=1; i<=limit; i++){
    factorial *= BigInt(i);
  }
  return factorial;
}


//2^5 = 1*   2*2*2*2*2 = 32
//написать функцию, которая возвращает положительную степень числа
const getPower = function(base=2, pow=5){
  let res = 1;
  for(let i=0;i<pow;i++){
    res *= base;
  }
  return res;
}
