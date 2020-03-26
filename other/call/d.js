/*
fun.call(thisArg, arg1, arg2, ...)

thisArg
在fun函数运行时指定的this值。需要注意的是，指定的this值并不一定是该函数执行时真正的this值，
如果这个函数处于非严格模式下，则指定为null和undefined的this值会`自动`指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的this会指向改原始值的自动包装对象。

arg1, arg2, ...
指定参数列表
*/

