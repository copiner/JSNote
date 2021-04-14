
var id = "not awesome";


var obj = {
    id:"awesome",
    cool:function coolFn(){

        setTimeout(function cool(){
            console.log(1, this.id);
        },1000)

    }
}

var id = "not awesome";

obj.cool();



var pti = {
    id:"awesome",
    cool:function coolFn(){
        var _this = this;

        setTimeout(function cool(){
            console.log(2, _this.id);
        },1000)
    }
}



pti.cool();


