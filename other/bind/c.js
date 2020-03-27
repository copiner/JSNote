// 柯里化
function test(x) {
    return function(y){
        return x + y;
    }
};
test(1)(2); // 3

// bind
function test2(a, b) {
    return a + b;
}
test2.bind(null, 1)(2); // 3
