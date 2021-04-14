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
            },
            return:function(){
                return {done:true};
            }
        }
    }
}

for(let v of obj){
    console.log(v);
    break;

}

for(let v of obj){
    console.log(v);
    continue;
    console.log('100');
}
