function getResult(value, time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(value);
            resolve();
        }, time);
    });
}
(async () => {
    const a = getResult(1, 300);
    const b = getResult(2, 200);

    await a;
    await b;
})();
(async () => {
    await getResult(1, 300);
    await getResult(2, 200);
})();
