
//deep copy
var someObj = {}

var newObj = JSON.parse(JSON.stringify(someObj));

//es6 shallow
var myObject = {}
var newObj1 = Object.assign({},myObject);
