
var a = 30;

console.log(void a, a);

console.log(void 0);
console.log(void 1);

function doSth(ready){

    if(!ready){
        return void setTimeout(function(){},100);
    }

}

function doIt(ready){
    
    if(!ready){
        setTimeout(function(){},100);
        return;
    }

}

