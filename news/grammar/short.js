
//short circuiting
function doSomething(opts){
    if(opts && opts.cool){
        //..
    }

    if(opts.cache || primeCache()){
        //..
    }
}
