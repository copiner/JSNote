
var obj = { a:1 }
var handlers = {
    get(target, key, context){
        //target === obj
        //context === pobj
        console.log("accessing:", key);

        return Reflect.get(target, key, context);
    }
}

var pobj = new Proxy(obj, handlers);

console.log(obj.a);
console.log(pobj.a);
