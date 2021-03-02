
var a = 42;
var b = "42";

console.log(a===b);
console.log(a==b); //b --> 42  42 == 42 true

var c = true;

console.log(b==c);//c --> 1 b--> 42  42 == 1 false

var d = false;

console.log(b==d); //d--> 0 b--> 42 42 == 0 false

console.log('-------------');

var e = 0;

var x = undefined;
var y = null;
var z = null;

var u;//undefined
var v = false;
var w = "";


console.log(x == u);
console.log(x == y);
console.log(y == z);

console.log(z == false);
console.log(u == false);

console.log(z == w);
console.log(z == e);

console.log(u == w);
console.log(u == e);

console.log('------------------');

var o = 30;
var p = [30];

console.log(o == p);//p --> "30" --> 30 30 == 30 true;

var k = "abc";
var l = Object(k);

console.log(k == l);
console.log(k === l);

