const PIN_SECRET = "1111";
const MAX_TRY = 3;
//запрашивать у пользователя пин до тех пор, пока он не совпадет с PIN_SECRET
//ограничьте кол-во вводов попытками
//выводите сколько попыток осталось после каждого ввода


//счетчик попыток
let count = MAX_TRY;
while (true) {
  const PIN = prompt("Enter PIN");
  count--;
  if (PIN === PIN_SECRET) {
    console.log("Thank you!");
    break;
  }
  if(count===0){
    break;
  }
  console.log('try again! rest: ', count);
}


