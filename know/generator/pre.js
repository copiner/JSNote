

var z = 1;

function *foo(){
    var x = yield 2;
    console.log('x', x);
    z++;
    console.log('z', z);
    var y = yield (x*z);
    console.log(x, y, z)
}

var it1 = foo();

var val1 = it1.next().value;//2 x == 2
console.log(1, val1);

val1 = it1.next(9).value;//18  x == 9 z == 2
console.log(2, val1);

it1.next(8);
