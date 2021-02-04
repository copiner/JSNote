
var obj = {
    //a-->getter
    get a(){
        return this._a_;
    },

    //a-->setter
    set a(val){
        this._a_ = val*2;
    }
};

obj.a = 3;

console.log(obj.a);
