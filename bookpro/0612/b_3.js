/*
箭头函数根本没有自己的this，导致内部的this指向了外层代码的this，
这个指向在定义时就已经确定而不会在调用时指向其执行环境的（变量）对象
*/
function foo() {
    console.log("id1:", this.id);
    console.log("this1:", this);
    setTimeout(() => {
        console.log("id2:", this.id);
        console.log("this2:", this);
    }, 0);
}

var id = 21;

foo();

// Chrome
// id1: 21
// this1: window
// id2: 21
// this2: window

foo.call({id: 42});

// Chrome
// id1: 42
// this1: {id: 42}
// id2: 42
// this2: {id: 42}

/*
在定义阶段（调用函数前），foo函数的this的值并不确定，
但箭头函数的this自定义阶段开始就指向foo函数的this了
*/
