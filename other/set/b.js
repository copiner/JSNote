/*
In the example below you can note how it takes an iterable with duplicate values, it can be spread over an Array using the spread operator, and how the duplicate value has been ignored
*/

var set = new Set([1,2,3,4,4])
console.log([...set])

/*
Sets may be a great alternative to work with DOM elements. The following piece of code creates a Set with all the <div> elements on a page and then prints how many it found. Then, we query the DOM again and call set.add again for every DOM element. Since they¡¯re all already in the set, the .size property won¡¯t change, meaning the set remains the same
*/

function divs () {
  return [...document.querySelectorAll('div')]
}
var set = new Set(divs())
console.log(set.size)
// <- 56
divs().forEach(div => set.add(div))
console.log(set.size)
// <- 56
// <- look at that, no duplicates!
