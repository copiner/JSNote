
var i = 2;

Number.prototype.valueOf = function(){
    return i++;
}

var a = new Number(30);

if(a==2 && a==3){
    console.log("yep!");
}


console.log(Number(""));//0
console.log(Number(false));//0
console.log(Number(true));//1

console.log([].toString());//""
console.log([2].toString());//2
console.log([null].toString());//""

console.log("0" == false);//true
console.log("0" == 0);//true
console.log("0" == "");//false


console.log(false == 0);//true
console.log(false == "");//true
console.log(false == [])//true

console.log("" == 0);//true
console.log("" == []);//true

console.log(0 == []);//true

//special
console.log([] == []);//false
console.log([] == ![]);//[] == false   //true


console.log(2 == [2])
console.log("" == [null]);
