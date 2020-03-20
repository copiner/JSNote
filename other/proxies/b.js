/*
We can make our proxy a bit more interesting by adding traps. Traps allow you to intercept interactions with target in different ways, as long as those interactions happen through proxy. We could use a get trap to log every attempt to pull a value out of a property in target

The proxy below is able to track any and every property access event because it has a handler.get trap. It can also be used to transform the value we get out of accessing any given property. We can already imagine Proxy becoming a staple when it comes to developer tooling
*/


var handler = {
  get (target, key) {
//    console.info(`Get on property "${key}"`)
    return target[key]
  }
}
var target = {}
var proxy = new Proxy(target, handler)
proxy.a = 'b'
proxy.a
// <- 'Get on property "a"'
proxy.b
// <- 'Get on property "b"'


console.log(proxy.a);
console.log(proxy.b);
