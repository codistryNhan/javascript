//Using Getter and Setters allows for fine tuning our classes.
class Dice {
  constructor(sides=6) {
    Object.defineProperty(this, 'sides', {
      get() {
        return `This dice has ${sides} sides`;
      },
      set(value) {
        if(value > 0) {
          sides = value;
          return sides;
        } else {
          throw new Error('The number of sides must be positive');
        }
      }
    });

    this.roll = function() {
      return Math.floor(sides * Math.random() + 1);
    }
  }
}

let dice = new Dice;

console.log(dice.sides);
console.log(dice.sides = 10);
console.log(dice.sides);
console.log(dice.roll());
