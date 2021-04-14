
//Collection Methods in Map

/*
Maps make it very easy to probe the collection and figure out whether a key is defined in the Map. As we noted earlier, NaN equals NaN as far as Map is concerned. However, Symbol values are always different, so you¡¯ll have to use them by value
*/

var sym = Symbol();

var map = new Map([[NaN, 1], [sym,2], [Symbol(), 2], ['foo', 'bar']])
console.log(map.has(NaN))
// <- true
console.log(map.has(Symbol()))
// <- false
console.log(map.has('foo'))
// <- true
console.log(map.has('bar'))
// <- false
console.log(map.has(sym))

console.log("---------------------");

var map1 = new Map([[1,'a']])
console.log(map1.has(1))
console.log(map1.has('1'))

/*
You can also clear a Map entirely of entries without losing a reference to it. This can be very handy sometimes
*/

console.log("---------------------");

var map2 = new Map([[1,2],[3,4],[5,6]])
map2.clear()
console.log(map2.has(1));
console.log([...map2]);


/*
When you use Map as an iterable, you are actually looping over its .entries(). That means that you don¡¯t need to explicitly iterate over .entries(). It¡¯ll be done on your behalf anyways
*/


console.log("-------------------------------")
console.log(map[Symbol.iterator] === map.entries)

/*
Just like .entries(), Map has two other iterators you can leverage. These are .keys() and .values(). I¡¯m sure you guessed what sequences of values they yield, but here¡¯s a code snippet anyways
*/

console.log("---------------------------")
var map3 = new Map([[1,2],[3,4],[5,6]]);
console.log([...map3.keys()])
console.log([...map3.values()])

/*
Maps also come with a read-only .size property that behaves sort of like Array.prototype.length ¨C at any point in time it gives you the current amount of entries in the map
*/


console.log("---------------------------")
var map4 = new Map([[1,2],[3,4],[5,6]]);
console.log(map4.size)
map4.delete(3)
console.log(map4.size)
map4.clear()
console.log(map4.size);

/*
One more aspect of Map that¡¯s worth mentioning is that their entries are always iterated in insertion order. This is in contrast with Object.keys loops which follow an arbitrary order.

The for..in statement iterates over the enumerable properties of an object, in arbitrary order
*/


/*
Maps also have a .forEach method that¡¯s identical in behavior to that in ES5 Array objects. Once again, keys do not get casted into strings here
*/
console.log("-------------------------");
var map5 = new Map([[NaN, 1], [Symbol(), 2], ['foo', 'bar']]);
map5.forEach(

    (value,key)=>console.log(key,value)

    )
