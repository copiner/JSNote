/*
函数内部对象 arguments
arguments 拥有一个属性 callee 该属性是一个指针，指向拥有这个arguments对象的函数
*/

function factorial(num){
    if(num <=1){
        return 1;
    } else {
        return num*factorial(num-1);
    }
}

function factorial2(num){
    if(num <=1){
        return 1;
    } else {
        return num*arguments.callee(num-1);
    }
}

var trueFactorial = factorial2;

factorial = null;

console.log(trueFactorial(5));
