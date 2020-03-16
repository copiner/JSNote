### Generators

Generator functions are a special kind of iterator that can be declared using the function* generator () {} syntax

Generator functions use yield to emit an element sequence

Generator functions can also use yield* to delegate to another generator function – or any iterable object

Generator functions return a generator object that’s adheres to both the iterable and iterator protocols

Given g = generator(), g adheres to the iterable protocol because g[Symbol.iterator] is a method

Given g = generator(), g adheres to the iterator protocol because g.next is a method

The iterator for a generator object g is the generator itself: g[Symbol.iterator]() === g

Pull values using Array.from(g), [...g], for (let item of g), or just calling g.next()