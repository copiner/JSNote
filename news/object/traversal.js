
/*
  forEach some every
  for in
  for of

  @@iterator
*/

var arr = [6,7,8];

var it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

