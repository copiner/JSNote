
//1----------------
/*
function foo(){
    var a = 2;
    function bar(){
        console.log(a);
    }

    return bar;
}

var baz = foo();
baz();
*/

//2------------------
/*
function foo(){
    var a = 2;
    function baz(){
        console.log(a);
    }
    bar(baz);
}

function bar(fn){
    fn();
}

foo();
*/

//3---------------

var fn;

function foo(){
    var a = 2;
    function baz(){
        console.log(a);
    }
    fn = baz;
}

function bar(){
    fn();
}

foo();

bar();
