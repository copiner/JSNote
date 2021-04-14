
class Base {
    constructor(){
        this.num = Math.random();
    }
    rand(){
        console.log("Random: " + this.num);
    }
}

var c1 = new Base();
c1.rand();

Base.prototype.rand = function(){
    console.log("Random :" + Math.round(this.num*1000));
};

var c2 = new Base();
c2.rand();
c1.rand();
