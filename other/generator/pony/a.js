
/*
When you create a generator object (I¡¯ll just call them ¡°generator¡± from here on out), you¡¯ll get an iterator that uses the generator to produce its sequence. Whenever a yield expression is reached, that value is emitted by the iterator and function execution is suspended.
*/
function* generator(){
    yield 'f'
    yield 'o'
    yield 'o'
}

var g = generator();

console.log(typeof g[Symbol.iterator] === 'function');
console.log(typeof g.next === 'function');

console.log(g[Symbol.iterator]() === g);

console.log([...g]);

console.log(Array.from(g));
