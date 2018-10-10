// function *dowork(a) {
//     var sum = yield a + 2;
//     sum = yield a + 4;
//     sum = yield a + 5;
// }
// var gen = dowork(10);
// console.log(gen.next());

var fetch = require('node-fetch')

function* doWork() {
    var url = 'http://www.163.com';
    var url1 = 'http://www.sina.com';
    var result = yield fetch(url);
    var result1 = yield fetch(url1);
    console.log(result1);
}

var generator = doWork();
generator.next().value.then(function (data) {
    generator.next(data).value.then(function (data) {
        generator.next(data);
    })
});

//fetch函数是一个异步执行函数，返回promise对象
//整个doWork函数由两个异步函数构成最后打印其中一个异步函数的结果，
//由于每个next返回的是promise对象因此需要在then中处理数据
