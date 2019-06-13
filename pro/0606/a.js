/*
函数参数，对必需值使用命名参数，对可选参数使用对象字面量来封装

访问对象属性，一种是使用点表示法，一种使用方括号表示法，
方括号表示法一个优点是可以通过变量来访问属性
*/

function display(type, args){

    var temp = '';
    if(typeof args.name == 'string'){
        temp += 'name : '+args.name;
    }

    if(typeof args.age == 'number'){
        temp += 'age: ' + args.age;
    }

    return temp;
}
var obj = {
    name:'Nich',
    age:29
}
var tt = display('01',obj)

console.log(tt);
