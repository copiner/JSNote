/*
Reflect.setPrototypeOf(target, prototype)

该方法的作用是设置一个对象的原型。如果设置成功的话，这个对象就返回一个true，如果设置失败的话，这个对象就返回一个false。
*/

//1
const obj = {};

console.log(Reflect.getPrototypeOf(obj))

const test1 = Reflect.setPrototypeOf(obj, Object.prototype);
console.log(test1); // true

console.log(Reflect.getPrototypeOf(obj))

let test2 = Reflect.setPrototypeOf(obj, null);
console.log(test2); // false

//2
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Reflect.getPrototypeOf(object1) === prototype1);


//3
/*
Object.create(null) 创建的对象是一个空对象，在该对象上没有继承 Object.prototype 原型链上的属性或者方法,
例如：toString(), hasOwnProperty()等方法
*/
const object2 = Object.create(null);

console.log(object2);

Reflect.setPrototypeOf(object2, prototype1);

console.log(Reflect.getPrototypeOf(object2) === prototype1);
