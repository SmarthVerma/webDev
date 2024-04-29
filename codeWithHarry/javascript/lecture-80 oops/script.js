/*
let animal={
    eats: true
}


let rabbit={
    jumps: true
}

rabbit.__proto__= animal; //sets rabbit.[[prototype]]=animal
*/

/*  //BASICS

class Animal{
    constructor(){
        console.log(`Object is created`)
    }

    eats(){
        console.log("Mai khaa raha hun")
    }
    sitting(){
        console.log("Mai beth raha hun")
    }
}

let a= new Animal;

console.log(a);
console.log(a.eats());
console.log(a.sitting());

*/

class Animal {
  constructor(animal_name) {
      console.log(`Object ${animal_name} is created`);
      this.animal_name = animal_name;
  }

  eats() {
    console.log(`Mai ${this.animal_name} khaa raha hun`);
  }
  sitting() {
    console.log(`Mai ${this.animal_name} beth raha hun`);
  }
}

class Alien extends Animal {
  constructor(name) {
    super(name);
  }
  eats() {
    super.eats();
    console.log(`Mai ${this.name} khaa raha hun aur roar bhi krunga`);
  }
}

let a = new Animal("smarth");
let c = new Alien(`shivu`);

// a instanceof Animak