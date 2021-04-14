function* idMaker() {
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next()); // 2

function* fibonacci() {
  var a = yield 1;
  console.log(a);
  yield a * 2;
}

var it = fibonacci();
//console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
//console.log(it.send(10)); // 20
//console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)


for(var value of it){
    console.log(value);//"hello","generator"
}

//s---------------------------------------

function* helloGenerator() {
       console.log("this is generator");
}

helloGenerator();//没有执行

var h = helloGenerator();
h.next();

function* helloGenerator() {
   yield "hello";
   yield "generator";
   return;
}
var h = helloGenerator();
console.log(h.next());//{ value: 'hello', done: false }
console.log(h.next());//{ value: 'generator', done: false }
console.log(h.next());//{ value: 'undefined', done: true }

/*
这个例子中我们引入了yield这个关键字，分析下这个执行过程

(1)创建了h对象，指向helloGenerator的句柄，

(2)第一次调用nex()，执行到"yield hello"，暂缓执行,并返回了"hello"

(3)第二次调用next()，继续上一次的执行，执行到"yield generator",暂缓执行，并返回了"generator"。

(4)第三次调用next(),直接执行return，并返回done:true，表明结束。

经过上面的分析，yield实际就是暂缓执行的标示，每执行一次next()，相当于指针移动到下一个yield位置。

总结一下，Generator函数是ES6提供的一种异步编程解决方案。通过yield标识位和next()方法调用，
实现函数的分段执行。

*/


function* helloGenerator() {
     yield "hello";
     yield "generator";
     return;
 }
 var h = helloGenerator();
 for(var value of h){
 	  console.log(value);//"hello","generator"
 }

/*
helloGenerarot对象是支持for-of循环的，也说明Generator函数在原型上实现了迭代器接口，
上面调用的next()方法其实就是迭代器的next()方法。我们继续来看next()方法。
*/

function* gen(x,y){
	  let z= yield x+y;
	  let result = yield z*x;
	  return result
}
var g = gen(5,6);
console.log(g.next());//{value: 11, done: false}
console.log(g.next());//{value: NaN, done: false}


/*
1、第一执行next()，运行"yield x+y"，并返回x+y的运算结果11；

2、第二次执行next()，运行"yield z*x",此时是z为11，x为5，运算结果为55才对，为何是NaN呢？
前一次运行yield x+y的值并没有保存，let z=yield x+y，结果是let z=undefined，所以运算z*x的结果是NaN。

*/

//console.log(g.next(11));//{value: 55, done: false}

/*
请注意，我们第二次调用的时候，next方法中传入了参数11，
此时得到正确的结果。next()方法是可以带参数的，
其中的参数就替换了上一次yield执行的结果。
在这个例子中yield x+y就替换成了11，即

let z=yield x+y 替换成了let z=11，所以得到了正确的值
*/


function* gen(x,y){
	  let z= yield x+y;
	  let result = yield z*x;
	  return result
}
var g = gen(5,6);
var i =g.next();//{value: 11, done: false}
g.next(i.value);//{value: 55, done: false}


function* gen(x,y){
	  yield 1;
	  yield 2;
	  yield 3;
}
var g = gen();
g.next();//{value: 1, done: false}
g.next();//{value: 2, done: false}
g.return();//{value: undefined, done: true}
g.next();//{value: undefined, done: true}
/*
对于迭代器(Iterator)接口，还有一个return()方法:

执行return()方法后就返回done:true，Generator 函数遍历终止，后面的yield 3不会再执行了。
与next()方法一样，return()也可以带参数。

g.return(5);//{value: 5, done: true}
*/

//s----------------yield---------------
//yield是Generator函数的暂缓执行的标识，对于yield只能配合Generator函数使用，
//在普通的函数中使用会报错。可以执行下面的代码

/*
Generator函数中还有一种yield*这个表达方式

yield* 后面只能适配Generator函数
*/

function* foo(){
	yield "a";
	yield "b";
}
function* gen(x,y){
	  yield 1;
	  yield 2;
	  yield* foo();
	  yield 3;
}
var g = gen();
console.log(g.next());//{value: 1, done: false}
console.log(g.next());//{value: 2, done: false}
console.log(g.next());//{value: "a", done: true}
console.log(g.next());//{value: "b", done: true}
console.log(g.next());//{value: "3", done: true}

//等价
function* foo(){
	yield "a";
	yield "b";
}
function* gen(x,y){
	  yield 1;
	  yield 2;
	  for(var value of foo()){
	  	yield value;
	  }
	  yield 3;
}


//---------other---------------------
function* gen(x, y) {
  let z, result;
  yield (z = x + y);
  yield (result = z * x);
  return result
}
