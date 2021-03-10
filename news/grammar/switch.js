

var a = "42";

switch(a){
case 2:
    console.log(2);
    break;
case 42:
    console.log(42);
    break;
default:
    console.log("fin");
}


console.log("==");

switch(true){
case a== 2:
    console.log(2);
    break;
case a == 42:
    console.log(42);
    break;
default:
    console.log("fin");
}


console.log('break');
a = 42;
switch(a){
case 2:
    console.log(2);
case 42:
    console.log(42);
default:
    console.log("fin");
}



var a = "hello world";
var b = 10;

console.log(a||b == 10);

switch(true){
case (a||b == 10):
    break;
case !!(a||b == 10):
    console.log("true");
    break;
default:
    console.log("fin");
}
