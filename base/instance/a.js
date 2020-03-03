/*
instanceof的普通的用法，obj instanceof Object 检测Object.prototype是否存在于参数obj的原型链上
*/

functionPerson(){};
var p =new Person();
console.log(p instanceof Person);//true


var a = new Array();

a instanceof Array// true，

a instanceof Object //也会返回 true;
