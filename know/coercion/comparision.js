
var a = [42];
var b = ["43"];

console.log(a<b);//true
console.log(b<a);

var a = {s:42};
var b = {s:43};

console.log(a<b);
console.log(a==b);
console.log(a>b);

console.log(a<=b);//!(b<a)  //true
console.log(a>=b);//!(b>a)   //true
