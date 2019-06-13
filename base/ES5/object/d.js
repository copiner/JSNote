//定义 getters 与 setters


//使用getter和setter方法扩展 Date原型，为预定义好的Date类添加一个year的属性。
//定义属性year的getter和setter方法用到了Date类中已存在的getFullYear和setFullYear方法。
var d = Date.prototype;
Object.defineProperty(d, "year", {
  get: function() { return this.getFullYear() },
  set: function(y) { this.setFullYear(y) }
});

var now = new Date();
//console.log(now.year);//get
now.year = 2016;//set
//console.log(now);

//添加getter或setter方法

//1
var o = {
  a: 7,
  get b() { return this.a + 1; },
  set c(x) { this.a = x / 2; }
};

console.log(o.b)

o.c = 8;
console.log(o.b)
//2
var ob = { a: 0 }

Object.defineProperties(ob, {
    "b": { get: function () { return this.a + 1; } },
    "c": { set: function (x) { this.a = x / 2; } }
});

ob.c = 10 // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(ob.b) // Runs the getter, which yields a + 1 or 6
