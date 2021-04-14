
function *main(){
    var x = yield "Hello World";
    yield x.toLowerCase();
}

var it = main();

console.log(it.next().value);

try{
    //it.next(42);
    //or
    it.throw("Opps");
}
catch(err){
    console.error(err);
}
