//ES6 Classes
class Dice{
  constructor(sides=6){
    this.sides = sides;
  }

  roll(){
    return Math.floor(this.sides * Math.random() + 1);
  }
}
