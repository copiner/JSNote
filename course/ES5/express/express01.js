//anonymous function
var sayHi;
if(true){
    sayHi = function(){
	console.log("Hi!");
    }
} else {
    sayHi = function(){
	console.log("Yo!");
    }
}

function factorial(num){
    console.log(arguments)
    console.log(arguments.callee)
    if(num <= 1){
	return 1;
    } else {
	return num*factorial(num-1);
    }
}
factorial(4);

var fac = function(num){
    console.log(arguments)
    console.log(arguments.callee)
    if(num <= 1){
	return 1;
    } else {
	return num*arguments.callee(num-1);
    }
}

fac(3);

//"use strict" 

var factori = (function f(num){
    if(num <= 1){
	return 1;
    } else {
	return num*f(num-1);
    }
})
