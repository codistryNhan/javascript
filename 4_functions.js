//  Functions
//
//  There are a strong relationship between objects, functions, and closures.

//  Function statement
function add(a,b){
  return a + b;
}

//  Function expression
var add = function(a,b){
  return a + b;
}

//  Named function expresisons

var factorial = function factorials(n){
  if (n <= 1)
    return 1;
  return n * factorials(n - 1);
};
