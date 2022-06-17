"use strict";
//инкапсуляция
//наследование - +
//полиморфизм

class User{
  //#isBan;
  constructor(fname, sname){
    this.fname = fname;
    this.sname = sname;  
    this._isBan = false;  
  }
  getFullName(){
    return `${this.fname} ${this.sname}`;
  }
  static isUser(obj){
    return obj instanceof User;
  }
  get isBan(){
    return this._isBan;
  }
};

class Moderator extends User{
  constructor(fname, sname, permission){
    super(fname, sname);    
    this.permission = permission;
  }
};

class Admin extends Moderator{
  constructor(fname, sname, permission){
    super(fname, sname, permission);
  }
  ban(obj){
    if(User.isUser(obj)===false){
      throw new TypeError('must be user!')
    }
    obj._isBan = true;
  }
  unBan(obj){
    if(User.isUser(obj)===false){
      throw new TypeError('must be user!')
    }
    obj._isBan = false;
  }
};

class Editor extends Moderator{
  constructor(fname, sname, permission, email){
    super(fname, sname, permission);
    this.email = email;
  }
}

// const user = new User('Tom', 'Rom');
// const admin = new Admin('Elon', 'Musk', true);
// console.log(user.isBan)
// admin.ban(user);
// console.log(user.isBan)
