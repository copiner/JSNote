//async函数可以理解为Generator函数的语法糖，使用async内置了执行器，无需调用next方法进行逐步调用。且其返回值为Promise。

//正常情况下，await命令后是一个Promise对象。如果不是，会被转成一个立即resolve的Promise对象。
//await只能用在async函数中，不能用在普通函数中
async function gen(x){
    var y = await x + 2;
    var z = await y + 2;
    return z;
}
gen(1).then(result => console.log(result), error => console.log(error));

gen(1).then(result => console.log(result)).catch(error => console.log(error));
