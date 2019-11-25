
function add(...x){
	return x.reduce((m,n)=>m+n,0);
	}
	//传递任意个数的参数
console.log(add(1,2,3));//输出：6
console.log(add(1,2,3,4,5));//输出：15
