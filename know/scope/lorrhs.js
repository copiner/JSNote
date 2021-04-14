
function fo(a){
    // 1
    //console.log(a + b);
    b = a;
    console.log(a + b);
}

fo(2)

function foo(a){
    var b = a*2;

    function bar(c){
        console.log(a,b,c)
    }

    bar(b*3)
}

foo(2)
