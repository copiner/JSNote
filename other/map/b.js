
/*
A very common abuse case of JavaScript objects is hash-maps, where we map string keys to arbitrary values. For example, one might use an object to map npm package names to their metadata, like so:
*/

var registry = {}
function add (name, meta) {
  registry[name] = meta
}
function get (name) {
  return registry[name]
}
add('contra', { description: 'Asynchronous flow control' })
add('dragula', { description: 'Drag and drop' })
add('woofmark', { description: 'Markdown and WYSIWYG editor' })

/*There¡¯s several issues with this approach, to wit:

1.Security issues where user-provided keys like __proto__, toString, or anything in Object.prototype break expectations and make interaction with these kinds of hash-map data structures more cumbersome

2.Iteration over list items is verbose with Object.keys(registry).forEach or implementing the iterable protocol on the registry

3.Keys are limited to strings, making it hard to create hash-maps where you¡¯d like to index values by DOM elements or other non-string references
  
*/

/*
The first problem could be fixed using a prefix, and being careful to always get or set values in the hash-map through methods. It would be even better to use ES6 proxies, but we won¡¯t be covering those until tomorrow!
*/

var registry = {}
function add (name, meta) {
  registry['map:' + name] = meta
}
function get (name) {
  return registry['map:' + name]
}
add('contra', { description: 'Asynchronous flow control' })
add('dragula', { description: 'Drag and drop' })
add('woofmark', { description: 'Markdown and WYSIWYG editor' })

/*
Luckily for us, though, ES6 maps provide us with an even better solution to the key-naming security issue. At the same time they facilitate collection behaviors out the box that may also come in handy. Let¡¯s plunge into their practical usage and inner workings.
*/
