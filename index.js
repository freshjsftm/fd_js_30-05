//изменения
//доступа
//обхода

//HOF - hight order function
/**
 *
 * @param {function} howSay
 * @param {string} whatSay
 */
function saySomething(howSay, whatSay) {
  howSay(whatSay);
}
// saySomething(alert,'qwerty');
// saySomething(console.log,'123454');

const arr = [10, 20, 30, 40, 50, 60];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 4 === 0) {
//     console.log(arr[i]);
//   }
// }

arr.forEach(function (num) {
  if (num % 4 === 0) {
    console.log(num);
  }
});
