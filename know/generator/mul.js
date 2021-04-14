

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
var it2 = foo();

var val1 = it1.next().value;//2 yield 2
var val2 = it2.next().value;//2 yield 2

val1 = it1.next( val2*10 ).value;//40  x == 20 z == 2
val2 = it2.next( val1*5 ).value;//600  x == 200 z == 3


it1.next(val2/2);//y == 300

it2.next(val1/4);//y == 10
