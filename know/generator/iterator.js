
var sth = (function(){
    var nextVal;

    return {
        [Symbol.iterator]:function(){return this;},

        next:function(){
            if(nextVal === undefined){
                nextVal = 1;
            } else {
                nextVal = (3 * nextVal) + 6
            }

            return { done:false, value:nextVal };
        }
    
    };
    
})()

//console.log(sth.next().value);
//console.log(sth.next().value);

console.log('------');

for(var v of sth){
    console.log(v);

    if(v > 500){
        break;
    }
}

console.log('------');
for(var ret; (ret = sth.next()) && !ret.done;){
    console.log(ret.value);

    if(ret.value > 1000){
        break;
    }
}

console.log('------');
//default iterator
var a = [3,5,87,9,11,91];

for(var v of a){
    console.log(v);
}
