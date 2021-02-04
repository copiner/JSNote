
var obj = {
    a:3
}

console.log("a" in obj);//true
console.log("b" in obj);//false


console.log(obj.hasOwnProperty("a"));//true
console.log(obj.hasOwnProperty("b"));//false


var obj1 = Object.create(null);

//console.log(obj1.hasOwnProperty("a"));//error

console.log(Object.prototype.hasOwnProperty.call(obj1,"a"));//false
