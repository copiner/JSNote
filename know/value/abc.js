
//value cpoy
var a = 2;
var b = a;
b++;

console.log(a);
console.log(b);

//reference copy

var c = [4,7,9];
var d = c;
d.push(1);

console.log(c);
console.log(d);

//------
function foo(x){
    x.push(5);
    console.log(x);

    x = [7,8,9];
    console.log(x);
}

var e = [1,3,5];

foo(e);

console.log(e);


//------

var f = [5,7,9];
var g = f.slice();
g.push(1);

console.log(f);
console.log(g);

//------
function baz(x){
    x = x+1;
    console.log(x);
}

var h = 5;
baz(h);

console.log(h);
