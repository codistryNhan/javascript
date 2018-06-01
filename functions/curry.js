function curry(func, ...oldArgs){
  return function(...newArgs){
    const allArgs = [...oldArgs, ...newArgs];
    return func(...allArgs);
  }
}

const divider = (x,y) => x/y;

const reciprocal = curry(divider, 1);
console.log(reciprocal(2));
