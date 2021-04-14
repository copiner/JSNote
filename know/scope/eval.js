
function foo(str, a){
    //"use strict"
    eval(str);
    console.log(a,b);
}

var b = 2;

foo("var b=3;", 1)
