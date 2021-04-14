
var a = 2;

var obj = {
    "a":9
};

/*
(function iife(obj){
    var a = 3;
    console.log(a);
    console.log(obj.a);//error
})()
*/

(function iife(o){
    var a = 3;
    console.log(a);
    console.log(o.a);
})(obj)



console.log(a);


