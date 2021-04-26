let pro = function(num) {
    return new Promise(function(resolve, reject) {
        if (typeof num == 'number') {
            resolve(num);
        } else {
            reject('TypeError');
        }
    })
}

pro(6).then(function(num) {
    console.log('first: ' + num);
    return num + 1;
}).then(function(num) {
    console.log('second: ' + num);
    return num + 1;
}).then(function(num) {
    console.log('third: ' + num);
    return num + 1;
}).catch(function(e){
    console.log('rejected');
    console.log(e);
})
/*ES2018 引入标准
.finally(function(){
    console.log("finally")
});
*/
