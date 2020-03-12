//Object.getOwnPropertySymbols

const symbol = Symbol();
console.log(typeof symbol);

const a = Symbol("a");

console.log(a);

let t = 'str';

const b = Symbol.for(t);

console.log(b);

console.log(Symbol.keyFor(a));

let obj = {
    name:"stt"
}

console.log(Object.getOwnPropertySymbols(obj));
