
Reflect是ES6为了操作对象而新增的API, why Reflect

1. 将Object对象的一些明显属于语言内部的方法(比如Object.defineProperty)，放到Reflect对象上，
那么以后我们就可以从Reflect对象上可以拿到语言内部的方法.

2. 在使用对象的 Object.defineProperty(obj, name, {})时，如果出现异常的话，会抛出一个错误，需要使用try catch去捕获，
但是使用 Reflect.defineProperty(obj, name, desc) 则会返回false

```
try {
  Object.defineProperty(target, property, attributes);
} catch(e) {
  // 失败
}

// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

Reflect对象一共有13个静态方法
