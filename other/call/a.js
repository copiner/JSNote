/*
因为arguments并不是真正的数组对象，只是与数组类似而已，所以它并没有slice这个方法，而Array.prototype.slice.call(arguments, 1)可以理解成是让arguments转换成一个数组对象，让arguments具有slice()方法

Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组

其实就是用于把类数组对象转换成了数组，使用数组的一系列方法。
类数组转成数组主要有：Array.from()，[].slice.call()(Array.prototype.slice.call()),扩展运算符，也能将某些数据结构转成数组
*/
function list(){
//    console.log(arguments.length);//{ '0': 1, '1': 2, '2': 3 }
    return Array.prototype.slice.call(arguments);
}

var list = list(1,2,3);//[1, 2, 3]
console.log(list);

var a={ length:3, '0': 1, '1': 2, '2': 3 }
console.log(Array.prototype.slice.call(a));
console.log(Array.prototype.slice.call(a, 2));

var b = { '0': 1, '1': 2, '2': 3 };
console.log(Array.prototype.slice.call(b));

