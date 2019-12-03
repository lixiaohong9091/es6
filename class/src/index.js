// 原始对象

var dog = {
  name:'',
  age:'',
}

var dog1 = {
  
}

dog1.name = 'xiaobai';
dog1.age = 3;

var dog2 = {

}

dog2.name = 'xiaohei';
dog2.age = 5;

console.log(dog1)

// 原始模式的改进

function dogf(name,age){
   return {
     name:name,
     age: age
   }
}

dog3 = dogf('xiaohuang',6);
console.log(dog3);

// 构造函数

function dogfn(name,age){
  this.name =name;
  this.age = age;
  this.eat = function  (){
    console.log('eating')
  }
}

dogfn.prototype.say = function say() {
  console.log('saying')
}

dog4 = new dogfn('xiaolan',7);
dog5 = new dogfn('xiaolan',8);
console.log(dog4)

console.log (dog4.constructor == dogfn);

dog4 instanceof dogfn == true;

console.log(dog4.constructor == dog5.constructor)
// 问题

console.log(dog4.eat==dog5.eat)
console.log(dog4.say==dog5.say)

function MathHandle(x,y) {
  this.x = x;
  this.y = y;
}

MathHandle.prototype.add = function(){
  return this.x+this.y
}

var  m = new MathHandle(2,3);

console.log(m.add());

class MathHandle2{
  constructor(x,y){
      this.x = x,
      this.y = y
  }

  add (){
    return this.x+this.y
  }
}

const v = new MathHandle2(3,4);

console.log(v.add())