//Call
//All functions have a call method, that allows to set the this object to the function
// functionName.call(thisObject, arg1, arg2, arg3)

let obj = { name: 'Bob' };

function hello(...fruits){
  console.log(`Hello ${this.name}`);

  for(let fruit of fruits){
    console.log(`I like ${fruit}`);
  }
}

hello.call(obj, 'apple', 'pear', 'orange');
