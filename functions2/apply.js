//Apply
//Apply is similar to call, but takes an array instead of arguments

let obj = { name: 'Bob' };
let array = ['apple', 'orange', 'pear'];

function hello(fruit1, fruit2){
  console.log(`Hello ${this.name}`);

  console.log(`I like ${fruit1} and ${fruit2}`);
}

hello.apply(obj,array);
