var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};

var start = async function () {//async 表示这是一个async函数，await只能用在这个函数里面。
    // 在这里使用起来就像同步代码那样直观
    console.log('start');
    await sleep(3000); //await 表示在这里等待promise返回结果了，再继续执行,await 后面跟着的应该是一个promise对象.
    console.log('end');
};

start();
