const dice = {
  sides: 6,
  roll() {
    //Randomly picks a number from 1 - 6
    return Math.floor(this.sides * Math.random()) + 1;
  }
}

console.log('Before the roll');

const roll = new Promise( (resolve, reject) => {
  const n = dice.roll();
  console.log('Promise Pending...');
  if( n > 1 ){
    setTimeout( ()=>{resolve(n), n*200});
  } else {
    setTimeout( ()=>{reject(n)},n*200);
  }
});

roll.then( result=> console.log(`I rolled a ${result}`) )
.catch(result => console.log(`Drat! ... I rolled a ${result}`) );

console.log('after the roll');
