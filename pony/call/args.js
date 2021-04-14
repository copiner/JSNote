
/*
每个函数（非箭头）在被调用时都会自动取得两个特殊变量：this 和 arguments。内部函数在搜索这两个变量时，只会搜索到其活动对象为止。
arguments 是一个类数组对象，里面保存着调用函数时传入的实参，第一个参数索引为0
*/

(function(age,name){
    console.log(arguments);		//[23,"XD"]
    console.log(arguments.length);	//2
    console.log(arguments[0]);		//23
    console.log(arguments[1]);		//XD
})(23,"XD");


(function(age){
    console.log(arguments[0]);		//23
    console.log(age);		//23
    arguments[0] = 18;
    console.log(age);		//18
})(23);

/*
arguments 虽然可以通过下标获取其中的元素，也有 length 属性，但是却不是一个数组，因此不能使用数组的方法

可以使用Array.prototype.slice.apply(arguments)和Array.prototype.concat.apply([], arguments)将arguments转化为真正的数组
*/

/*
arguments 还有一个 callee 属性，这个属性指向 arguments 所在函数本身
*/
(function fun(){
   console.log(arguments.callee === fun);		//true
})();


//用 arguments 对象判断传递给函数的参数个数，即可模拟函数重载

function fun(){
	if(arguments.length === 1){
		console.log(arguments[0]);
	}else if(arguments.length === 2){
		console.log(arguments[0] + arguments[1]);
	}
}

fun(18);	//18
fun(18,23);	//41
