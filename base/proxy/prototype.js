/*
几乎所有的 JavaScript 对象都是 Object 的实例；一个典型的对象继承了Object.prototype的属性（包括方法），
尽管这些属性可能被遮蔽（亦称为覆盖）。但是有时候可能故意创建不具有典型原型链继承的对象，
比如通过Object.create(null)创建的对象，或者通过Object.setPrototypeOf方法改变原型链
*/

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);

console.log(Object.getPrototypeOf(Reflect) === Object.prototype);

let obj = new Object();

console.log(Object.getPrototypeOf(obj)=== Object.prototype); // true
