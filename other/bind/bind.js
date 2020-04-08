
/*
bind() 方法会创建一个新函数。
当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，
之后的一序列参数将会在传递的实参前传入作为它的参数
*/

function foo(c, d) {
  this.b = 100
  console.log(this.a)
  console.log(this.b)
  console.log(c)
  console.log(d)
}
// 我们将foo bind到{a: 1}
var func = foo.bind({a: 1}, '1st');
func('2nd'); // 1 100 1st 2nd
// 即使再次call也不能改变this。
func.call({a: 2}, '3rd'); // 1 100 1st 3rd

var temp = foo.bind(null, '1st');
temp('2nd');

// 当 bind 返回的函数作为构造函数的时候，
// bind 时指定的 this 值会失效，但传入的参数依然生效。
// 所以使用func为构造函数时，this不会指向{a: 1}对象，this.a的值为undefined。如下

// new func('4th'); //undefined 100 1st 4th


/*
es3bind
*/


Function.prototype.es3Bind = function (context) {
  if (typeof this !== "function") throw new TypeError('what is trying to be bound is not callback');
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  const fBound = function () {
    // 获取函数的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    // 返回函数的执行结果
    // 判断函数是作为构造函数还是普通函数
    // 构造函数this instanceof fNOP返回true，将绑定函数的this指向该实例，可以让实例获得来自绑定函数的值。
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(this instanceof fNOP ? this: context, args.concat(bindArgs));
  }
  // 创建空函数
  var fNOP = function () {};
  // fNOP函数的prototype为绑定函数的prototype
  fNOP.prototype = this.prototype;
  // 返回函数的prototype等于fNOP函数的实例实现继承
  fBound.prototype = new fNOP();
  // 以上三句相当于Object.create(this.prototype)
  return fBound;
}

//var func = foo.es3Bind({a: 1}, '1st');
//func('2nd');  // 1 100 1st 2nd
//func.call({a: 2}, '3rd'); // 1 100 1st 3rd
//new func('4th');  //undefined 100 1st 4th

/*
es6bind
*/

Function.prototype.es6Bind = function(context, ...rest) {
  if (typeof this !== 'function') throw new TypeError('invalid invoked!');
  var self = this;
  return function F(...args) {
    if (this instanceof F) {
      return new self(...rest, ...args)
    }
    return self.apply(context, rest.concat(args))
  }
}

//var func = foo.es3Bind({a: 1}, '1st');
//func('2nd');  // 1 100 1st 2nd
//func.call({a: 2}, '3rd'); // 1 100 1st 3rd
//new func('4th');  //undefined 100 1st 4th
