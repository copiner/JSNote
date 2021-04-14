
var mystery = Symbol();

var mywrq = Symbol("this is wrq");

console.log(typeof mywrq);

console.log(Symbol.for('this is wrq'));

console.log(Symbol.for('this is wrq') === Symbol.for('this is wrq'));

var mysym = Symbol.for('foo');
console.log(Symbol.keyFor(mysym));

/*
 they are JavaScript built-ins, and they are used to control parts of the language. They weren¡¯t exposed to user code before ES6, but now you can fiddle with them.
*/

var text = '/foo/';
var literal = /foo/
literal[Symbol.match] = false;
console.log(text.startsWith(literal));

var foo = {
    [Symbol()]:'foo',
    [Symbol('foo')]:'bar',
    [Symbol.for('bar')]:'baz',
    what:'ever'
}

//console.log([...foo]);
console.log(Object.keys(foo));
console.log(JSON.stringify(foo));

for(let key in foo){
    console.log(key);
}

console.log(Object.getOwnPropertyNames(foo));

console.log(Object.getOwnPropertySymbols(foo));

for(let symbol of Object.getOwnPropertySymbols(foo)){
    console.log(foo[symbol]);
}
