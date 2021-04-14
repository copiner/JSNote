
function foo(a = 42, b = a + 1){
    console.log(a,b);
}

foo();
foo(undefined);
foo(5);
foo(void 0, 7);
foo(null);

console.log('----------------')
function eoo(a = 42, b = a + 1){
    console.log(arguments.length, a, b, arguments[0], arguments[1]);
}

eoo();
eoo(10);
eoo(10, undefined);
eoo(10, null);

console.log('-----------');

function coo(a){
    "use strict"
    a = 42;
    console.log(arguments[0]);
}

coo(2);
coo();

