/*
一般来说，this指向函数运行（调用）时所在的执行环境 的对象
简单来说，this指向函数的调用者
*/
var obj = {
    
    color:'red',
    
    a:function(){
        console.log(this.color);
    }
}

var b = obj.a;

obj.a()

b()


/*
var b = obj.a;

//==

var b = function(){
    console.log(this.color);
}

obj.a() 调用时，所在环境是obj
b()调用，其所在的执行环境是全局环境
*/
