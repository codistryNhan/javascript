//Randomly choose a number between two numbers
function random(a, b=1){
  //Swap if only 1 argument
  if(b === 1){
    [a,b] = [b,a];
  }

  return Math.floor(Math.random() * (b-a+1)) + a;
}
