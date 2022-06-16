'use strict';

class UserClass{
  #fname;
  #sname;
  constructor(fname, sname, age){
    this.#fname = fname;
    this.#sname = sname;
    this.age = age; //set age(age)
  }
  get age(){return this._age;}
  set age(age){
    if(typeof age !== 'number' ){
      throw new TypeError('Age must be number');
    }
    if(age<0 || age>AGE_MAX){
      throw new RangeError('Age must be 0..'+AGE_MAX);
    }
    this._age = age;
  }
  getFullName(){
    return`${this.#fname} ${this.#sname}` 
  };
  isAdult(adultAge = AGE_ADULT){
    return this._age>=adultAge;
  }
};

const userNew = new UserClass('Tom','Bon', 18);
userNew.age = 22;
console.log(userNew.age)

