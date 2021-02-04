
var strPrimitive = "I am a string";
console.log(typeof strPrimitive)

console.log(strPrimitive instanceof String)


var strObject = new String("I am a string");
console.log(typeof strObject)
console.log(strObject instanceof String)

console.log(Object.prototype.toString.call(strObject));
