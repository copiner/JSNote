/*Object.defineproperty 用于 监听 对象的数据变化

用法 Object.defineproperty(obj, key, descriptor)

例如：
*/
let obj = {
    age: 11
}

let val = 1

Object.defineproperty(obj, 'name', {
    get() {
        return val
    },
    set(newVal) {
        val = newVal
    }
})

obj.name

obj.name = 11
/*
此外 还有以下配置项 ：
1. configurable
2. enumerable
3. value

缺点：
1.无法监听数组变化
2.只能劫持对象的属性,属性值也是对象那么需要深度遍历

----------------------------------------------

proxy  可以理解为 在被劫持的对象之前 加了一层拦截

例如：
*/
let proxy = new Proxy({}, {
    get(obj, prop) {
        return obj[prop]
    },
    set(obj, prop, val) {
        obj[prop] = val
    }
})
/*
proxy返回的是一个新对象， 可以通过操作返回的新的对象打到目的
proxy有多达13种拦截方法,
get() , set() , apply() , has() , contruct() ps： 用于拦截new操作，
deleteProperty() , defineproperty() , enumerate() , getOwnPropertyDescriptor() ,
getPrototypeOf() , isExtensible() , ownKeys() , preventExtensions() , setPrototypeOf() ,


当使用 defineProperty 时，我们修改原来的 obj 对象就可以触发拦截
而使用 proxy，就必须修改代理对象，即 Proxy 的实例才可以触发拦截
*/

var validator = {
  set (target, key, value) {
    if (key === 'age') {
      if (typeof value !== 'number' || Number.isNaN(value)) {
        throw new TypeError('Age must be a number')
      }
      if (value <= 0) {
        throw new TypeError('Age must be a positive number')
      }
    }
    return true
  }
}
var person = { age: 27 }
var proxy = new Proxy(person, validator)
proxy.age = 'foo'
// <- TypeError: Age must be a number
proxy.age = NaN
// <- TypeError: Age must be a number
proxy.age = 0
// <- TypeError: Age must be a positive number
proxy.age = 28
console.log(person.age)
// <- 28
