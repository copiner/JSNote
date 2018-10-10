### 生成器

生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议。

### 方法
```
Generator.prototype.next()
```
返回一个由 yield表达式生成的值。
```
Generator.prototype.return()
```
返回给定的值并结束生成器。
```
Generator.prototype.throw()
```
向生成器抛出一个错误。

### 一个无限迭代器
```
function* idMaker(){
    let index = 0;
    while(true)
        yield index++;
}

let gen = idMaker(); // "Generator { }"

console.log(gen.next().value);
// 0
console.log(gen.next().value);
// 1
console.log(gen.next().value);
// 2
// ...
```
