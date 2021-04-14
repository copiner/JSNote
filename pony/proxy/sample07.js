
var obj = {
    a:1,
    foo(){
        console.log("a:", this.a);
    }
};

var handlers = {
    get(){        
        throw "No such property/method!";
    },
    set(){
        throw "No such property/method!";
    }
}

var pobj = new Proxy({}, handlers);

Object.setPrototypeOf(obj, pobj);

obj.a = 3;
obj.foo();

obj.b = 4;
obj.bar();
