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
console.log(multTable);
