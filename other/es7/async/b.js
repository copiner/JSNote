async function timeout(flag){
    if(flag){
	     return "world";
    }else{
	     throw 'Jues';
    }
}

console.log(timeout(true));
//console.log(timeout(false));

timeout(false).catch(err=>{
    console.log(err);
})
