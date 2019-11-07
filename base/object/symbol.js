
var a = {};
var name = Symbol();
a.name = 'lili';
a.age = '11';
a[name] = 'lucy';
console.log(a.name,a[name]);             //lili,lucy

/*
for...in   for...of
Object.keys()
Object.getOwnPropertyNames()
*/

Object.getOwnPropertySymbols()

/*
Symbol()  Symbol.keyFor()
*/

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

s1 === s2 //true

var s3 = Symbol.for('foo');
Symbol.keyFor(s3);//'foo'

var s4 = Symbol('foo');
Symbol.keyFor(s4)//undefined
