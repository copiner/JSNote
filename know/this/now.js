

var obj = {
    id:"awesome",
    cool:function coolFn(){

        setTimeout(()=>{
            console.log(1, this.id);
        },1000)

    }
}

var id = "not awesome";

obj.cool();


//bind
var pti = {
    id:"awesome",
    cool:function coolFn(){

        setTimeout(function cool(){
            console.log(2, this.id);
        }.bind(this),1000)

    }
}



pti.cool();
