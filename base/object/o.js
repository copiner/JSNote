/*
Object.keys() //返回值 一个表示给定对象的所有可枚举属性的字符串数组
Object.values()
Object.getOwnPropertyNames()
*/
//Object.keys()
let person = {name:"ws",age:25,address:"sz",getName:function(){}}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log('--------------------');
let arr = [4,7,3,9,5,6]

console.log(Object.keys(arr));

console.log('--------------------');
let str = "saasdrthg";

console.log(Object.keys(str));

console.log('--------------------');
Object.keys(person).map((key)=>{

　　console.log(person[key]) // 获取到属性对应的值，做一些处理

})
console.log('--------------------');
//or
for(var key of Object.keys(person)){
    console.log(key+": "+person[key]);
}

//Object.values()和Object.keys()是相反的操作，把一个对象的值转换为数组

/*
Object.getOwnPropertyNames() 一个对象，其自身的可枚举和不可枚举属性的名称被返回,该方法不会获取到原型链上的属性
*/
console.log('--------------------');
var arr1 = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr1).sort()); // ["0", "1", "2", "length"]

var obj1 = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj1).sort()); // ["0", "1", "2"]

// 使用Array.forEach输出属性名和属性值
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// 输出
// 0 -> a
// 1 -> b
// 2 -> c

//不可枚举属性
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"]


function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass() {
  this.prop = 5;
  this.method = function() {};
}

ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function() {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass()  // ["prop", "method"]
  )
);

//下面的例子使用了 Array.prototype.filter() 方法，
//从所有的属性名数组（使用Object.getOwnPropertyNames()方法获得）中去除可枚举的属性（使用Object.keys()方法获得），
//剩余的属性便是不可枚举的属性了

var myObject = {

}
var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function(key) {
    var indexInEnum = enum_only.indexOf(key);
    if (indexInEnum == -1) {
        // 没有发现在enum_only健集中意味着这个健是不可枚举的,
        // 因此返回true 以便让它保持在过滤结果中
        return true;
    } else {
        return false;
    }
});

console.log(nonenum_only);

//注意 在 ES5 中，如果参数不是一个原始对象类型，将抛出一个 TypeError 异常。在 ES2015 中，非对象参数被强制转换为对象
