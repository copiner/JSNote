/*
Reflect.isExtensible(target)

该方法的作用是检查一个对象是否可以扩展的，也就是说对象里面是否可以添加新的属性或方法。
target参数表示目标对象。如果该目标对象不是一个对象的话，那么函数会抛出一个异常。
该函数会返回一个Boolean值，如果为true的话，说明该对象可以扩展，否则的话返回false，表示该对象不可以扩展
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
