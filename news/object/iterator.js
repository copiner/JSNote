
var obj = {
    a:4,
    b:5
}

for(var v of obj){
    console.log(v);
}


Object.defineProperty(obj, Symbol.iterator,{
    enumerable:false,
    configurable:true,
    value:function(){
        var o = this;
        var idx = 0;
        var ks = Object.keys(o);
        return {
            next:function(){
                return {
                    value:o[ks[idx++]],
                    done:(idx>ks.length)
                }
            }
        };
    }
})

//
var it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());


for(var v of obj){
    console.log(v);
}
