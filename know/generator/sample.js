//
function foo(x, y){
    ajax(
        "url",
        function(err, data){
            if(err){
                it.throw(err);
            } else {
                it.next(data);
            }
        }
    );
}

function *main(){
    try{
        var text = yield foo(11, 40);
        console.log(text);
    } catch(err){
        console.log(err);
    }
}

var it = main();
it.next();
