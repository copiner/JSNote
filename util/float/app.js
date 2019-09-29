
const Big = require('big.js');

let x = new Big(9);                       // '9'
let y = new Big(x);                       // '9'
let z = Big(435.345);                         // 'new' is optional

console.log(x.toString())
console.log(y.toString());
console.log(z.toString());

let a = new Big(20.18);
let b = new Big(0.2018);

let c = a.minus(b).toString();
console.log(c);

123.789.toFixed();
//"123.789".toFixed();

Number(16.453);

"123".toString();

