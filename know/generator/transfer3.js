
function *foo(){
    try{
        yield "B";
    }
    catch(err){
        console.log("error caught inside *foo():", err);
    }

    yield "C";

    throw "D";
}

function *bar(){
    yield "A";

    try{
        yield *foo();
    }
    catch(err){
        console.log("error caught inside *bar():", err);
    }

    yield "E";

    yield *baz();

    //never run here
    yield "G";
}

function *baz(){
    throw "F";
}

var it = bar();
console.log("outside:", it.next().value);

console.log("outside:", it.next(1).value);

console.log("outside:", it.throw(2).value);

console.log("outside:", it.next(3).value);


try{
    console.log("outside:", it.next(4).value);
}
catch(err){
    console.log("error caught outside:", err);
}
