
//return promise
function foo(x, y){
    return request(
        "url?x=" + x + "&y=" + y;
    );
}

/*
foo(11, 31).then(function(text){
    console.log(text);
},function(err){
    console.error(err);
});
*/

function *main(){
    try{
        var text = yield foo(11, 31);
        console.log(text);
    } catch(err){
        console.log(err);
    }
}

var it = main();
var p = it.next().value;

p.then(function(text){
    it.next(text);
},function(err){
    it.throw(err);
});

//tool run
function run(gen){
    var args = [].slice.call(arguments, 1), it;

    it = gen.apply(this, args);

    return Promise.resolve().then(function handleNext(value){
        var next = it.next(value);

        return (function handleResult(next){
            if(next.done){
                return next.value;
            }
            else{
                return Promise.resolve(next.value).then(
                    handleNext,
                    function handleErr(err){
                        return Promise.resolve(
                            it.throw(err);
                        ).then(handleResult);
                    }
                );
            }
        })(next);
    });
}


run(main);
