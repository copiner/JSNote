
function foo(){
    var something = "cool";
    var another = [1,2,3];

    function doSomething(){
        console.log(something);
    }

    function doAnother(){
        console.log(another.join(" ! "));
    }
}


function coolModule(){
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
}

var baz = coolModule();

baz.doSomething();
baz.doAnother();
