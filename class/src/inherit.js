// JS 继承
function Animal (){
  this.eat = function() {
    console.log('eating')
  }
}
function Dog (){
  this.bark = function() {
     console.log('barking')
  }
}

Dog.prototype = new Animal;

var wangcai = new Dog;

wangcai.eat();

// Class 继承

class AnimalC {
  constructor(name){
    this.name = name
  }

  eat() {
    console.log(`${this.name} eating`)
  }
}
let xiaobao = new AnimalC('xiaobai')
xiaobao.eat();

class DogC extends AnimalC{
  constructor(name){
    super(name);
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barking`);
  }
}

let erdou = new DogC('erdou');

erdou.eat();
erdou.bark();

