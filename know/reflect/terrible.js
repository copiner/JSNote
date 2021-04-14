// instanceOf  confused
function Foo(){

}

function Bar(who){

}

Bar.prototype = Object.create(Foo.prototype);

var b1 = new Bar("b1");

console.log(1, Bar.prototype instanceof Foo);

console.log(2, Object.getPrototypeOf(Bar.prototype) === Foo.prototype)

console.log(3, Foo.prototype.isPrototypeOf(Bar.prototype));


console.log(4, b1 instanceof Foo);
console.log(5, b1 instanceof Bar);

console.log(6, Object.getPrototypeOf(b1) === Bar.prototype);
console.log(7, Foo.prototype.isPrototypeOf(b1));
console.log(8, Bar.prototype.isPrototypeOf(b1));

console.log(9, Bar instanceof Foo);
