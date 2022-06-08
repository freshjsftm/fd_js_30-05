/*
const table = {
  1:{
  '1 * 1 = ': 1,
  '1 * 2 = ': 2,
  }
}
*/

const obj = {};
//'1 * 1 = '
obj.prop = 12;
//obj.'two words'
obj['1 * 1 = '] = 1;

function createMultipleTable(){
  const table = {};
  for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
      table[`${i} * ${j} = `] = i*j;    
    }
  }
  return table;
}

const multTable = createMultipleTable();

function getValueMult(table, str){
  return table[str];
}

console.log(getValueMult(multTable, '3 * 7 = '));