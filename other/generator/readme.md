### Generators

Generator functions are a special kind of iterator that can be declared using the function* generator () {} syntax

Generator functions use yield to emit an element sequence

Generator functions can also use yield* to delegate to another generator function – or any iterable object

Generator functions return a generator object that’s adheres to both the iterable and iterator protocols

Given g = generator(), g adheres to the iterable protocol because g[Symbol.iterator] is a method

Given g = generator(), g adheres to the iterator protocol because g.next is a method

The iterator for a generator object g is the generator itself: g[Symbol.iterator]() === g

Pull values using Array.from(g), [...g], for (let item of g), or just calling g.next()


Generator function execution is suspended, remembering the last position, in four different cases
1. A yield expression returning the next value in the sequence
2. A return statement returning the last value in the sequence
3. A throw statement halts execution in the generator entirely
4. Reaching the end of the generator function signals { done: true }

Once the g sequence has ended, g.next() simply returns { done: true } and has no effect

It’s easy to make asynchronous flows feel synchronous

1. Take user-provided generator function
2. User code is suspended while asynchronous operations take place
3. Call g.next(), unsuspending execution in user code
