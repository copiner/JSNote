
function foo(){
    console.log(this.a);
}

var obj = {
    a:8,
    foo:foo
}

function doFoo(fn){

    fn();
    //obj.foo()
}

var a = "oops";

doFoo(obj.foo);
//doFoo();


