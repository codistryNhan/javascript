let Triangle = function(){
  this.name = "Triangle";
}

Triangle.prototype.getName = function(){
  consoel.log(this.name);
}

let tri1 = new Triangle();

console.log(Triangle.prototype);
