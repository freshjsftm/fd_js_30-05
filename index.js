const userInputStr = prompt('Enter number:', 12); //string
// const userInputNumber = Number(userInputStr);

//null  ''   NaN

if( userInputStr===null || userInputStr==='' || isNaN( Number(userInputStr) )){
  console.log('error');
}else{
  console.log('thanks for ', userInputStr)
}