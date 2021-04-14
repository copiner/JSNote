
function foo(){
    var a = 2;
    console.log("foo", this.a);
    console.log("foo", this.bar);//undefined
    this.bar();
}

function bar(){
    console.log("bar",this.a)
}

foo();
