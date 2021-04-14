//generator iterator

function *something(){
    var nextVal;

    while(true){
        if(nextVal === undefined){
            nextVal = 1;
        } else {
            nextVal = (3 * nextVal) + 6;
        }

        yield nextVal;
    }
}

var it = something();

console.log(it.next().value);
console.log(it.next().value);

console.log('------');

for(var v of something()){
    console.log(v);

    if(v > 500){
        break;
    }
}
