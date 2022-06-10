function Animal() {
  this.go = function () {
    return (this.name ? this.name : "i'm") + " go";
  };
  this.eat = function () {
    return (this.name ? this.name : "i'm") + " eat";
  };
}
function Man() {
  this.dansing = function (danse) {
    return (this.name ? this.name : "i'm") + " dansing " + danse;
  };
  this.toString = function () {
    return `${this.name} ${this.sname}`;
  };
}
Man.prototype = new Animal();


function User(name, sname) {
  this.name = name;
  this.sname = sname;
}
User.prototype = new Man();


const user1 = new User('Elon', 'Musk');
const user2 = new User('Tim', 'Lee');

