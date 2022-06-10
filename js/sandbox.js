/*
написать функцию конструктор Accumulator
- текущее состояние заряда
- максимальный заряд

методы:
написать функцию конструктор AccumulatorPrototype
зарядить Accumulator          + к текущему заряду
зарядиться от Accumulator     - к текущему заряду

*/

function Accumulator() {
  this.maxPower = 1000;
  this.power = 0;
}
function AccumulatorPrototype() {
  this.addPower = function (number) {
    if (this.power + number < this.maxPower) {
      this.power += number;
    }
    return this.power;
  };
  this.takePower = function (number) {
    if (this.power - number >= 0) {
      this.power -= number;
    }
    return this.power;
  };
}
Accumulator.prototype = new AccumulatorPrototype();

const battery = new Accumulator();