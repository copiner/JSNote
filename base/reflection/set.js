/*
Reflect.set(target,name,value,receiver)

上面的get方法是获取对象中的值，那么set就是设置该对象的属性值了，参数解析简单如下：
target: 我们需要操作的对象。
name: 我们需要设置该对象的属性名。
value: 我们要设置的属性值。
receiver： 可以理解为上下文this对象。如果我们在设置值的时候遇到setter函数，该参数就指向与setter中上下文this对象。
该函数会返回一个Boolean的值，代表在目标对象上设置属性是否成功。
*/

const obj3 = {
  age: 30,
  set name(name) {
    console.log(this);
  }
};

//const result = Reflect.set(obj3, 'age', 31);

//console.log(result); // true
//console.log(obj3); // {age: 31, set name:function}

//console.log(obj3.age); // 打印 31

/*
 如下代码，设置 obj对象中的name属性，因此打印 console.log(this)
 返回 {age: 31, set name:function}, console.log(result2)返回true，设置成功
*/
//const result2 = Reflect.set(obj3, 'name', 'copiner');
//console.log(result2); // true
//console.log(obj3);

/*
 先执行 set 中的name方法，打印 console.log(this)；this就指向了第四个参数 {test: 'test'}
 然后会打印 '-----';
*/
const r2 = Reflect.set(obj3, 'name', 'copiner', {test: 'test'}); // this: -->  { test: 'test' }
console.log(r2); // true
console.log(obj3); // { name: [Setter], age: 31 }
