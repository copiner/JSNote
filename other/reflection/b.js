
//Keyword Operators as First Class Citizens

/*
Some of these reflection methods provide programmatic alternatives of doing things that were previously only possible through keywords. For example, Reflect.deleteProperty(target, key) is equivalent to the delete target[key] expression. Before ES6, if you wanted a method call to result in a delete call, you¡¯d have to create a dedicated utility method that wrapped delete on your behalf.
*/
var target = { foo: 'bar', baz: 'wat' }
delete target.foo
console.log(target)
// <- { baz: 'wat' }

/*
Today, with ES6, you already have such a method in Reflect.deleteProperty.
*/

var targetd = { foo: 'bar', baz: 'wat' }
Reflect.deleteProperty(targetd, 'foo')
console.log(targetd)
// <- { baz: 'wat' }
