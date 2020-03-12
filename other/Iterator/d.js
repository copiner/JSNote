/*
Iterator and iterable protocol define how to iterate over any object,
not just arrays and array-likes

A well-known Symbol is used to assign an iterator to any object
*/
var foo = {
   [Symbol.iterator]:iterable
};

//or
var foo = new Object();


foo[Symbol.iterator] = iterable;
/*
Some built-ins like Array, String, or arguments ¨C and NodeList in browsers ¨C are iterable by default in ES6
*/
