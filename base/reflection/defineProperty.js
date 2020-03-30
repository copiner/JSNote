/*
Reflect.defineProperty(target,name,desc)

该方法与Object.defineProperty方法类似的，不过唯一的区别是 Reflect.defineProperty返回值是一个Boolean的值
*/
const obj = {};
// 使用 Object.defineProperty
try {
  Object.defineProperty(obj, 'a', {
    value: 22
  })
} catch(e) {
  console.log('define property failed');
}

// 使用 Reflect.defineProperty

const result = Reflect.defineProperty(obj, 'b', {
  configurable: true,
  enumerable: true
});

console.log(result); // true
