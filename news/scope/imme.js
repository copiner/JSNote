
undefined = true;

//1

/*
(function iife(undefined){
    var a;
    if(a === undefined){
        console.log("Undefined is safe here!")
    }
})()
*/

//2
(function iife(){
    var a;
    console.log(a)
    if(a === undefined){
        console.log("Undefined is safe here!")
    }
})()
