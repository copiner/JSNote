
/*
let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])

Parameters

1. thisArg

The value to be passed as the this parameter to the target function func when the bound function is called. The value is ignored if the bound function is constructed using the new operator. When using bind to create a function (supplied as a callback) inside a setTimeout, any primitive value passed as thisArg is converted to object. If no arguments are provided to bind, the this of the executing scope is treated as the thisArg for the new function.

2. arg1, arg2, ...argN

Arguments to prepend to arguments provided to the bound function when invoking func.

Return value

A copy of the given function with the specified this value, and initial arguments (if provided).
*/
function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
    return arg1 + arg2
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var result1 = addArguments(1, 2); // 3

var leadingThirtysevenList = list.bind(null,37);

var addThirtySeven = addArguments.bind(null,37);

var list2 = leadingThirtysevenList();
console.log(list2);
var list3 = leadingThirtysevenList();
console.log(list3);

var result2 = addThirtySeven(5);
console.log(result2);//37+5 = 42

var result3 = addThirtySeven(5, 10);
console.log(result3);//37 + 5 = 42 , 10 is ignored


