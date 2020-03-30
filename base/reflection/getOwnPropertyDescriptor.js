/*
Reflect.getOwnPropertyDescriptor(target, name)

该方法的参数如下解析：
target: 表示的是目标对象。
name： 表示目标对象的属性
该方法的具体含义是：如果目标对象中的属性描述符存在的话，就返回这个属性描述符，如果不存在，就返回undefined。
*/
const obj = {};

Reflect.defineProperty(obj, 'name', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: '30'
});

const test1 = Reflect.getOwnPropertyDescriptor(obj, 'name');
/*
 打印值如下：
 {
  configurable: true
  enumerable: true
  value: "30"
  writable: true
 }
*/
console.log(test1);

const test2 = Reflect.getOwnPropertyDescriptor(obj, 'age');
console.log(test2); // undefined

// 如果第一个参数不是对象
const test3 = Object.getOwnPropertyDescriptor('str', 'name');
console.log(test3); // undefined

// 使用 try catch 包围，会执行 catch方法内部代码
try {
    const test4 = Reflect.getOwnPropertyDescriptor('str', 'name');
    console.log(test4);
} catch (e) {
    console.log('error');
}
