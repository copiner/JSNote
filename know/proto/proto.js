
function Foo(){

}

var a = new Foo();

console.log(Object.getPrototypeOf(a) === Foo.prototype)

console.log(Foo.prototype.constructor === Foo);

//a---1--->Foo.prototype.constructor---2--->Foo
console.log(a.constructor === Foo);
