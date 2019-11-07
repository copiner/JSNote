/*
for...in
for...of(es6)
*/

/*
推荐在循环对象属性的时候，使用for...in,在遍历数组的时候的时候使用for...of。

for...in循环出的是key，for...of循环出的是value

注意，for...of是ES6新引入的特性。修复了ES5引入的for...in的不足

for...of不能循环普通的对象，需要通过和Object.keys()搭配使用
*/

let aArray = ['a',123,{a:'1',b:'2'}];


for(var index in aArray){
    console.log(index);
}
console.log("-----------------");
for(var value of aArray){
    console.log(value);
}
console.log("-----------------");
aArray.name = 'um';

for(var index in aArray){
    console.log(index);
}
console.log("-----------------");
for(var value of aArray){
    console.log(value);
}
console.log("-----------------");
console.log(Object.keys(aArray))
console.log("-----------------");
for(var value of Object.keys(aArray)){
    console.log(aArray[value]);
}

console.log("-----------------");
var student={
    name:'wu',
    age:22,
    locate:{
      country:'china',
      city:'hz',
      school:'hnu'
    }
}
for(var key of Object.keys(student)){
    console.log(key+": "+student[key]);
}
