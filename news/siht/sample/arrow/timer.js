
function foo(){
    setTimeout(()=>{
        //this-->foo
        console.log(this.a)
    },1000)
}

var obj = {
    a:2
}

foo.call(obj);//2
