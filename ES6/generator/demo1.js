
function* foo(x) {
  var y = 2 * (yield (x + 1));
  console.log("y : "+y);
  var z = yield (y / 3);
  console.log("z : "+z);
  console.log("x + y + z : "+ (x + y + z));
  return (x + y + z);
}

var a = foo(5);
a.next();
a.next();
a.next();
// Object{value:6, done:false}
// Object{value:NaN, done:false}
// Object{value:NaN, done:true}

//next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。

var b = foo(5);
b.next()
b.next(12);
b.next(13);

// { value:6, done:false }
// { value:8, done:false }
// { value:42, done:true }
