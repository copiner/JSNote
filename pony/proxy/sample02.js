/*
在handler中定义的基本操作的拦截器,拦截器有13种：
apply 、construct、defineProperty、deleteProperty、get、getOwnPropertyDescriptor、getPrototypeOf、has、isExtensible
ownKeys、preventExtensions、set、setPrototypeOf

并非所有捕获器行为都像get那么简单，为了简化操作，我们可以直接调用全局Reflect，Reflect反射是在一个在全局中定义好的，包含了上述方法的对象，我们可以轻松通过同名方法重建

甚至我们可以使用Reflect直接一次性设置代理中的所有捕获器
const proxy = new Proxy(target, Reflect)
*/
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

console.log(proxy.a)
