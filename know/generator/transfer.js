
function *foo(){
    console.log("*foo() starting");
    yield 3;
    yield 4;
    console.log("*foo() finished");
}

function *bar(){
    yield 1;
    yield 2;
    yield *foo();
    yield 5;
}

var it = bar();

console.log(it.next().value);
console.log(it.next().value);

console.log(it.next().value);

console.log(it.next().value);
console.log(it.next().value);

console.log(it.next().value);
