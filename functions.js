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

//Immediately Invoked Function Expressions
//Self-Invoked functions to reduce global name space
(function(){
  let string = "Hello World";
  console.log(string);
})();

//Arguments Length


