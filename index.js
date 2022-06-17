"use strict";
//инкапсуляция +
//наследование +
//полиморфизм  +


class Figura{
  constructor(name){
    this._name = name;
  }
  getArea(){
    return null;
  }
  get name(){
    return this._name;
  }
  static isFigura(obj){
    return obj instanceof Figura;
  }
};

class Triangular extends Figura{
  constructor(side1, side2, angle){
    super('Triangular');
    this.side1 = side1;
    this.side2 = side2;
    this.angle = angle;
  }
  getArea(){
    return ((this.side1*this.side2)/2)*Math.sin(this.angle*(180/Math.PI));
  }
};

const tr = new Triangular(12,12,45);
//console.log(tr.getArea());

class Square extends Figura{
  constructor(side){
    super('Square');
    this.side = side;
  }
  getArea(){
    return this.side*this.side;
  }
}

function calcAreaFigure(figure){
  if(Figura.isFigura(figure)===false){
    throw new TypeError('must be figure')
  }
  return figure.getArea();
}

const sq = new Square(10);
console.log(sq.name, calcAreaFigure(sq));
