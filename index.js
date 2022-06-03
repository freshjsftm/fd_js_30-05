function isAdult(age, AGE_ADULT = 18) {
  // if(age>=AGE_ADULT){
  //   return 'adult';
  // }
  // return 'not adult';
  return age >= AGE_ADULT ? "adult" : "not adult";
}

console.log(isAdult(2))
