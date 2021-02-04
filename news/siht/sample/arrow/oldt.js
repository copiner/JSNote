

function foo(){
    var _this = this;
    setTimeout(function(){
        //this-->foo
        console.log(_this.a)
    },1000)
}

var obj = {
    a:2
}

foo.call(obj);//2
