
//Default Behavior in Proxy Traps

/*
We¡¯ve already talked about how traps are mapped one-to-one to Reflect methods. We haven¡¯t yet touched on the fact that their interfaces match as well. That is to say, both their arguments and their return values match. In code, this means you could do something like this to get the default get trap behavior in your proxy handlers
*/

var handler = {
  get () {
    return Reflect.get(...arguments)
  }
}
var target = { a: 'b' }
var proxy = new Proxy(target, handler)
console.log(proxy.a)
/*
There is, in fact, nothing stopping you from making that handler even simpler. Of course, at this point you¡¯d be better off leaving the trap out entirely.
*/
var handler = {
  get: Reflect.get
}
/*
The important take-away here is that you could set up a trap in your proxy handlers, wire up some custom functionality that ends up throwing or logging a console statement, and then in the default case you could just use the one-liner recipe found below.
*/

return Reflect[trapName](...arguments)

//Certainly puts me at ease when it comes to demystifying Proxy.
