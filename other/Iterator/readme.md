/*
Iterator and iterable protocol define how to iterate over any object,
not just arrays and array-likes

A well-known Symbol is used to assign an iterator to any object
*/
/*
var foo = {
   [Symbol.iterator]:iterable
};

//or
var foo = new Object();


foo[Symbol.iterator] = iterable;
*/

/*
Some built-ins like Array, String, or arguments ¨C and NodeList in browsers ¨C are iterable by default in ES6
*/


/*
I¡¯m making my object an iterable by assigning to it¡¯s mystical @@iterator property through the Symbol.iterator property.
*/
```javascript
var foo = {
  [Symbol.iterator]: () => ({
    items: ['p', 'o', 'n', 'y', 'f', 'o', 'o'],
    next: function () {
      return {
        done: this.items.length === 0,
        value: this.items.shift()
      }
    }
  })
}

for(let pony of foo){
    console.log(pony);
}
```


You can use for..of to iterate over any object that adheres to the iterable protocol. In ES6, that includes arrays, any objects with an user-defined [Symbol.iterator] method, generators, DOM node collections from .querySelectorAll and friends, etc. If you just want to cast any iterable into an array, a couple of terse alternatives would be using the spread operator and Array.from.

```javascript
console.log([...foo]);
console.log(Array.from(foo));

```


If jQuery implemented the iterator protocol on their collection¡¯s prototype, then you could do something like below.


```javascript
for(let item of $('li')){
    console.log(item);
    //<- the <li> wrapped in a jQuery object
}

for(let list of $('ul')){
    for(let item of list.find('li')){
        console.log(item);
            //<- the <li> wrapped in a jQuery object
    }
}
```


This brings me to an important aspect of iterables and iterators

Attempting to cast the iterable foo object into an array using either Array.from(foo) or [...foo] would crash our program, since the sequence never ends.

We must be very careful with these types of sequences as they can crash and burn our Node process, or the human¡¯s browser tab
```javascript
var infi = {
    [Symbol.iterator]:()=>{
        var i = 0;
        return { next: () => ({value:++i}) }
    }
}

for(let pony of infi){
    if(pony > 10){
        break;
    }
    console.log(pony);
}
```

We usually have a good idea about whether a sequence is finite or infinite, since we construct those sequences. Whenever we have an infinite sequence it¡¯s up to us to add an escape condition that ensures our program won¡¯t crash in an attempt to loop over every single value in the sequence

