/*
Reflect.construct(target,args[, newTarget])

该方法的作用和 new AAA() 创建一个实列方法作用类似，那么使用该方法，我们就可以提供一种不使用new来调用构造函数的方法，
参数含义如下：
target: 被运行的目标函数。
args: 调用构造函数传递的参数数组或伪数组。
newTarget: 也是构造函数，表示使用 Reflect.construct后生成的实列对象是谁的实列。如果没有该参数，默认生成的实列对象就和target构造函数是一样的。
*/
function A(name) {
  this.name = name;
}

A.prototype.getName = function() {
  return this.name;
}

function B(age) {
  this.age = age;
}

B.prototype.getAge = function() {
  return this.age || 31;
}

const a = Reflect.construct(A, ['aa']);
console.log(a);
console.log(a.name);
console.log(a.getName());

const b = Reflect.construct(A, ['30'], B);
console.log(b);
console.log(b.name);
console.log(b.age);
console.log(b.getAge());

console.log(b instanceof B)//true
console.log(b instanceof A)
