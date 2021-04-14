function Test3(a, b) {
    this.a = a;
    this.b = b;
}
Test3.prototype.add = function () {
    return this.a + this.b;
}

// 如果不用 bind，正常来说这样处理
var t1 = new Test3(1, 2);
t1.add(); // 3, this 指向 t1

// 使用 bind
var NewTest3 = Test3.bind(null, 3);
var t2 = new NewTest3(4);
t2.add(); // 7, this 指向 t2
