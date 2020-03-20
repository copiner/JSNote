### Introduction


Note that if you want these concepts to permeate your brain, you¡¯ll have a much better time learning the subject.

The ES6 specification was finalized in June 2015, (hence ES2015)

Future versions of the specification will follow the ES[YYYY] pattern, e.g ES2016 for ES7

### Tooling

To get ES6 working today, you need a JavaScript-to-JavaScript transpiler

Babel (a transpiler) has a killer feature: human-readable output

Use `babel` to transpile ES6 into ES5 for static builds

Use `babelify` to incorporate babel into your Gulp,or npm run build process

Use `babel-node` with any version of node, as it transpiles modules into ES5

Babel has a thriving ecosystem that already supports some of ES2016 and has plugin support

### Assignment Destructuring

`var {foo} = pony` is equivalent to `var foo = pony.foo`

`var {foo:baz} = pony` is equivalent to `var baz = pony.foo`

You can provide default values, `var {foo='bar'} = baz` yields `foo:'bar'` if
`baz.foo` is undefined

You can pull as many properties as you like, aliased or not
`var {foo, bar:baz} = {foo:0,bar:1}` gets you `foo:0 and baz:1`

You can go deeper. `var {foo:{bar}} = { foo: {bar:'baz'}}` get you
`bar:'baz'`

You can alias that too.`var {foo:{bar:deep}} = {foo:{bar:'baz'}}` gets you
`deep:'baz'`

Properties that aren't found yield `undefined` as usual, e.g: `var {foo} = {}`

Deeply nested properties that aren't found yield an error
e.g: var {foo:{bar}} = {}

It also works for arrays, `[a,b] = [0,1]` yields a:0 and b:1

You can skip items in an array, [a, ,b] = [0,1,2],getting a:0 and b:2

You can swap without an "aux" variable, [a, b] = [b,a]

You can also use destructuring in function parameters
1. Assign default values like `function foo(bar=2){}`
2. Those defaults can be objects, too `function foo(bar={a:1,b:2}){}`
3. Destructure bar completely, like `function foo ({a=1,b=2}){}`
4. Default to an empty object if nothing is provided, like
`function foo({a=1,b=2} = {}){}`

### Spread Operator and Rest Parameters

Rest parameters is a better `arguments`

1. You declare it in the method signature like `function foo(...everying){}`
2. `everything` is an array  with all parameters passed to `foo`
3. You can name a few parameters before `...everything`, like function
`foo(bar, ...rest){}`
4. Named parameters are excluded from `...rest`
5. `...rest` must be the last parameter in the list

Spread operator is better than magic, also denoted with ... syntax
1. Avoids `.apply` when calling methods, `fn(..[1,2,3])` is equivalent to fn(1,2,3)
2. Easier concatenation [1,2,...[3,4,5],6,7]
3. Cast array-likes or iterables into an array,e.g [...document.querySelectorAll('img')]
4. Useful when destructuring too, [a, , ...rest] = [1,2,3,4,5] yields a:1 and rest:[3,4,5]
5. Makes new + .apply effortless, new Date(..[2015,31,8])

### Arrow Functions

Terse way to declare a function like `param => returnValue`

Several flavors are available, might take you some getting used to:

1. p1 => expr is okay for a single parameter
2. p1 => expr has an implicit return statement for the provided expr expression
3. To return an object implicitly, wrap it in parenthesis () => ({ foo: 'bar' }) or you’ll get an error
4. `Parenthesis` are demanded when you have zero, two, or more parameters, () => expr or (p1, p2) => expr
5. `Brackets` in the right-hand side represent a code block that can have multiple statements, () => {}
6. When using a code block, there’s no implicit return, you’ll have to provide it – () => { return 'foo' }

You can’t name arrow functions statically, but runtimes are now much better at inferring names for most methods

Arrow functions are bound to their lexical scope
1. this is the same this context as in the parent scope
2. this can’t be modified with .call, .apply, or similar “reflection”-type methods

### Template Literals

Strings wrapped in backticks are template literals

You can use any valid JavaScript expressions in the interpolation, such as `${2 * 3}` or `${foo()}`

### Object Literals

Instead of { foo: foo }, you can just do { foo } – known as a property value shorthand

Computed property names, { [prefix + 'Foo']: 'bar' }, where prefix: 'moz', yields { mozFoo: 'bar' }

You can’t combine computed property names and property value shorthands, { [foo] } is invalid

Method definitions in an object literal can be declared using an alternative, more terse syntax, { foo () {} }



### Generators

Generator functions are a special kind of iterator that can be declared using the function* generator () {} syntax

Generator functions use yield to emit an element sequence

Generator functions can also use yield* to delegate to another generator function – or any iterable object

Generator functions return a generator object that’s adheres to both the iterable and iterator protocols

1. Given g = generator(), g adheres to the iterable protocol because g[Symbol.iterator] is a method

2. Given g = generator(), g adheres to the iterator protocol because g.next is a method

3. The iterator for a generator object g is the generator itself: g[Symbol.iterator]() === g

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


### Maps
A replacement to the common pattern of creating a hash-map using plain JavaScript objects

1. Avoids security issues with user-provided keys

2. Allows keys to be arbitrary values, you can even use DOM elements or functions as the key to an entry

Map adheres to iterable protocol

Create a map using new Map()

Initialize a map with an iterable like [[key1, value1], [key2, value2]] in new Map(iterable)

Use map.set(key, value) to add entries

Use map.get(key) to get an entry

Check for a key using map.has(key)

Remove entries with map.delete(key)

Iterate over map with for (let [key, value] of map), the spread operator, Array.from, etc

### WeakMaps
Similar to Map, but not quite the same

WeakMap isn't iterable, so you don't get enumeration methods like .forEach, .clear, and others you had in Map

WeakMap keys must be reference types, You can't use value types like symbols, numbers, or strings as keys

WeakMap entries with a key that's the only reference to the referenced variable are subject to garbage collection

That last point means WeakMap is great at keeping around metadata for objects, while those objects are still in use

You avoid memory leaks, without manual reference counting


### WeakSet
1. WeakSet is sort of a cross-breed between Set and WeakMap
2. A WeakSet is a set that can’t be iterated and doesn’t have enumeration methods
3. WeakSet values must be reference types
4. WeakSet may be useful for a metadata table indicating whether a reference is actively in use or not

### Proxies

Proxies are created with new Proxy(target, handler), where target is any object and handler is configuration

The default behavior of a proxy acts as a passthrough to the underlying target object

Handlers determine how the underlying target object is accessed on top of regular object property access semantics

You pass off references to proxy and retain strict control over how target can be interacted with

Handlers are also known as traps, these terms are used interchangeably

You can create revocable proxies with Proxy.revocable(target, handler)

1.That method returns an object with proxy and revoke properties
2.You could destructure var {proxy, revoke} = Proxy.revocable(target, handler) for convenience
3.You can configure the proxy all the same as with new Proxy(target, handler)
4.After revoke() is called, the proxy will throw on any operation, making it convenient when you can’t trust consumers

get – traps proxy.prop and proxy['prop']

set – traps proxy.prop = value and proxy['prop'] = value

has – traps in operator

deleteProperty – traps delete operator

defineProperty – traps Object.defineProperty and declarative alternatives

enumerate – traps for..in loops

ownKeys – traps Object.keys and related methods

apply – traps function calls

construct – traps usage of the new operator

getPrototypeOf – traps internal calls to [[GetPrototypeOf]]

setPrototypeOf – traps calls to Object.setPrototypeOf

isExtensible – traps calls to Object.isExtensible

preventExtensions – traps calls to Object.preventExtensions

getOwnPropertyDescriptor – traps calls to Object.getOwnPropertyDescriptor

### Reflection
Reflection is a new static built-in (think of Math) in ES6

Reflection methods have sensible internals, e.g Reflect.defineProperty returns a boolean instead of throwing

There’s a Reflection method for each proxy trap handler, and they represent the default behavior of each trap

Going forward, new reflection methods in the same vein as Object.keys will be placed in the Reflection namespace