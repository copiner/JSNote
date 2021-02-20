
for(var i=1; i<=5; i++){
    console.log('timer------');
    (function(){
        console.log("i",i);
        setTimeout(function timer(){
            console.log(i);
        },i*1000)
    })()
}
