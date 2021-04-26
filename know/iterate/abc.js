
var arr = [5,9,4];

var it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log(it.next());

var greeting = "hello world";

var it = greeting[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

var m = new Map();
m.set("foo", 30);
m.set({cool:true}, "hello world");

var it1 = m[Symbol.iterator]();
var it2 = m.entries();

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());


console.log(it2.next());
console.log(it2.next());



