### ASYNC

### callback

```javascript
function A(callback){
    console.log("I am A");
    callback();
}
function B(){
   console.log("I am B");
}
//----------1------

A(B);

//----------2-----

A();
B();

```

#### ajax

Js是单线程的，但是有很多情况的执行步骤（ajax请求远程数据，IO等）是非常耗时的，如果一直单线程的堵塞下去会导致程序的等待时间过长页面失去响应，影响用户体验了

```javascript
var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);   //第三个参数决定是否采用异步的方式
xhr.send(data);
xhr.onreadystatechange = function(){
    if(xhr.readystate === 4 && xhr.status === 200){
       ///do something
    }
}
```

上面是一个代码，浏览器在发起一个ajax请求，会单开一个线程去发起http请求，这样的话就能把这个耗时的过程单独去自己跑了，在这个线程的请求过程中，readystate 的值会有个变化的过程，每一次变化就触发一次 onreadystatechange  函数，进行判断是否正确拿到返回结果。


#### Node读取文件

```javascript
var fs=require('fs');

function getMime(){
    fs.readFile('mine.json',function(err,data){
        return data;
    })
}
console.log(getMime());  /*由于异步操作没有拿到数据，如何解决，通过异步操作*/

```

```javascript
var fs=require('fs');
function getMime(callback){
    fs.readFile('mine.json',function(err,data){
        callback(data);
    })
}
getMime(function(result){
    console.log(result.toString());
})
```

### promise

```javascript
var fn = function(num) {
    return new Promise(function(resolve, reject) {
        if (typeof num == 'number') {
            resolve(num);
        } else {
            reject('TypeError');
        }
    })
}

fn("q").then(function(num) {
    console.log('first: ' + num);
    return num + 1;
}).then(function(num) {
    console.log('second: ' + num);
    return num + 1;
}).then(function(num) {
    console.log('third: ' + num);
    return num + 1;
}).catch(function(e){
    console.log('rejected');
    console.log(e);
});

```

### generator

```javascript
function delay(time) {
    console.log("in delay...");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("will resolve");
            resolve("aaa");
        }, time);
    });
}

function* useGenerator1(){
    console.log("use generator 1")
    let a = yield delay(1000);
    console.log("test sign");
    console.log("use generator 2")
    let b = yield delay(1000);
    console.log("use generator 3")
    let c = yield delay(1000);
    console.log("use generator 4")
    let d = yield delay(1000);
}

let iter = useGenerator1();
let result = iter.next();
console.log("before async.....");
result.value.then(()=>{
    console.log("after async.....2");
    iter.next();
})

```

```javascript

function thunk(iter) {
    let result = iter.next();
    if(result.done) {
        return;
    }
    result.value.then(()=>{
        thunk(iter);
    });
}

let iter = useGenerator1();
thunk(iter);

```

### async/await

```javascript
var fs=require('fs');

function getMime(){
    return new Promise(resolve => {
      fs.readFile('mine.json',function(err,data){
          resolve(data)
      })
    });
}

async function getIt(){
  var data = await getMime();
  console.log(data.toString());
  console.log("start");
}
getIt()
```
