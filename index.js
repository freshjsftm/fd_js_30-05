/**
 * 
 * @param {string} fname 
 * @param {string} lname 
 * @param {number} age 
 * @param {boolean} isMale 
 * @param {string} email 
 * @param {boolean} isSubscribed 
 */
function User(fname,lname,age,isMale,email,isSubscribed=false){
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}
function UserPrototype(){
  this.fullName = function(){
    return `${this.fname} ${this.lname}`;
  }
}
User.prototype = new UserPrototype();

function createUsers(amount=1){
  const arrUsers = [];
  for(let i=0; i<amount;i++){
    const user = new User(
      `Elon${i}`,
      `Musk${i}`,
      Math.ceil(Math.random()*(60-20)+20),
      Math.random()>0.5,
      `em${i}@gmail.com`,
    );
    arrUsers.push(user);
  }
  return arrUsers;
}
const users = createUsers(20);
console.table(users);

//получить новый массив полных имен пользователей
const arrFullName = users.map(function(user){
  return user.fullName();
});
//console.table(arrFullName);

//получить новый массив пользователей,
//которые старше 40

const arrAgeMoreLimit = users.filter(function (user) {
  return user.age > AGE_LIMIT;
});
//console.table(arrAgeMoreLimit);

//обработать массив пользователей, 
//чтобы у них появилась случайная подписка
//Math.random()>0.5   forEach
users.forEach(function (user){
  user.isSubscribed = Math.random()>0.5;
})
console.table(users);

// users.forEach(element => {
//   element.isSubscribed = Math.random() > 0.5
// });


//получить массив emails пользователей до 40 лет
//женского пола с подпиской
const newArr = users
.filter(function (user) {
  return user.age > AGE_LIMIT;
})
.filter(function (user) {
  return user.isMale===false;
})
.filter(function (user) {
  return user.isSubscribed;
})
.map(function (user) {
  return user.email;
});
//console.table(newArr);

//получить массив полных имен пользователей, 
//которые мужчины младше 40 и без подписки
//посчитать их суммарный возраст

const FullNameArr = users
    .filter(function(user){
      return user.age < AGE_LIMIT;
    })
    .filter(function(user){
      return user.isMale;
    })
    .filter(function(user){
      return user.isSubscribed === false;
    })
    .map(function(user){
      return {full:user.fullName(), email:user.email}
    });

console.table(FullNameArr)

const FullNameArr2 = users
    .filter(function(user){
      return user.age < AGE_LIMIT;
    })
    .filter(function(user){
      return user.isMale;
    })
    .filter(function(user){
      return user.isSubscribed === false;
    })
    
    
const allAge = FullNameArr2.reduce(function(result, user){
  return result+user.age
},0)