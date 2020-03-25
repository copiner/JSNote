//Return Values in Reflect vs Reflection Through Object

//To illustrate, below is a code snippet showing how to verify Object.defineProperty worked.

try {
  Object.defineProperty(target, 'foo', { value: 'bar' })
  // yay!
} catch (e) {
  // oops.
}

//As opposed to a much more natural Reflect.defineProperty experience.

var yay = Reflect.defineProperty(target, 'foo', { value: 'bar' })
if (yay) {
  // yay!
} else {
  // oops.
}


