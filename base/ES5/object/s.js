/*
Undefined Null Boolean String Number Object
symbol
*/
var sl = Symbol();

var a = {};
a[sl] = 'Hello!';

//or
var a = {
  [sl]: 'Hello!'
};

//or
var a = {};
Object.defineProperty(a, sl, { value: 'Hello!' });


a[sl] // "Hello!"
