
function fn1(){
   console.log(1);
}
function fn2(){
    console.log(2);
}

fn1.call(fn2);     //1
/*
首先调用call 函数时，也就是 fn1.call.call(fn2); 先将fn2作为临时的 context 对象
然后将fn1.call这个函数对象作为实际执行函数属性:context.fn = fn1.call;
注意：fn1.call会通过原型链找到最终的对象,其本质为 Function.prototype.call
*/
fn1.call.call(fn2);  //2

function func(){
    console.log(this);
}
//func.call(func);     //输出func
//func.call.call(func); //输出window or  global


Function.prototype.es6Call = function (context) {
  var context = context  || global;//node
    context.fn = this;
    console.log(this);
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
    const result = context.fn(...args);
    //console.log(result);
  delete context.fn
  return result;
}

fn1.es6Call.es6Call(fn2);

//类似下面调用temp方法，其中this指向fn2

function temp(context) {
  var context = context  || global;//node
    context.fn = this;
    console.log(this);
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
    const result = context.fn(...args);
  //  console.log(result);
  delete context.fn
  return result;
}


temp.es6Call(fn2);

Function.prototype.call.call(fn2);


function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };

add.es6Call(obj, 3, 4);

//add.es6Call(null, 3, 4);


//global
//for (var i in global){console.log(i)}
