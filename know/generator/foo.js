
function *foo(x, y){
    return x * y;
}

var it = foo(6, 7);
console.log(it.next());


function *foo1(x){
    var y = x * (yield);
    return y;
}

var it1 = foo1(5);
it1.next();

console.log(it1.next(7));



function *foo2(x){
    var y = x * (yield "hi");
    return y;
}

var it2 = foo2(5);
console.log(it2.next());

console.log(it2.next(7));
