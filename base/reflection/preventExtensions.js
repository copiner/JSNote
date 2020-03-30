/*
Reflect.preventExtensions(target)

阻止新的属性添加到对象中去。target参数必须是一个对象，否则的话会抛出一个异常
*/
const obj = {};
// 判断该对象是否可以扩展，使用 Reflect.isExtensible 该方法
const t1 = Reflect.isExtensible(obj);
console.log(t1);  // true

// 使用 Reflect.preventExtensions 来阻止该对象扩展

Reflect.preventExtensions(obj);

// 再来扩展下该对象，看是否可以
const t2 = Reflect.isExtensible(obj);

console.log(t2); // false

obj.name = 'copiner';

console.log(obj);//{}
