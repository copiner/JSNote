
### Proxy

在handler中定义的基本操作的拦截器,拦截器有13种：
apply 、construct、defineProperty、deleteProperty、get、getOwnPropertyDescriptor、getPrototypeOf、has、isExtensible
ownKeys、preventExtensions、set、setPrototypeOf

并非所有捕获器行为都像get那么简单，为了简化操作，我们可以直接调用全局Reflect，Reflect反射是在一个在全局中定义好的，包含了上述方法的对象，我们可以轻松通过同名方法重建
```

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

pobj.b = 4;
pobj.bar();

```
甚至我们可以使用Reflect直接一次性设置代理中的所有捕获器

```javascript

const proxy = new Proxy(target, Reflect)

```
