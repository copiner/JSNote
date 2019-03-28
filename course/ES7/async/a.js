async function timeout(){
    return "hello";
}

console.log(timeout());

timeout().then(result=>{
    console.log(result);
})

console.log("oh jues");
