
function timeoutPromise(delay){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject("Timeout");
        },delay)
    })
}

Promise.race([ foo(), timeoutPromise(3000) ]).then(function(){
    //foo(..) foo 及时完成  完成，且在规定时间内完成
},function(err){
    console.log(err);//foo被拒绝，不是未完成，就是未按时完成
    
})
