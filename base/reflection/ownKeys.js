/*
Reflect.ownKeys(target)

返回由目标对象自身的属性键组成的数组。如果这个目标对象不是一个对象的话，那么该函数就会抛出一个异常
*/
const obj = {
  name: 'copiner',
  age: 29
};

console.log(Reflect.ownKeys(obj)); // ['name', 'age'];
