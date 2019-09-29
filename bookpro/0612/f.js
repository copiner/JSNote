//求数组中的最大项
var arr = [1,3,5,7,9];
var max = Math.max.apply(null,arr);
var min = Math.min.apply(Math,arr);

console.log(max);
console.log(min);

var arr1 = new Array("1","3","5","7","9");
var arr2 = new Array("2","4","6","8");
console.log(Array.prototype.push.apply(arr1,arr2));//9
console.log(arr1);//[ '1', '3', '5', '7', '9', '2', '4', '6', '8' ]


