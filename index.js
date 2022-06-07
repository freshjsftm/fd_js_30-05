
function Cat(name, isMale, color, breed, age){  
  this.name = name;
  this.isMale = isMale;
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.say = function(){
    return 'mew';
  }
  this.run = function(){
    return this.name + ' ' + 'run';
  }
}

const cat1 = new Cat('Muha', false, 'grey', 'yard', 2);
console.log(cat1);
cat1.name = 'Puha';
console.log(cat1.run());

const cat2 = new Cat('Barsik', true, 'grey', 'yard', 2);




function User(fname='Anonim', sname='Anonim', age=22){
  this.fname = fname;
  this.sname = sname;
  this.age = age;
  this.fullName = function(){
    return this.fname + ' ' + this.sname;
  }
}

const user1 = new User();
console.log(user1.fullName());
user1.fname = 'Elon';
user1.sname = 'Musk';
console.log(user1.fullName());




/*
Country
-name
-population
-area

-getDensity()
*/

function Country(name,population,area){
  this.name = name;
  this.population = population;
  this.area= area;
  this.getDensity = function(){
    return this.population / this.area
  }
}


  const country1 = new Country('New Guinea',9500000,786000)
  console.log(country1.getDensity())
  country1.population += 100000;
  console.log(country1.getDensity())