
function Foo(){

}

Foo.prototype = {

}

var a = new Foo();

console.log(1, a.constructor === Foo);
//a-->Object ---> Object.prototype.consturctor === Object
console.log(2, a.constructor === Object);

function Boo(){

}

var b = new Boo()

console.log(3, b.constructor === Boo);
console.log(4, b.constructor === Object);//4 false


Object.defineProperty(Foo.prototype,"constructor",{
    enumerable:false,
    writable:true,
    configurable:true,
    value:Foo
})

console.log(5, a.constructor === Foo);
console.log(6, a.constructor === Object);
