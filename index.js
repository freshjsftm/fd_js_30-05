/*
const table = {
  1:{
    '1 * 1 = ': 1,
    '1 * 2 = ': 2,
  },
  2:{
    '2 * 1 = ': 2,
    '2 * 2 = ': 4,
  }
}
*/



function createMultipleTable(){
  const table = {};
  for(let i=1; i<=10; i++){
    table[`mult${i}`] = {};
    for(let j=1; j<=10; j++){
      table[`mult${i}`][`${i} * ${j} = `] = i*j;    
    }
  }
  return table;
}

const multTable = createMultipleTable();
//console.log(multTable);


/*
+ написать функцию, которая возвращает объект семья
в начале узнаем сколько членов семьи //2
именем свойства - ключом - будет имя родственника
а значением - информация о его родственной принадлежности
информациюзапрашивать у пользователя через prompt
*/

// const family = {
//   'Elon Musk':'brother',
//   'Elen':'mother'
// }


function createFamily(){
  const family = {};
  const countMemberFamily = prompt('how much?');
  for(let i=0; i<countMemberFamily; i++){
    const name = prompt('name?');
    const role = prompt('role?');
    family[name]= role;
  }
  return family;
}

//console.log(createFamily())
