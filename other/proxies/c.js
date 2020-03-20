/*
The Proxy in the example below prevents property access for both get and set (via a handler.set trap) while accessing target through proxy

Note how set always returns true here

 this means that setting the property key to a given value should succeed. If the return value for the set trap is false, setting the property value will throw a TypeError under strict mode, and otherwise fail silently.
*/

var handler = {
    get(target, key){
        invariant(key,'get')
        return target[key]
    },
    set(target, key, value){
        invariant(key,'set');
        return true
    }
}

function invariant(key, action){
    if(key[0] === '_'){
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}

var target = {}
var proxy = new Proxy(target, handler)
proxy.a = 'b';

console.log(proxy.a);

proxy._prop

proxy._prop = 'c';


function proxied () {
  var target = {}
  var handler = {
    get (target, key) {
      invariant(key, 'get')
      return target[key]
    },
    set (target, key, value) {
      invariant(key, 'set')
      return true
    }
  }
  return new Proxy(target, handler)
}
