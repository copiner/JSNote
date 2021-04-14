
var a = 2;

(function foo(){
    var a = 3;
    console.log(a);
})();

(function bar(){
    var a = 4;
    console.log(a)
}());


console.log("bottom",a);

setTimeout(function timeoutHandler(){
    console.log("I 1 waited 1 second")
}, 1000)


setTimeout(function(){
    console.log("I 2 waited 1 second")
}, 1000)


setTimeout(()=>{
    console.log("I 3 waited 1 second")
}, 1000)


