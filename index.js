"use strict";


const object = {
  _name:'qwe',
  get name(){
    return this._name;
  },
  set name(name){
    if(typeof name !== 'string'){
      throw new TypeError('Property must be string!');
    }
    this._name = name;
  }
}