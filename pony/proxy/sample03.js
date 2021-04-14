
var obj = { a:1 };
var handlers = {
    get(target, key, context){
        //target === obj
        //context === pobj
        console.log("accessing:", key);
        return target[key];
    }
}

var {proxy:pobj, revoke:prevoke} = Proxy.revocable(obj, handlers);

pobj.a;
prevoke();

pobj.a;
