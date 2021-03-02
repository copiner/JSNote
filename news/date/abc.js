
console.log(Date.now());

//polyfill
if(!Date.now){
    Date.now = function(){
        return (new Date()).getTime();
    }
}

console.log( (new Date()).getTime() )
