
function step(gen){
    var it = gen();

    var last;

    return function(){
        last = it.next(last).value;
        console.log('last', last);
    };
}

var a = 1;
var b = 2;

function *foo(){
    a++;
    yield;
    b = b*a;
    a = (yield b) + 3;
}

function *bar(){
    b--;
    yield;
    a = (yield 8) + b;
    b = a * (yield 2);
}


a = 1;
b = 2;

var s1 = step(foo);
var s2 = step(bar);
s1();
console.log(1, a, b);
s1();
console.log(2, a, b);
s1();
console.log(3, a, b);


//a ==7 b==4
s2();
console.log(4, a, b);
s2();
console.log(5, a, b);
s2();
console.log(6, a, b);
s2();
console.log(7, a, b);
