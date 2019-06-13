
function foo() {
    console.log("id1:", this.id);
    console.log("this1:", this);
    setTimeout(function() {
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
// id2: 21
// this2: window

/*
setTimeout回调的代码都是在全局作用域环境中执行的，
因此（setTimeout回调）函数中this的值在非严格模式下指向window对象，
在严格模式下是undefined
*/
