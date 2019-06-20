
var falseObject = new Boolean(false);
var result = falseObject && true;
console.log(result);

var falseValue = false;
result = falseValue && true;

console.log(result);


console.log(typeof falseObject);//object

console.log(typeof falseValue);//boolean

console.log(falseObject instanceof Boolean);//true
console.log(falseValue instanceof Boolean);//false
