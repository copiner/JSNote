//nice
var Foo = {}

var Bar = Object.create(Foo);

var b1 = Object.create(Bar);

console.log(1, Foo.isPrototypeOf(Bar));

console.log(2, Object.getPrototypeOf(Bar)===Foo);

console.log(3, Foo.isPrototypeOf(b1));

console.log(4, Bar.isPrototypeOf(b1));

console.log(5, Object.getPrototypeOf(b1)===Bar);

console.log(6, Object.getPrototypeOf(b1)===Foo);
