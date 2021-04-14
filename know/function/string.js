
var a = new String("abc");

console.log(a.toString());

console.log(typeof a);

console.log(a instanceof String);

console.log(Object.prototype.toString.call(a));

console.log(a);

//object wrapper

var b = "etf";
var c = new String(b);
var d = Object(b);

console.log(typeof b)
console.log(typeof c)
console.log(typeof d)

console.log(c instanceof String)
console.log(d instanceof String)

console.log(Object.prototype.toString.call(c));
console.log(Object.prototype.toString.call(d));

//valueof()
console.log(c.valueOf());
console.log(d.valueOf());

var f = new String("jkl");

var g = f + "";

console.log(typeof f);
console.log(typeof g);
