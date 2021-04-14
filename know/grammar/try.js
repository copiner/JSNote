
//try..finally
function foo(){
    try{
        return 42;
        
    }
    finally{
        console.log("Hello");
    }
    console.log("never runs");
}

//console.log(foo());


function foo1(){
    try{
        throw 42;
        
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("Hello");
    }
    console.log("runs");
}

//console.log(foo1());


function foo2(){
    try{
        return 42;
        
    }
    finally{
        throw "yep!";
    }
    console.log("never runs");
}

//console.log(foo2());



function foo3(){
    try{
        return 42;
        
    }
    finally{
        return 29;
    }
    console.log("never runs");
}

console.log(foo3())

