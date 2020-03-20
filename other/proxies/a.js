
/*
 In a nutshell, you can use a Proxy to determine behavior whenever the properties of a target object are accessed. A handler object can be used to configure traps for your Proxy

By default, proxies don¡¯t do much ¨C in fact they don¡¯t do anything. If you don¡¯t set any `options`, your proxy will just work as a pass-through to the target object
*/

var target = {}
var handler = {}

var proxy = new Proxy(target,handler)
proxy.a = 'b';

console.log(target.a);

console.log(proxy.c === undefined);

