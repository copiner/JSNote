/*
ES6¿é¼¶×÷ÓÃÓò
*/


for(let i = 0; i<6;i++){
    console.log(i);
    var forVar = 'forVar';
    let forLet = 'forLet';
}
//console.log(i);//i is not defined
//console.log(forVar, forLet);


console.log("***********************");

function test(){
    var arr = new Array();
    for(let i = 0; i<6; i++){
        arr[i] = function(){
            return i;
        }
    }
    return arr;
}

var arrObj = new test();

console.log(arrObj[1].toString());
/*
arrObj[1] = function(){
    return 1;
}
*/
console.log(arrObj[1]());

console.log('*******************');
function name1(name){
    this.name=name;
}
var name=new name1("11");

console.log(name.name);
