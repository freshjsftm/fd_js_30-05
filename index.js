function toString(){
    return `${this.name} ${this.sname}`;
  }

const man = {
  id:1,
  name:'Elon',
  sname:'Musk',
  toString,
};

const worked = {
  role:'builder'
};

worked.__proto__ = man;

console.log(worked.toString());
