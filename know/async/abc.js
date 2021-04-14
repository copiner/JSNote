
var a = {
    index:1
}

console.log(a);

a.index++;

console.log(a);


var b = 20;

function foo(){
    b = b + 1;
}

function bar(){
    b = b*2;
}

console.log(b);

setTimeout(foo,1000);
//setTimeout(bar(),50);
bar();

console.log(b);
