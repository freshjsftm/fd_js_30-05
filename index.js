// const userChoose = "1"; //prompt("Enter number language:\n1-ua\n2-en\n3-fr\n4-pl");
// //debugger
// switch (userChoose) {
//   case "1":
//   case "ua":
//     console.log("привіт");
//     break;
//   case "2":
//   case "en":
//     console.log("hello");
//     break;
//   case "3":
//   case "fr":
//     console.log("salut");
//     break;
//   case "4":
//   case "pl":
//     console.log("cześć");
//     break;
//   default:
//     console.log("404");
//     break;
// }

// if (userChoose === "1" || userChoose === "ua") {
//   console.log("привіт");
// } else if (userChoose === "2" || userChoose === "en") {
//   console.log("hello");
// } else if (userChoose === "3" || userChoose === "fr") {
//   console.log("salut");
// } else if (userChoose === "4" || userChoose === "pl") {
//   console.log("cześć");
// } else {
//   console.log("404");
// }

/*
if (
  monthUserChoice === "1" ||
  monthUserChoice === "2" ||
  monthUserChoice === "12"
) {
  console.log("Winter!");
} else if (
  monthUserChoice === "3" ||
  monthUserChoice === "4" ||
  monthUserChoice === "5"
) {
  console.log("Spring!");
} else if (
  monthUserChoice === "6" ||
  monthUserChoice === "7" ||
  monthUserChoice === "8"
) {
  console.log("Summer!");
} else if (
  monthUserChoice === "9" ||
  monthUserChoice === "10" ||
  monthUserChoice === "11"
) {
  console.log("Fall!");
} else {
console.log("Error!");
};
*/

const userInputAge = prompt("age:");
const userAge = Number(userInputAge);
if (
  userInputAge === "" ||
  userInputAge === null ||
  isNaN(userAge) ||
  userAge < 0 ||
  userAge >= 150
) {
  console.log("error");   //[0-150)
} else if (userAge < 2) {
  console.log("baby");    //[2-150)
} else if (userAge < 6) {
  console.log("kinder");  //[6-150)
} else if (userAge < 12) {
  console.log("child");   //[12-150)
} else if (userAge < 18) {
  console.log("tinager"); //[18-150)
} else if (userAge < 65) {
  console.log("adult");   //[65-150)
} else if (userAge < 100) {
  console.log("old");     //[100-150)
} else {
  console.log("super");
}
