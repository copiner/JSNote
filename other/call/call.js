//call

//'use strict'

var a = 9, b = 8;

function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };

console.log(add.call(obj, 3, 4)); //10

console.log(add.call(null, 3,4));

//非严格模式下，若obj替换为null和undefined，this值会`自动`指向全局对象（浏览器中就是window对象）

/*
类似，给o对象添加一个add属性，这个时候 this 就指向了 o

o.add(5,7)得到的结果和add.call(o, 5, 7)相同

但是给对象o添加了一个额外的add属性，这个属性我们是不需要的，所以可以使用delete删除它

1. 将函数设为对象的属性
o.fn = bar

2. 执行该函数
o.fn()

3. 删除该函数
delete o.fn

*/
const o = {
  a: 1,
  b: 2,
  add: function(c, d) {
    return this.a + this.b + c + d
  }
};

console.log(o.add(3,4));


console.log(add.call(o,3,4));

console.log('-----------------------------');

/*
基于ES3实现call
*/


Function.prototype.es3Call = function (context) {
    var context = context || window;
    console.log(context);
    context.fn = this;//这里this === function add(c,d){}
    console.log(context);
   var args = [];
    // arguments是类数组对象，遍历之前需要保存长度，这里过滤出第一个传参
    //    console.log(...arguments);
    console.log(...arguments);
  for (var i = 1, len = arguments.length ; i < len; i++) {
	// 避免object之类传入
    args.push('arguments[' + i + ']');
  }
    console.log(...args);
    
  var result = eval('context.fn('+args+')');
  delete context.fn;
  return result;
}



//console.error(add.es3Call(obj, 3, 4)); // 10
console.log(add.es3Call({ a: 3, b: 9 }, 3, 4)); // 19
//console.log(add.es3Call({ a: 3, b: 9 }, {xx: 1}, 4)); // 12[object Object]4

console.log('----------------------')
/*
 ES6 call 实现
*/
Function.prototype.es6Call = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  const result = context.fn(...args);
  delete context.fn;    
  return result;
}

console.error(add.es6Call(obj, 3, 4));
console.log(add.es3Call({ a: 3, b: 9 }, {xx: 1}, 4)); // 12[object Object]4
