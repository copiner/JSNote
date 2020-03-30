//Object.defineProperty(obj, prop, descriptor)

let  obj = Object.create(null);
let descriptor = {
    configurable:false,
    writable:false,
    enumerable:false,
    value:'hello world'
};
Object.defineProperty(obj,'hello',descriptor);

console.log(obj.hello);//hello world
obj.hello = "hi";
console.log(obj.hello);//hello world
//在JS中对象具有两种属性，分别是数据属性和访问器属性，所以其描述符也根据属性分类，分为数据描述符和访问器描述符,
//在使用描述符时，必须是两种形式之一，且两者不能同时使用


console.log("-------------------------------------")

/*
数据描述符,它具有以下可选的键值：

configurable：表示该属性能否通过delete删除，能否修改属性的特性或者能否修改访问器属性，`默认为false`。当且仅当该属性的configurable为true时，才能实现上述行为。

enumerable：表示该属性是否可以枚举，即可否通过for in访问属性。`默认为false`。

value：表示该属性的值。可以是任何有效的JS值。默认为undefined。

writable：表示该属性的值是否可写，`默认为false`。当且仅当属性的writable为true时，其值才能被赋值运算符改变。
*/

let obj1 = {
    hello:'world'
};

console.log(Object.getOwnPropertyDescriptor(obj1, 'hello'));


console.log("-------------------------------------")

/*
访问器描述符,它具有以下可选的键值：
configurable：表示该属性能否通过delete删除，能否修改属性的特性或者能否修改访问器属性，默认为false。当且仅当该属性的configurable为true时，才能实现上述行为。

enumerable：表示该属性是否可以枚举，即可否通过for..in访问属性。默认为false。

get：在读取属性时调用的函数，默认值为undefined。

set：在写入属性时调用的函数，默认值为undefined。
*/

// let obj2 = {
//     _hello:'hello world', //表示私有变量
//
//     get hello(){
//       console.log('get: ');
//       return this._hello;
//     },
//
//     set hello(val){
//       console.log('val: ' + val);
//       this._hello = val;
//     }
//
// };


//or

let obj2 = {
    _hello:'hello world' //表示私有变量
};
Object.defineProperty(obj2,'hello',{
    // 下面两个缩写等价于：
    // get : function() { return this._hello; },
    // set : function(value) { this._hello = value; },
    get (){
        return this._hello;
    },
    set (value){
        this._hello = value;
    }

});


console.log(obj2.hello);
obj2.hello = 'goodbye';
console.log(obj2.hello);

console.log("-------------------------------------")

function Hello() {
    let hello = 'hello world';
    Object.defineProperty(this, 'hello', {
        get(){
            console.log('get');
            return hello;
        },
        set(value){
            console.log('set');
            hello = value;
        }
    })
}

let obj3 = new Hello();
console.log(obj3.hello);
obj3.hello = 'goodbye';
console.log(obj3.hello); 

//Vue.js实现数据双向绑定的原理就是用的Object.defineProperty
/*
示例：当输入框改变时，页面显示也会改变
const obj = {};
Object.defineProperty(obj, 'text', {
    get() {
        console.log('get val');
    },
    set(newVal) {
        console.log('set val:' + newVal);
        document.getElementById('input').value = newVal;
        document.getElementById('span').innerHTML = newVal;
    }
});

const input = document.getElementById('input');
input.addEventListener('keyup', function(e){
    obj.text = e.target.value;
});
*/
