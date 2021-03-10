
var p = Promise.resolve(21);

p.then(function(v){
    console.log('p', v);
    return v * 2;
}).then(function(v){
    console.log('p', v);
})



var p1 = Promise.resolve(21);

p1.then(function(v){
    console.log('p1', v);
    return new Promise(function(resolve, reject){
        resolve(v * 2);
    })
}).then(function(v){
    console.log('p1', v);    
})



var p2 = Promise.resolve(21);

p2.then(function(v){
    console.log('p2', v);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(v * 2);
        },100)
    })
}).then(function(v){
    console.log('p2', v);    
},function(e){//reject()
    console.log(e);
})

var p3 = Promise.resolve(21);

p3.then(function(v){
    console.log('p3', v);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject(v * 2);
        },100)
    })
}).then(function(v){
    console.log('p3', v);    
},function(e){//reject()
    console.log("p3 e", e);
})


var p4 = Promise.resolve(44);
p4.then(function(){
    console.log('p4 v', v.toLowerCase());
},function(e){
    console.log('p4 e', e)
})



var p5 = Promise.resolve(44);
p5.then(function(v){
    //console.log('p5 v1', v.toLowerCase());
},function(e){
    console.log('p5 e1', e)
}).then(function(v){
    console.log('p5 v2', v);
},function(e){
    console.log('p5 e2', e);
})


var p6 = Promise.resolve(45);
p6.then(function(v){
    console.log('p6 v', v.toLowerCase());
},function(e){
    console.log('p6 e', e)
}).cache(function(err){
    console.log('p6 err', err)
})
