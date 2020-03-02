/*
typeof 一般只能返回如下几个结果："number"、"string"、"boolean"、"object"、"function" 和 "undefined"。

运算数为数字 typeof(x) = "number"

字符串 typeof(x) = "string"

布尔值 typeof(x) = "boolean"

对象,数组和null typeof(x) = "object"

函数 typeof(x) = "function"
*/

var a;
console.log(typeof a)
console.log(typeof b)
console.log(typeof null)


isArray()


var a=new Array();

a instanceof Array// true，

a instanceof Object //也会返回 true;

//这是因为 Array 是 object 的子类。


function test(){};

var a=new test();

a instanceof test //会返回true

a==b;  //flase
