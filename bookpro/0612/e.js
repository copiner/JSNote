/*
ECMAScript 中的函数是对象。因此函数也有属性和方法，
每个函数都包含两个属性：
1、length ：函数希望接收的命名参数的个数
2、prototype ： 是保存 引用类型 所有实例和方法，诸如toString(),valueof()等方法实际保存在prototype名下

每个函数都包含两个方法：
apply();
call();
还有一个方法：
bind()
*/


function a(a){
    console.log(a);
}

function ab(a,b){
    console.log(a,b);
}

function n(){
    console.log('hi');
}


console.log(a.length);
console.log(ab.length);

console.log(n.length);
