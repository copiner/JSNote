
var obj1 = {
    name:"obj-1",
    foo(){
        console.log("obj1.foo:", this.name);
    }
};

var obj2 = {
    name:"obj-2",
    foo(){
        console.log("obj2.foo:", this.name);
    },
    bar(){
        console.log("obj2.bar:", this.name);
    }
};

var handlers = {
    get(target,key,context){
        if(Reflect.has(target, key)){
            return Reflect.get(target, key, context);
        }
        else {
            for(var p of target[ Symbol.for("[[Prototype]]") ]){
                if(Reflect.has(p, key)){
                    return Reflect.get(p, key, context);
                }
            }
        }
    }
};

var obj3 = new Proxy({
    name:"obj-3",
    baz(){
        this.foo();
        this.bar();
    }
},handlers);

obj3[ Symbol.for("[[Prototype]]") ] = [obj1, obj2];

obj3.baz();
