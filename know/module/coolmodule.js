
var foo = (function coolModule(){
    var something = "cool";
    var another = [1,2,3];

    function doSomething(){
        console.log(something);
    }

    function doAnother(){
        console.log(another.join(" ! "));
    }

    return {
        doSomething:doSomething,
        doAnother:doAnother
    };
})()

foo.doSomething();
foo.doAnother();


/*
console.log(typeof module)
console.log(typeof module.exports)
console.log(typeof undefined)
*/


function moreModule(id){
    function identify(){
        console.log(id)
    }

    return {
        identify: identify
    }
}

var foo1 = moreModule("foo 1");
var foo2 = moreModule("foo 2");

foo1.identify();
foo2.identify();


var baz = (function bazModule(id){
    function change(){
        publicAPI.identify = identify2;
    }

    function identify1(){
        console.log(id);
    }

    function identify2(){
        console.log(id.toUpperCase());
    }

    var publicAPI = {
        change:change,
        identify:identify1
    }

    return publicAPI;
    
})("baz module")


baz.identify();
baz.change();
baz.identify();
