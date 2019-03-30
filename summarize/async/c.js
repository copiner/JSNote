function delay(time) {
    console.log("in delay...");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(time);
        }, time);
    });
}

function* useGenerator1(){
    console.log("use generator 1")
    let a = yield delay(1000);
    console.log("use generator 2")
    let b = yield delay(2000);
    console.log("use generator 3")
    let c = yield delay(3000);
    console.log("use generator 4")
    let d = yield delay(4000);
}

// let iter = useGenerator1();
// let result = iter.next();
// console.log("before async.....");
// result.value.then(()=>{
//     console.log(result);
//     iter.next();
// })


function thunk(iter) {
    let result = iter.next();
    if(result.done) {
        return;
    }
    result.value.then(()=>{
        console.log(result.value)
        thunk(iter);
    });
}

let iter = useGenerator1();
thunk(iter);
