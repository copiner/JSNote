
function foo(){
    console.log(this.a)
}

var obj = {
    a:7
}

var bar = function(){
    foo.call(obj);
}

bar();//7

setTimeout(bar, 100);//7


var pio = {
    a:4
}

bar.call(pio)//7
