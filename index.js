"use strict";
//инкапсуляция
//наследование
//полиморфизм

class Animal{
  #type;
  constructor(name, type, countOfLegs){
    this.name = name;
    this.#type = type;
    this.countOfLegs = countOfLegs;
  }
  get countOfLegs(){
    return this._countOfLegs;
  }
  set countOfLegs(value){
    if(value<0 || value>4){
      throw new RangeError('error');
    }
    this._countOfLegs = value;
  }
  eat(){
    return `${this.name} is eating.`
  }
  static isAnimal(obj){
    return obj instanceof Animal;
  }
};

const cat = new Animal('Muha', 'cat', 4);