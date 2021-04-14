/*
  WeakMaps

You can think of WeakMap as a subset of Map. There are a few limitations on WeakMap that we didn¡¯t find in Map. The biggest limitation is that WeakMap is not iterable, as opposed to Map ¨C that means there is no iterable protocol, no .entries(), no .keys(), no .values(), no .forEach() and no .clear().

Another limitation found in WeakMap as opposed to Map is that every key must be an object, and value types are not admitted as keys. Note that Symbol is a value type as well, and they¡¯re not allowed either
*/

var map = new WeakMap()
//map.set(1,2)
//map.set(Symbol(),2)

//TypeError: Invalid value used as weak map key

/*
This is more of a feature than an issue, though, as it enables map keys to be garbage collected when they¡¯re only being referenced as WeakMap keys. Usually you want this behavior when storing metadata related to something like a DOM node, and now you can keep that metadata in a WeakMap
*/

//You are still able to pass an iterable to populate a WeakMap through its constructor,Just like with Map, you can use .has, .get, and .delete too.

var date = new Date()
var map1 = new WeakMap([[date, 'foo'], [() => 'bar', 'baz']])

console.log(map1.has(date));
console.log(map1.get(date));

map1.delete(date)
console.log(map1.has(date));

