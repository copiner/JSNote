### ES6 Sets

Sets are yet another collection type in ES6. Sets are very similar to Map. To wit:

1. Set is also iterable
2. Set constructor also accepts an iterable
3. Set also has a .size property
4. Keys can also be arbitrary values
5. Keys must be unique
6. NaN equals NaN when it comes to Set too
7. All of .keys, .values, .entries, .forEach, .has, .delete, and .clear

However, there's a few differences as well

1. Sets only have values
2. No set.get - but why would you want get(value) => value
3. Having set.set would be wired, so we have set.add instead
4. set[Symbol.iterator] !== set.entries
5. set[Symbol.iterator] === set.values
6. set.keys === set.values
7. set.entries() returns an iterator on a sequence of items like [value,value]