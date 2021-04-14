
var a = 1;

var o = {
    "a":9
};

(function iife(def){
    //def(window)
    console.log(o);
    def(o)    
})(function def(global){
    
    var a = 3;
    console.log(a);
    console.log(global.a);
})
