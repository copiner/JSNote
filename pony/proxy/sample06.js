
var obj = {
    a:1,
    foo(){
        console.log("a:", this.a);
    }
};

var handlers = {
    get(target, key, context){
        if(Reflect.has(target, key)){
            return Reflect.get(target, key, context);
        }
        else {
            throw "No such property/method!";
        }
    },
    set(target, key, val, context){
        if(Reflect.has(target, key)){
            return Reflect.set(target, key, val, context);
        }
        else {
            throw "No such property/method!";
        }
    }
}

var pobj = new Proxy(obj, handlers);

pobj.a = 3;
pobj.foo();

//pobj.b = 4;
//pobj.bar();
