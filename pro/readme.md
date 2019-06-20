### 所有原型对象都继承于Object.prototype，除了Object.prototype本身



理解：
function Foo () {}
let foo = new Foo();
let obj = { show: function (){}};

1 new 产生的function/object无prototype
foo.__proto__ === Foo.prototype; // true
foo.prototype; // undefined

2 所有function/object的构造函数都继承于Function.prototype
Foo.__proto__ === Function.prototype; // true 
obj.show.__proto__ === Function.prototype; // true
Object.__proto__ === Function.prototype; // true

3 所有原型对象都继承于Object.prototype，除了Object.prototype本身
Foo.prototype.__proto__ === Object.prototype; // true
obj.show.prototype.__proto__ === Object.prototype; // true
Function.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; // true