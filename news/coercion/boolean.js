
//false
//undefined null false +0 -0 NaN ""

var a = new Boolean(false);
var b = new Number(0);
var c = new String("");

var d = Boolean(a && b && c);

console.log(d);

console.log( a && b && c )
console.log( b && c && a )
console.log( c && a && b )

