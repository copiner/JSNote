
function getY(x){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( (3*x)-1 );
        },1000)
    })
}

function foo(bar, baz){
    var x = bar*baz;

    return getY(x).then(function(y){
        return [x,y];
    });
}

foo(10, 20).then(function(msgs){
    var x = msgs[0];
    var y = msgs[1];

    console.log(x,y);
})

//another wey
function foo1(bar, baz){
    var x = bar * baz;
    return [Promise.resolve(x), getY(x)];
}

Promise.all(foo1(10, 20)).then(function(msgs){
    var x = msgs[0];
    var y = msgs[1];

    console.log(x, y);
});


//spread
function spread(fn){
    return Function.apply.bind(fn, null);
}

var s = spread(function(x,y){
    console.log(x, y);
})

s([34,67])

Promise.all( foo1(10,20) ).then(
    Function.apply.bind(function(x,y){
        console.log(x, y);
    },null)
)


//ES6

Promise.all( foo1(10, 20) ).then(function(msgs){
    var [x ,y] = msgs;

    console.log(x, y);
})



Promise.all( foo1(10, 20) ).then(function([x,y]){
    console.log(x, y);
})

//timeout

//promise no abort
function timeoutPromise(delay){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject("timeout!");
        },delay);
    })
}


var p = Promise.resolve(42);

Promise.all([p, timeoutPromise(3000)]).then(function(v){
    console.log('p', v);
},function(e){
    console.log('p', e);
});


