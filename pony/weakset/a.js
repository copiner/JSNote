/*
Much like in WeakMap, you can only .add, .has, and .delete values from a WeakSet. And just like in Set, there¡¯s no .get.
*/

var set = new WeakSet()
set.add({})
set.add(new Date())

//As we know, we can¡¯t use primitive values

var set1 = new WeakSet()
set1.add(Symbol())
// TypeError: invalid value used in weak set

/*
Just like with WeakMap, passing iterators to the constructor is still allowed even though a WeakSet instance is not iterable itself
*/

var set2 = new WeakSet([new Date(), {}, () => {}, [1]])
