
function * something(){

    try{
        var nextVal;

        while(true){
            if(nextVal === undefined){
                nextVal = 1;
            } else {
                nextVal = (3 * nextVal) + 6;
            }

            yield nextVal;
        }
    } finally {
        console.log("cleaning up");
    }
    
}

var it = something();

for(var v of it){
    console.log(v);

    if(v > 500){
        var over = it.return("hello world").value;
        console.log("over: ", over);
    }

    //break;
}


