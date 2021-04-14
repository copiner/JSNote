 

function foo(){
    function bar(a){
//        i = 3;
        var i = 3;
        console.log(a, i);//8, 3
    }

    for(var i=0; i<10; i++){
        bar(i*2);
    }
}

foo();
