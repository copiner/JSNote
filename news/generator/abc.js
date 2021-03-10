
var x = 1;

function *foo(){
    x++;
    yield;
    console.log("x: ", x)
}

function bar(){
    x++;
}

var it = foo();

console.log(it.next());
console.log(x);
console.log(bar());
console.log(x);
console.log(it.next());
