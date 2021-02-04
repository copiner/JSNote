
for(var i=1; i<=5; i++){

    setTimeout(function timer(){
        console.log("timer");
    },0)
    console.log(i);
}

/*

for(var i=1; i<=5; i++){

    setTimeout(function timer(){
        console.log(1,i);
    },i*1000)

    setTimeout(function timer(){
        console.log(2,i);
    },0)
    
}

for(var i=1; i<=5; i++){

    (function(){
        
    setTimeout(function timer(){
        console.log(3,i);
    },i*1000)

    })()
    
}

for(var i=1; i<=5; i++){

    (function(){
        var j = i;
        setTimeout(function timer(){
            console.log(4,j);
        },j*1000)

    })()
    
}

for(var i=1; i<=5; i++){

    (function(j){

        setTimeout(function timer(){
            console.log(5,j);
        },j*1000)

    })(i)
    
}


*/
