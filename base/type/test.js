/*
typeof 一般只能返回如下几个结果："number"、"string"、"boolean"、"object"、"function" 和 "undefined"。
*/

typeof 0;  //number;
typeof true;  //boolean;
typeof undefined;  //undefined;
typeof "hello world"   //string;
typeof function(){};   //function;

typeof null; //object
typeof {};  //object;
typeof []; //object

console.log(typeof 0)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof "hello world")
console.log(typeof function(){})

console.log(typeof null)
//对象和数组都返回object
console.log(typeof {})
console.log(typeof [])

/*
instanceof
*/

var a = {};
a instanceof Object  //true
a intanceof Array     //false
var b=[];

//因为数组属于object中的一种，所以数组instanceof object,也是true
b instanceof Array  //true
b instanceof  Object //true

//instanceof不能区分基本类型string和boolean,除非是字符串对象和布尔对象
var c='abc';
c instanceof String; //false
var d=new String();
d instanceof String  //true


/*
constructor
*/
var o={};
o.constructor==Object  //true
var arr=[];
arr.constructor==Array  //true
arr.constructor==Object //false

var n=true;
n.constructor==Boolean  //true
var num=1;
num.constructor==Number  //true
var str='hello world';
str.constructor==String     //true

var num=new Number();
num.constructor==Number   //true

//constructor属性是可以被修改的，会导致检测出的结果不正确
function Person(){

}
function Student(){

}
Student.prototype = new Person();
var John = new Student();
console.log(John.constructor==Student); // false
console.log(John.constructor==Person); // true

/*
Object.prototype.toString.call()
*/
Object.prototype.toString.call(123)
//"[object Number]"

Object.prototype.toString.call('str')
//"[object String]"

Object.prototype.toString.call(true)
//"[object Boolean]"

Object.prototype.toString.call({})
//"[object Object]"

Object.prototype.toString.call([])
//"[object Array]"



/*jquery
$.type接口
*/
$.type([])    //array
$.isArray([]); //true
$.isFunction(function(){}); //true
$.isPlainObject({}); //true
$.isPlainObject([]); //false
