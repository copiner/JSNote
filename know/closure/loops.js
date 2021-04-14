
for(var i=1; i<=5; i++){
    let j = i;
    setTimeout(function timer(){
        console.log(1, j);
    },j*1000)
}

for(let i=1; i<=5; i++){
    setTimeout(function timer(){
        console.log(2, i);
    },i*1000)
}
