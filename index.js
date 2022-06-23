"use strict";

//деструктуризация - это способ создания переменной

const user = {
  id:1,
  privateInfo:{
    fname:"Elon",
    sname:"Musk",
    bday:{
      day:28,
      month:6,
      year:1971,
    },
    children:['q1','q2','q3','q4'],
  },
  contactInfo:{
    phone:{
      work:'123-12-45',
      mobile:'005-002-003',
    },
    adress:{
      town:'ZP',
      street:'12Avenu',
      house:45,
    },
    mail:'elon@gmail.com'
  },
  profession:'director',
  date:{
    day:28,
    month:6,
    year:1999,    
  }
}

const {privateInfo:{children:[,two]}} = user;

//const prof = user.profession;
const {profession, contactInfo:{mail}, ...rest} = user;

const nums = [1,2,3,4,5];
//const one = nums[0];
//const [one,,,four] = nums;
const [one,...restNums] = nums;

