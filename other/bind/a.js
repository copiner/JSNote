var obj = {
    init: 1,
    add: function(a, b) {
        return a + b + this.init;
    }
}
obj.add(1, 2); // 4

var plus = obj.add;
plus(3, 4); // NaN，因为 this.init 不存在，这里的 this 指向 window/global

plus.call(obj, 3, 4) // 8
plus.apply(obj, [3, 4]); // 8， apply 和 call 的区别就是第二个参数为数组
plus.bind(obj, 3, 4); // 返回一个函数，这里就是 bind 和 call/apply 的区别之一，bind 的时候不会立即执行,返回一个函数
plus.bind(obj, 3, 4)(); // 8



function temp(i){
  console.log(i);
}

var tt = temp.bind(null, 1);
tt()
