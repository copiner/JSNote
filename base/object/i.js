/*
for...in
*/
//for...in 声明用于对数组或者对象的属性（可枚举的，即包括实例中的属性，也包括原型中的可枚举属性）进行循环/迭代操作。
//对于数组 ，迭代出来的是数组元 素，对于对象 ，迭代出来的是对象的属性；

let arr = ["a","b","c"];
for(let e in arr){
  //console.log(e)//0 -- 1 -- 2
  console.log(arr[e])//a -- b -- c
}

var obj = {
    x: "ai",
    y: "bi",
    z: "ci"
}
for(let v in obj){
  console.log(v)
}
//一个对象是否可以进行for...in穷举，我们可以通过propertyIsEnumerable属性来判断，说明如下：
//propertyIsEnumerable 属性 返回 Boolean 值，指出所指定的属性是否为一个对象的一部分以及该属性是否是可列举的。

// in  判断对象是否为数组/对象的元素/属性
var arr1 = ["a","b","2","3","str"];
var b1 = ("b" in arr1);
var b2 = (4 in arr1);
console.log(b1,b2);


var obj1 = {
   w:"wen",
   j:"jian",
   b:"bao"
}

var b3 = (2 in obj1);
var b4 = ("j" in obj1);

console.log(b3,b4);
