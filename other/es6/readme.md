### Introduction

e.g. /pony

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
