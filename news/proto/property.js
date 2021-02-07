
var anotherObject = {
    a:2
}

var myObject = Object.create(anotherObject);

console.log(1, myObject.a);
console.log(2, anotherObject.a);

console.log(3, anotherObject.hasOwnProperty("a"));
console.log(4, myObject.hasOwnProperty("a"));

myObject.a++;

console.log(5, myObject.a);
console.log(6, anotherObject.a);

console.log(7, myObject.hasOwnProperty("a"));
