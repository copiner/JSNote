
var handlers = {
    get(target, key, context){

        if(Reflect.has(target, key)){
            return Reflect.get(target, key, context);
        }
        else {
            return Reflect.get(target[Symbol.for("[[Prototype]]")], key, context)
        }
        
    }
}


var obj1 = new Proxy({
    name:"obj1",
    foo(){
        console.log("foo:", this.name);
    }
},handlers)


var obj2 = Object.assign(
    Object.create(obj1),
    {
        name:"obj2",
        bar(){
            console.log("bar:", this.name);
            this.foo();
        }
    }
)

obj1[Symbol.for("[[Prototype]]")] = obj2;

obj1.bar();
obj2.foo();


