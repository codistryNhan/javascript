class Animal {
  constructor(name){
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed){
    super(name)
    this.breed = breed;
  }

  bark(){
    console.log('woof');
  }
}

let corgi = new Dog('Bob', 'Corgi');
console.log(corgi);
console.log(corgi.bark());
