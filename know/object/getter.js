
var obj = {
    //a -->getter
    get a(){
        return 2;
    }
}

obj.a = 3;


Object.defineProperty(obj,"b",{
    //b-->getter
    get: function(){return this.a*2},
    enumerable:true
})

console.log(obj.a);//2
console.log(obj.b);//4
