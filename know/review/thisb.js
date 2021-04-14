
function foo(){
    console.log(this.a);
}

var obj = {
    a:8,
    foo:foo
}

var a = "oops";

setTimeout(obj.foo, 100)

setTimeout(function(){
    obj.foo();
}, 100)


