
var a = 1;
function test(){
    console.log(this.a);
}

let obj = {
    a : 2,
    test
}
obj.test();
setTimeout(function(){
    obj.test()
},1000)


function fun(a){
    this.a = a;
}
var b = new fun(3);
console.log(b.a);

