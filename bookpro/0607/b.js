/*

 */

function callFunction(anyfunction, anyargument){
    return anyfunction(anyargument);
}

function add10(num){
    return num + 10;
}

var r = callFunction(add10,10);


function getGreet(name){
    return "hello "+ name;
}


var rr = callFuntion(getGreet,'anyone');

