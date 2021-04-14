

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


function *foo(){
    var r1 = yield request("url1");
    var r2 = yield request("url2");

    var r3 = yield request("url3?v="+r1+","+r2);

    console.log(r3);
}

run(foo);

//nice
function *foo(){
    var p1 = request("url1");
    var p2 = request("url2");

    var r1 = yield p1;
    var r2 = yield p2;

    var r3 = yield request("url3?v="+r1+","+r2);

    console.log(r3);
}

run(foo);

