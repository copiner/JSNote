
// yield* 一个可迭代对象，就相当于把这个可迭代对象的所有迭代值分次 yield 出去。
//表达式本身的值就是当前可迭代对象迭代完毕（当done为true时）时的返回值

function* gen(){
  yield [1, 2];
  yield* [3, 4];
}
var g = gen();

g.next(); // {value: Array[2], done: false}
g.next(); // {value: 3, done: false}
g.next(); // {value: 4, done: false}
g.next(); // {value: undefined, done: true}


//for...of循环可以自动遍历Generator函数时生成的Iterator对象，且此时不再需要调用next方法。
function* foo(){
	yield 'a';
	yield 'b';
}
function* bar(){
	yield 'x';
	yield* foo();
	yield 'y';
}

for(let v of bar()){
	console.log(v);
}

// x
// a
// b
// y
