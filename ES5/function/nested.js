function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
let a = addSquares(2, 3); // returns 13
let b = addSquares(3, 4); // returns 25
let c = addSquares(4, 5); // returns 41

console.log(a);
