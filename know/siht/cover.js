
function foo(){

    console.log(this.a);
}

var obj = {
    a:2,
    foo:foo
};

obj.foo();

var paz = {
    a:7,
    foo:obj
}

paz.foo.foo();
