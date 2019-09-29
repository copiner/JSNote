/*
函数fun()在执行时，输出第一个变量a是undefined是因为它现在自己的执行环境里查询到变量a已声明，即变量提升（即变量可以提前声明但是赋值是不可以的），此时就输出了undefined。函数fun()在执行时，输出第一个变量a是undefined是因为它现在自己的执行环境里查询到变量a已声明，即变量提升（即变量可以提前声明但是赋值是不可以的），此时就输出了undefined。
*/

var a = 10;

function fun(){
    console.log(a);//undefined

    var a = 20;

    console.log(a);//20
}

fun();

function func(){
    var a;
    console.log(a);//undefined

    a = 20;

    console.log(a);//20
}

func();
