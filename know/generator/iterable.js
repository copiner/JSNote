
var a = [3,56,8,96,12];

var it = a[Symbol.iterator]();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

console.log('------');

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


var it2 = sth[Symbol.iterator]();

console.log(it2);

//console.log(it2.next().value);

console.log('------');
/*
for(var v of sth){
    console.log(v);

    if(v > 500){
        break;
    }
}
*/
