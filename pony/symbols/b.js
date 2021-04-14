

var obj = {
    0:'abc',
    1:'xyz',
    [Symbol.iterator]:function(){
        const _this = this;
        let index = 0;
        return {
            next:function(){
                if(index<2){
                    return{
                        value:_this[index++],
                        done:false
                    }
                } else {
                    return{
                        value:undefined,
                        done:true
                    }
                }
            }
        }
    }
}

for(let v of obj){
    console.log(v);
}


var it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
