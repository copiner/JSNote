/*
setTimeout(async()=>{
    let r = await 8;
    console.log(r)
},1000)
*/

let ores = async (v)=>{
    try{
        let res = await 1
        if(res == 1){
            if(v) clearInterval(v)
            console.log('----');
            return 6
        }

    }catch(e){

    }
}

console.log("init")
ores().then(res=>{

    if(res == 6) return;

    let tick = 0;
    let inval = setInterval(async()=>{
        console.log(tick);
        if(tick>3) clearInterval(inval);
        tick++;
        ores(inval)
    },1000)

})

