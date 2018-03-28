### Async/await语法
Promise写法
```javascript
const makeRequest = () =>
    getJSON()
        .then(data => {
            console.log(data)
            return "done"
        })

makeRequest()
```
async/await写法
```javascript
const makeRequest = async () => {
    console.log(await getJSON())
    return "done"
}

makeRequest()
```

例子：下面代码指定50毫秒以后，输出hello world。
```javascript
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 50);
```

### Error handling
JSON.parse过程中的问题，原因是这个错误发生在Promise内部。想要处理这种情况下的错误，我们只能再嵌套一层try/catch，就像这样：
```javascript
const makeRequest = () => {
    try {
    getJSON()
        .then(result => {
            // this parse may fail
            const data = JSON.parse(result)
            console.log(data)
        })
        // uncomment this block to handle asynchronous errors
        // .catch((err) => {
        //   console.log(err)
        // })
        }
    catch (err) {
        console.log(err)
    }
}
```

但是，如果用async/await处理，一切变得简单，解析中的错误也能轻而易举的解决：
```javascript
const makeRequest = async () => {
      try {
          // this parse may fail
          const data = JSON.parse(await getJSON())
          console.log(data)
      }
      catch (err) {
          console.log(err)
      }
   }
```
### Conditionals

想象一下这样的业务需求：我们需要先拉取数据，然后根据得到的数据判断是否输出此数据，或者根据数据内容拉取更多的信息。如下：
```javascript
const makeRequest = () => {
    return getJSON()
        .then(data => {
            if (data.needsAnotherRequest) {
                return makeAnotherRequest(data)
                        .then(moreData => {
                            console.log(moreData)
                            return moreData
                        })
            }
            else {
                console.log(data)
                return data
            }
        })
}
```

使用async/await，我们就可以轻而易举的写出可读性更高的代码：
```javascript
const makeRequest = async () => {
    const data = await getJSON()
    if (data.needsAnotherRequest) {
        const moreData = await makeAnotherRequest(data);
        console.log(moreData)
        return moreData
    }
    else {
        console.log(data)
        return data    
    }
}
```

### Intermediate values
一个经常出现的场景是，我们先调起promise1，然后根据返回值，调用promise2，之后再根据这两个Promises得值，调取promise3。使用Promise，我们不难实现
```javascript
const makeRequest = () => {
    return promise1()
        .then(value1 => {
            // do something
            return promise2(value1)
                .then(value2 => {
                    // do something          
                    return promise3(value1, value2)
                })
        })
}
```
如果你难以忍受这样的代码，我们可以优化我们的Promise，方案是使用Promise.all来避免很深的嵌套。就像这样：
```javascript
const makeRequest = () => {
    return promise1()
        .then(value1 => {
            // do something
            return Promise.all([value1, promise2(value1)])
        })
        .then(([value1, value2]) => {
            // do something          
            return promise3(value1, value2)
        })
}
```
Promise.all这个方法牺牲了语义性，但是得到了更好的可读性。

同样的场景，使用async/await会非常简单：
```javascript
const makeRequest = async () => {
    const value1 = await promise1()
    const value2 = await promise2(value1)
    return promise3(value1, value2)
}
```
### Error stacks

想象一下我们链式调用了很多promises，一级接一级。紧接着，这条promises链中某处出错，如下：
```javascript
const makeRequest = () => {
    return callAPromise()
        .then(() => callAPromise())
        .then(() => callAPromise())
        .then(() => callAPromise())
        .then(() => callAPromise())
        .then(() => {
            throw new Error("oops");
        })
}

makeRequest()
    .catch(err => {
        console.log(err);
        // output
        // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
    })
```

此链条的错误堆栈信息并没用线索指示错误到底出现在哪里。更糟糕的事，他还会误导开发者：错误信息中唯一出现的函数名称其实根本就是无辜的。

我们再看一下async/await的展现：

```javascript
const makeRequest = async () => {
    await callAPromise()
    await callAPromise()
    await callAPromise()
    await callAPromise()
    await callAPromise()
    throw new Error("oops");
}

makeRequest()
    .catch(err => {
        console.log(err);
        // output
        // Error: oops at makeRequest (index.js:7:9)
    })
```

也许这样的对比，对于在本地开发阶段区别不是很大。但是想象一下在服务器端，线上代码的错误日志情况下，将会变得非常有意义。

### Debugging
最后一点，但是也是很重要的一点，使用async/await来debug会变得非常简单。

在一个返回表达式的箭头函数中，我们不能设置断点，这就会造成下面的局面：
```javascript
const makeRequest = () => {
    return callAPromise()
        .then(()=>callAPromise())
        .then(()=>callAPromise())
        .then(()=>callAPromise())
        .then(()=>callAPromise())
}
```
### 但是使用async/await时：
```javascript
const makeRequest = async () => {
    await callAPromise()
    await callAPromise()
    await callAPromise()
    await callAPromise()
}
```
