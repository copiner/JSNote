/*
You could also iterate the sequence by hand, calling .next(). This approach gives you the most control over the iteration, but it¡¯s also the most involved. There¡¯s a few features you can leverage here that give you even more control over the iteration
*/

function* generator () {
  yield 'p'
  console.log('o')
  yield 'n'
  console.log('y')
  yield 'f'
  console.log('o')
  yield 'o'
  console.log('!')
}
var g = generator();

while(true){
    let item = g.next();
    if(item.done){
        break;
    }
    console.log(item.value)
}

/*
Just like we learned yesterday, any items returned by an iterator will have a done property that indicates whether the sequence has reached its end, and a value indicating the current value in the sequence
*/



/*

Whenever .next() is called on a generator, there¡¯s four ¡°events¡± that will suspend execution in the generator, returning an IteratorResult to the caller of .next().

1. A yield expression returning the next value in the sequence
2. A return statement returning the last value in the sequence
3. A throw statement halts execution in the generator entirely
4. Reaching the end of the generator function signals { done: true }

Once the g generator ended iterating over a sequence, subsequent calls to g.next() will have no effect and just return { done: true }.
*/
function* generator_ () {
  yield 'only'
}
var _g = generator_()
console.log(_g.next())
// <- { done: false, value: 'only' }
console.log(_g.next())
// <- { done: true }
console.log(_g.next())
// <- { done: true }
