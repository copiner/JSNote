/*
Promise对象有两种状态，除了resolved，还有rejected，我们来看下如果promise对象变为rejected，会如何处理
*/
function testAwait1(){
  	return Promise.reject("error 1");
 }
async function helloAsync1(){
	await testAwait1();
	console.log("helloAsync1");//没有打印
}
helloAsync1().then(v=>{
    console.log(v);
}).catch(e=>{
   console.log(e);//"error"
});

//异常被try...catch捕获后，继续执行下面的代码，没有导致中断

function testAwait2(){
	return Promise.reject("error");
}

async function helloAsync2(){
	try{
     await testAwait2();
	} catch(e) {
		console.log("this 2 error:"+e)//this error:error
	}
	console.log("helloAsync2");//helloAsync
}

helloAsync2().then(v=>{
}).catch(e=>{
   console.log(e);//没有打印
});
