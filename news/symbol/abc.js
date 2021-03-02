
var mysym = Symbol("my own symbol");
console.log(mysym);
console.log(mysym.toString());
console.log(typeof mysym)

var a = {};
a.name = "baz";
a[mysym] = "foo";

console.log( Object.getOwnPropertySymbols(a) );

console.log(a);
