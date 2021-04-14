
console.log(typeof undefined === "undefined");//true
console.log(typeof true === "boolean");
console.log(typeof 42 === "number");
console.log(typeof "42" === "string");
console.log(typeof { life:42 } === "object");

console.log(typeof Symbol() === "symbol");

console.log(typeof null === "object");

//null
var a = null;
console.log(a === null);

console.log(!a && typeof a === "object");//true

console.log(typeof function a(){} === "function");

console.log(typeof [1,2,3] === "object")


//------
var b = 30;
console.log(typeof b);

b = true
console.log(typeof b);

console.log(typeof typeof 30);

//------

var x;
console.log(typeof x);

var y = 90;
var z;
y = z

console.log(typeof y)
console.log(typeof z)

//------
console.log('error')
var j;
console.log(j);
//console.log(k);//k is not defined

console.log(typeof j);
console.log(typeof k);

//so

//if(DEBUG){ console.log("debug") }

if(typeof DEBUG !== "undefined"){
    console.log('debug');
}
