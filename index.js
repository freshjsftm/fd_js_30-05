/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {null | [number]}
 */
const solveSquareEquation = function (a = 1, b = -2, c = -3) {
  const D = b * b - 4 * a * c;
  if (D < 0) {
    return null;
  }
  // if(D===0){
  //   const x = (-b)/(2*a);
  //   return [x,x];
  // }
  const x1 = ((-b)+ D**0.5)/(2*a);
  const x2 = ((-b)- D**0.5)/(2*a);
  return [x1, x2];
};
console.log(solveSquareEquation());
console.log(solveSquareEquation(1,12,36));
console.log(solveSquareEquation(5,3,7));
