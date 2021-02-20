
function foo(){
    console.log(this.a);
}

var obj = {
    a:3,
    foo:foo
}

var bar = obj.foo;

var a = 'oops';

bar();
