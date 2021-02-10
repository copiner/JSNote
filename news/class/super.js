
class Pa{
    foo(){
        console.log("pa.foo");
    }
}

class Ca extends Pa{
    foo(){
        super();
    }
}

var c1 = new Ca();
c1.foo();//pa.foo

var Da = {
    foo:function(){
        console.log("da.foo");
    }
}

var Ea = {
    foo:Ca.prototype.foo
}

Object.setPrototypeOf(Ea,Da);

Ea.foo();//pa.foo

//good
var Fa = {
    foo:function{
        console.log("Fa.foo");
    }
}

var Ga = Object.create(Fa);

Ga.foo = Ca.prototype.foo.toMethod(Fa, "foo");

Ga.foo();//Fa.foo
