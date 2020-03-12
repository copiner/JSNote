
async function hello(){
	return "helloAsync";
}
//执行下这个函数，发现并没有返回字符串"helloAsync",而是通过Promise.resolved()将字符串封装成了一个Promise对象返回
hello().then(v=>{
   console.log(v);//"helloAsync"
})


//-----------------------------------------------------------------------

function testAwait(){
 return new Promise((resolve) => {
        setTimeout(function(){
        	console.log("testAwait");
        	resolve();
        }, 1000);
     });
	}
async function helloAsync(){
	await testAwait();
	console.log("helloAsync");
}
helloAsync();
/*
1、testAwait()方法中new一个Promise对象返回，promise对象中用setTimeout模拟一个异步过程，即1s后打印"testAwait"。

2、helloAsync()方法中，await testAwait(),表示将阻塞这里，等待testAwait这个异步方法执行并返回结果后，才继续下面的代码

*/

//await后面可以是Promise对象，可以是字符串，布尔值，数值以及普通函数
/*
1、对于Promise对象，await会阻塞主函数的执行，等待 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果，然后继续执行主函数接下来的代码。

2、对于非Promise对象，await等待函数或者直接量的返回，而不是等待其执行结果
*/
function testAwait(){
	setTimeout(function(){
        	console.log("testAwait");
        }, 1000);
	}
async function helloAsync(){
	await testAwait();
	console.log("helloAsync");
}
helloAsync();
