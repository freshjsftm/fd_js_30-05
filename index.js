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

//const prof = user.profession;
const {profession} = user;

//const sname = user.privateInfo.sname;
const {privateInfo:{sname, fname}} = user;

// const dayBDay = user.privateInfo.bday.day;
// const monthBDay = user.privateInfo.bday.month;

const {privateInfo:{bday:{day:dayBDay,month:monthBDay}}} = user;
const {date:{day:dayDate,month:monthDate}} = user;