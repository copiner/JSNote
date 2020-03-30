/*
Reflect.getPrototypeOf(target)

 该方法是返回一个对象的原型的，也就是说内部的 [[Prototype]] 属性的值。来看如下代码：
*/
function A() {};

A.prototype.name = function() {};

const a = new A();

console.log(Reflect.getPrototypeOf(a));

console.log(Object.getPrototypeOf(a));
