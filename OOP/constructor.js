//Constructor Function
const Dice = function(sides=6){
  this.sides = sides;
  this.roll = function(){
    return Math.floor(this.sides * Math.random() + 1);
  }
}

let redDice = new Dice; //Parenthesis is not needed if no argument is passed

console.log(redDice instanceof Dice);
console.log(redDice.sides);
console.log(redDice.roll());
