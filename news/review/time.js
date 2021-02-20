//延迟函数的回调会在循环结束时才执行
for(var i=1; i<=5; i++){
    console.log('---------');
    setTimeout(function timer(){
        console.log(i);
    },i*1000)
}


