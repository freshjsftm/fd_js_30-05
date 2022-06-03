const userInputNumber = 12;//prompt("Enter number", "85");
const userNumber = Number(userInputNumber);

if (userInputNumber === "" || userInputNumber === null || isNaN(userNumber)) {
  console.log("error");
} else {
  if (userNumber % 7 === 0) {
    console.log("multiple 7");
  } else if (userNumber % 5 === 0) {
    console.log("multiple 5");
  } else if (userNumber % 3 === 0) {
    console.log("multiple 3");
  } else if (userNumber % 2 === 0) {
    console.log("multiple 2");
  }else{
    console.log("multiple 1");
  }
}
