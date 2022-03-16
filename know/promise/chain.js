
function callp1() {
    console.log(Date.now() + " start callp1");
    return new Promise(function(res, rej) {
        setTimeout(res, 2000);
    });
}

function callp2() {
    console.log(Date.now() + " start callp2");
    return new Promise(function(res, rej) {
        setTimeout(function() {
            res({arg1: 4, arg2: "arg2 value"});
        }, 3000);
    });
}

function callp3(arg) {
    console.log(Date.now() + " start callp3 with arg = " + arg);
    return new Promise(function(res, rej) {
        setTimeout(function() {
            res("callp3");
        }, arg * 1000);
    });
}

callp1().then(function() {
    console.log(Date.now() + " callp1 return");
    return callp2();
}).then(function(ret) {
    console.log(Date.now() + " callp2 return with ret value = " + JSON.stringify(ret));
    return callp3(ret.arg1);
}).then(function(ret) {
    console.log(Date.now() + " callp3 return with ret value = " + ret);
})
