// Closures
// When a function defined inside another function, have access to any variables
// declared in the outer function's scope.
//
// A closure is formed when the inner function is returned by the outer function,
// maintaining access to any variables declared inside the enclosing function.
//
// The parent function's scope variables can also be changed even after the function is invoked.
function outer(num){
  let start = num;

  return function(innerNum=10){
    console.log(++start);
    console.log(innerNum);
  }
}

let increment = outer(1);

increment();
increment(100);
