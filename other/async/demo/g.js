var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 模拟出错了，返回 ‘error’
            reject('error');
        }, time);
    })
};
//async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
//当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句
var start = async function () {
    try {
        console.log('start');
        await sleep(3000); // 这里得到了一个返回错误

        // 所以以下代码不会被执行了
        console.log('end');
    } catch (err) {
        console.log(err); // 这里捕捉到错误 `error`
    }
};
