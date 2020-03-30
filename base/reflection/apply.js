/*
Reflect.apply(target,thisArg,args)
该方法的含义是：通过指定的参数列表对该目标函数的调用。该方法类似于我们之前的 Function.prototype.apply 方法的。

参数解析如下：
target: 我们的目标函数.
thisArg: target函数调用的时候绑定的this对象。
args: 就是函数参数列表。
*/

// 查找数组里面最小的元素值

const arrs = [1, 2, 3, 4];
// ES6 的语法如下
const min = Reflect.apply(Math.min, arrs, arrs);

console.log(min); // 1

// ES5的语法如下：

const min2 = Math.min.apply(arrs, arrs);
console.log(min2); // 1

// 或者我们使用 Finction.prototype 代码如下演示

const min3 = Function.prototype.apply.call(Math.min, arrs, arrs);
console.log(min3); // 1

// 下面是截取字符串的方法演示下

const strs = 'copiner';

// 使用ES6的语法 代码演示如下：

const str1 = Reflect.apply(String.prototype.slice, strs, [0, 3]);
console.log(str1); // 打印 cop

// 使用 ES5的语法
const str2 = strs.slice(0, 3);
console.log(str2); // 打印 cop

// 或者我们使用 String.prototype 代码如下演示
const str3 = String.prototype.slice.apply(strs, [0, 3]);
console.log(str3); // cop
