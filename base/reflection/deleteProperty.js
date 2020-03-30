/*
Reflect.deleteProperty(target,name)

该方法用于删除一个对象上的属性，它和delete操作符类似的。
参数如下：
target: 表示要操作的对象。
name: 表示要删除该对象上的属性。
该函数返回值是一个Boolean的值，如果成功的话，返回true，失败的话返回false
*/
const obj = {
  name: 'copiner',
  age: 29
};

let test1 = Reflect.deleteProperty(obj, 'name');
console.log(test1);  // true
console.log(obj); // {age: 30}

// 如果删除对象上不存在的属性的话，也是返回true的
let test2 = Reflect.deleteProperty(obj, 'xx');
console.log(test2); // true
console.log(obj); // {age: 30}

let test3 = Reflect.deleteProperty(obj, 'age');
console.log(test3); // true
console.log(obj); // {}
