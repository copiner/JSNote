### JS中的 堆，栈，队列 宏任务 微任务
event loop是一个执行模型，在不同的地方有不同的实现。浏览器和NodeJS基于不同的技术实现了各自的Event Loop。

浏览器的Event Loop是在html5的规范中明确定义。

NodeJS的Event Loop是基于libuv实现的。可以参考Node的官方文档以及libuv的官方文档。

libuv已经对Event Loop做出了实现，而HTML5规范中只是定义了浏览器中Event Loop的模型，具体的实现留给了浏览器厂商

`宏队列和微队列`

宏队列，macrotask，也叫tasks。 一些异步任务的回调会依次进入macro task queue，等待后续被调用，这些异步任务包括：
```
setTimeout
setInterval
setImmediate (Node独有)
requestAnimationFrame (浏览器独有)
I/O
UI rendering (浏览器独有)
```
微队列，microtask，也叫jobs。 另一些异步任务的回调会依次进入micro task queue，等待后续被调用，这些异步任务包括：
```
process.nextTick (Node独有)
Promise
Object.observe
MutationObserver
```


浏览器的事件循环Event Loop：
```
1.执行全局Script同步代码，这些同步代码有一些是同步语句，有一些是异步语句（比如setTimeout等）;

2.全局Script代码执行完毕后，调用栈Stack会清空；

3.从微队列microtask queue中取出位于队首的回调任务，放入调用栈Stack中执行，执行完后microtask queue长度减1；

4.继续取出位于队首的任务，放入调用栈Stack中执行，以此类推，直到直到把microtask queue中的所有任务都执行完毕。注意，如果在执行microtask的过程中，又产生了microtask，那么会加入到队列的末尾，也会在这个周期被调用执行；

5.microtask queue中的所有任务都执行完毕，此时microtask queue为空队列，调用栈Stack也为空；

6.取出宏队列macrotask queue中位于队首的任务，放入Stack中执行；

7.执行完毕后，调用栈Stack为空；

重复第3-7个步骤；

重复第3-7个步骤；
...
```


NodeJS的Event Loop中，执行宏队列的回调任务有6个阶段:

```
1. timers阶段：这个阶段执行setTimeout和setInterval预定的callback

2. I/O callback阶段：执行除了close事件的callbacks、被timers设定的callbacks、setImmediate()设定的callbacks这些之外的callbacks

3. idle, prepare阶段：仅node内部使用

4. poll阶段：获取新的I/O事件，适当的条件下node将阻塞在这里

5. check阶段：执行setImmediate()设定的callbacks

6. close callbacks阶段：执行socket.on('close', ....)这些callbacks

```

NodeJS中宏队列主要有4个

由上面的介绍可以看到，回调事件主要位于4个macrotask queue中：

Timers Queue
IO Callbacks Queue
Check Queue
Close Callbacks Queue
这4个都属于宏队列，但是在浏览器中，可以认为只有一个宏队列，所有的macrotask都会被加到这一个宏队列中，但是在NodeJS中，不同的macrotask会被放置在不同的宏队列中。

NodeJS中微队列主要有2个：

Next Tick Queue：是放置process.nextTick(callback)的回调任务的
Other Micro Queue：放置其他microtask，比如Promise等
