
var map = new Map()
map.set('contra', { description: 'Asynchronous flow control' })
map.set('dragula', { description: 'Drag and drop' })
map.set('woofmark', { description: 'Markdown and WYSIWYG editor' })

/*
One of the important differences is also that you¡¯re able to use anything for the keys. You¡¯re not just limited to primitive values like symbols, numbers, or strings, but you can even use functions, objects and dates ¨C too. Keys won¡¯t be casted to strings like with regular objects, either.
*/

var _map = new Map()
_map.set(new Date(), function today () {})
_map.set(() => 'key', { pony: 'foo' })
_map.set(Symbol('items'), [1, 2])

/*
You can also provide Map objects with any object that follows the iterable protocol and produces a collection such as [['key', 'value'], ['key', 'value']].
*/

var map1 = new Map([
  [new Date(), function today () {}],
  [() => 'key', { pony: 'foo' }],
  [Symbol('items'), [1, 2]]
])

var items = [
  [new Date(), function today () {}],
  [() => 'key', { pony: 'foo' }],
  [Symbol('items'), [1, 2]]
]
var map2 = new Map()
items.forEach(([key, value]) => map2.set(key, value))
