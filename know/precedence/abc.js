
var a = 42;
var b = "foo";
var c = [4,7,9];

console.log(a && b || c);//foo
console.log(a || b && c);//42

console.log((a && b) || c);//foo
console.log(a || (b && c));//42
