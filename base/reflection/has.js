/*
Reflect.has(target,name)

该方法的含义是：检查一个对象上是否含有特定的属性。相当于es5中的in操作符。
target: 目标对象，
name：目标对象上的属性。
*/

const obj = {
  name: 'copiner',
  age: 29
};

console.log(Reflect.has(obj, 'name')); // true
console.log(Reflect.has(obj, 'username')); // 该对象上没有 username属性  返回false
console.log(Reflect.has(obj, 'age')); // true

// 函数的实列

function Obj(name) {
  this.name = name;
}

Obj.prototype.getName = function() {
  return this.name;
}

const test = new Obj();

// 使用in操作符测试
console.log('name' in test); // true
console.log('getName' in test); // true

// 使用Reflect.has 测试
console.log(Reflect.has(test, 'name')); // true
console.log(Reflect.has(test, 'getName')); // true
