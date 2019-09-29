/*
  ECMAScript 5 规范化了另一个函数对象属性：caller    函数对象属性

这个属性中保存着调用当前函数的 函数的引用，如果是在全局作用域中调用当前函数，它的值为null

严格模式下会有问题

*/

function outer(){
//    console.log(outer.caller.toString());
    inner();
}

function inner(){
    console.log(inner.caller);
    console.log(arguments.callee.caller);
}

outer();
