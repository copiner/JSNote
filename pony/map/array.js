
let a = [4,7,9,2], b = a;
let c = [...a];

console.log(a === b);
a[0] = 3;
console.log(a, b);
console.log(c);
