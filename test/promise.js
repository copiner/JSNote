/*
Promise
*/
class promise {
    constructor(handler) {
        this.resolveHandler = null;
        this.rejectedHandler = null;
        setTimeout(() => {
            handler(this.resolveHandler, this.rejectedHandler);
        }, 0);
    }

    then(resolve, reject) {
        this.resolveHandler = resolve;
        this.rejectedHandler = reject;
        return this;
    }
}
function getPromise() {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    });
}

function getAPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    });
}


const p1 = getPromise();
const p2 = getAPromise();

p1.then((res) => {
    console.log('1',res);
}, (error) => {
    console.log(error);
});

setTimeout(()=>{
    console.log('s p1-------------------')
    p1.then((res) => {
        console.log('2',res);
    }, (error) => {
        console.log(error);
    });
    
    
},0)


setTimeout(()=>{
    console.log('s p2-------------------')
    p2.then((res) => {
        console.log('3',res);
    }, (error) => {
        console.log(error);
    });
    
},0)
