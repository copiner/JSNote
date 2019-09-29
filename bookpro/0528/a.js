
/*
基本数据类型：Undefined Null Boolean Number String
引用数据类型：
*/

/*
ECMAScript 中所有的函数都是按值传递的
在向参数传递基本数据类型时，被传递的值会被复制给一个局部变量
（及命名参数，或者用ECMAScript的概念来说，就是arguments对象中的一个元素）
在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量
的变化会反映在函数的外部。
*/

function addTen(num){
    num += 10;
    return num;
}
var count = 20;

var result = addTen(count);
console.log(count)
console.log(result)

function setName(obj){
    obj.name = 'Nicholas';
}

var person = new Object();
setName(person);
console.log(person.name);

function setName1(obj){
    obj.name = 'Mechel';
    obj = new Object();
    obj.name = 'Grey';
}

var author = new Object();
setName1(author);
console.log(author.name);
