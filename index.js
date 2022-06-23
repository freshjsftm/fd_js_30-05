"use strict";

const getMap = (str) => {
  const strMap = new Map();
  for (const symbol of str) {
    if(strMap.has(symbol)){
      const count = strMap.get(symbol);
      strMap.set(symbol, count+1);
      continue;
    }
    strMap.set(symbol, 1);
  }
  return strMap;
}
const compare = (str1, str2) => {
  const str1Map = getMap(str1);
  const str2Map = getMap(str2);
  if(str1Map.size !== str2Map.size){
    return false;
  }
  for (const key of str1Map.keys()) {
    if( str1Map.get(key) !== str2Map.get(key) ){
        return false;
    }
  }
  return true;
}

console.log(compare('str1', 'str2'))
console.log(compare('strsrt', 'rstrst'))
console.log(compare('love', 'evol'))
console.log(compare('qwerty', 'qwert'))
console.log(compare('mom', 'omo'))

