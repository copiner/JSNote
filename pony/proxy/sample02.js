
var handlers = {
    getOwnPropertyDescriptor(target, prop){
        console.log("getOwnPropertyDescriptor");
        return Object.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(target, prop, desc){
        console.log("defineProperty");
        return Object.defineProperty(target, prop, desc)
    }
}


var proxy = new Proxy( {}, handlers );
proxy.a = 2;

