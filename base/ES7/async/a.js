async function timeout(){
    return "hello";
}

console.log(timeout());//promise

timeout().then(result=>{
    console.log(result);
})

console.log("oh jues");
