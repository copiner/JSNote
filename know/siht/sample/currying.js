
function foo(a,b){
    console.log(a, b);
}

foo.apply(null, [2,3]);

var bar = foo.bind(null, 7);
bar(8);


//nul

var nul = Object.create(null);

foo.apply(nul,[4,5]);

var baz = foo.bind(nul, 6);
baz(7);
