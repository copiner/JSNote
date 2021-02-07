
function Foo(){

}

Foo.prototype.blah = {}

var a = new Foo();

console.log(a instanceof Foo);

//2--------
function isRelatedTo(o1,o2){
    function F(){

    }

    F.prototype = o2;

    return o1 instanceof F
}

var b = {};
var c = Object.create(b);

console.log(isRelatedTo(c,b));

//3
//isPrototypeOf()  b.isPrototypeOf(c)
console.log(Foo.prototype.isPrototypeOf(a));

//4
console.log(Object.getPrototypeOf(a) === Foo.prototype);
