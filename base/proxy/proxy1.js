/*
Object.defineProperty
不能监听数组的变化,数组的这些方法(push, pop, shift, unshift,splice, sort, reverse)是无法触发set的
必须遍历对象的每个属性,使用 Object.defineProperty() 多数要配合 Object.keys() 和遍历
必须深层遍历嵌套的对象


Object.keys(obj).forEach(key => {
  Object.defineProperty(obj, key, {
    // ...
  })
})
*/


/*
proxy 不需要对 keys 进行遍历。这解决Object.defineProperty() 的第二个问题.Proxy 是针对整个 obj 的。
所以 obj 内部包含的所有的 key ，都可以走进 set

proxy 支持数组

proxy 嵌套支持: get里面递归调用 Proxy 并返回
*/
let obj = {
  name: 'copiner',
  age: 29
}
let handler = {
  get (target, key, receiver) {
    console.log('get', key)
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  }
}
let proxy = new Proxy(obj, handler)
proxy.name = 'rq' // set name rq
proxy.age = 18 // set age 18

console.log(obj)
console.log("---------------------")
//数组

let arr = [3,2,7]
let proxy1 = new Proxy(arr, {
    get (target, key, receiver) {
        console.log('get', key)
        return Reflect.get(target, key, receiver)
    },
    set (target, key, value, receiver) {
        console.log('set', key, value)
        return Reflect.set(target, key, value, receiver)
    }
})
proxy1.push(5)

console.log(arr);
console.log("---------------------")
//嵌套
let obj2 = {
  info: {
    name: 'eason',
    blogs: ['webpack', 'babel', 'cache']
  }
}
let handler2 = {
  get (target, key, receiver) {
    console.log('get', key)
    // 递归创建并返回
    if (typeof target[key] === 'object' && target[key] !== null) {
      return new Proxy(target[key], handler)
    }
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  }
}
let proxy2 = new Proxy(obj2, handler2)

proxy2.info.name = 'Zoe'
proxy2.info.blogs.push('proxy')
