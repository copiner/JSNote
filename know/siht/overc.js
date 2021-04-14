
function foo(){
    console.log(this.a);
}

function doFoo(fn){
    fn();
}

var obj = {
    a:2,
    foo:foo
}

var a = "oops";

obj.foo();//2

doFoo(obj.foo);//oops

setTimeout( obj.foo, 100 );//oops

