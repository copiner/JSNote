//javascript对象引用与赋值
var arr1 = new Array(0,1,2);
var arr2 = arr1;

arr1[0] = 100;

console.log(arr1[0]);
console.log(arr2[0]);
/*
new Array生成的数组对象保存在内存中,而new Array把它所在的地方告诉了arr1,
arr1又把这地址告诉了arr2,他们两个都指向的是new Array生成对象的地址,
所以通过其中的一个去修改值时其时是修改他们同指向的那对象.
*/

var v1 = "ABC";
var v2 = v1;
v1 = "DEF";

console.log(v1);
console.log(v2);
/*
如果真要复制对象互不影响，则要通过转换赋值或者遍历赋值,
对象的子对象也是引用，所以遍历赋值的时候要判断，子元素是否是对象，
如果子元素是对象，则继续对子元素进行遍历赋值
*/
//------------------------转换赋值-------------------------------------
var obj1 = {a:1,b:2,c:3,d:[0,1,2,3]};
var str = JSON.stringify(obj1);
var obj2 = JSON.parse(str);
obj2["e"] = 4;
obj2["d"][0] = 11;
console.log(obj1);
console.log(obj2);

//-------当对象引用做为函数参数传递时候，依然会相互影响---------------------

var data = {a:1,b:2,c:3,d:{q:4,w:5,e:6}};
var data1 = data;
function con(data2){
data2["r"] = 5;
console.log(JSON.stringify(data2));
}
con(data1);
console.log(JSON.stringify(data));

//---------------------对象引用赋值后，如果将对象置空，相互间是不受影响的----

var nex = {"a":"1","b":"2"};
var nex1 = nex;
nex = {};
nex["a"] = 2;
console.log(nex);
console.log(nex1);
