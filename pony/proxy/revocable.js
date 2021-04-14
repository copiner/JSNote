
//Revocable Proxies
/*
We can use Proxy.revocable in a similar way to Proxy. The main differences are that the return value will be { proxy, revoke }, and that once revoke is called the proxy will throw on any operation.
*/

var target = {}
var handler = {}
var {proxy,revoke} = Proxy.revocable(target,handler);

proxy.a = 'b';

console.log(proxy.a);

revoke()

console.log(proxy.a)
