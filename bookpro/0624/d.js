
var value = [1,2,3,4,5,6,7,8];
var max = Math.max.apply(Math,value);

var min = Math.min.apply(null,value);

console.log(max,min);
