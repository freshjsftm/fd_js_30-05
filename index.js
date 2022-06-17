"use strict";
//инкапсуляция
//наследование - +
//полиморфизм

class Squirrel {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  jump() {
    return `${this.name} is jumping.`;
  }
  static isSquirrel(obj){
   return obj instanceof Squirrel;
  }
}

class FlySquirrel extends Squirrel {
  constructor(name, color, maxDistanse) {
    super(name, color);
    this.maxDistanse = maxDistanse;
  }
  get maxDistanse() {
    return this._maxDistanse;
  }
  set maxDistanse(value) {
    if (value > 90 || value < 70) {
      throw new RangeError("error");
    }
    this._maxDistanse = value;
  }
  fly(dist) {
    return `${this.name} is ${dist>this._maxDistanse? 'not' : ''} flying at ${dist}.`;
  }
}

class MagicFlySquirrel extends FlySquirrel{
  constructor(name, color, maxDistanse, songs) {
    super(name, color, maxDistanse);
    this.songs = songs;
  }
  songSing(){
    this.songs.forEach((song)=>{console.log(`${this.name} is singing ${song}`)})
  }
  friendly(obj){
    if(Squirrel.isSquirrel(obj)===false){
      throw new TypeError('must be Squirrel')
    }
    return 'we are friend!';
  }
};

const magic = new MagicFlySquirrel('belka','red', 80, ['song 1','song 2','song 3']);
magic.songSing();
