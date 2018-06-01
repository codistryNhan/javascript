//How to keep your variables private
class Dog {
  constructor(name, age){
    this.name = name;
    let _age = age;
    this.getAge = () => _age;
    this.setAge = age => _age = age;
  }
}

let corgi = new Dog('bob', 5);
console.log(corgi.getAge());
