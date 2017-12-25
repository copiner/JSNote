var co = require('co');

co(function *(){
    var now = Date.now();
    yield sleep(500);
    console.log(Date.now() - now);
})();

function sleep(ms){
    return function(cb){
        setTimeout(cb, ms);
    };
}

//基于co，我们就可以写出类似这样的业务代码
co(function *(){
    var rs = yield db.query('select url from xxx');
    rs.forEach(rs){
        var content = yield getUrl(rs.url);
        ...
    }
})();

//在这之前，我们只能用回调写法
db.query('select url from xxx', function(rs){
    rs.forEach(r){
        getUrl(r.url, function(content){
            ...
        });
    }
});

//数组并发
co(function* () {
  var ret = yield [
    get(1),
    get(2)
  ];
  console.log(ret);// [1, 2]
})();

//键值对并发
co(function* () {
  var data = yield {
    a: getA(),
    b: getB()
  };
  console.log(data); // { a: 'aaa', b: 'bbb' }
})();
