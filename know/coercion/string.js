//toString()

var a = 1.07*1000*1000*1000*1000*1000*1000*1000;

console.log(a.toString());

//Array
//toString() has been redefined
var arr = [3,4,5];
console.log(arr.toString());//Array.prototype.toString()

//JSON.stringify()  toString()
JSON.stringify(42);
console.log(JSON.stringify( undefined ))
console.log(JSON.stringify( function(){} ))
console.log(JSON.stringify( [2,undefined,function(){},5] ))

console.log(JSON.stringify( {a:4, b:function(){}} ))

var o = {};
var p = {
    b:44,
    c:o,
    d:function(){}
}
o.e = p;//circular

//JSON.stringify(p);//ERROR  

p.toJSON = function(){
    return { b:this.b }
}

console.log(JSON.stringify(p));//toJSON  {"b":44}

var z = {
    b:90,
    c:"45",
    d:[4,6,8]
};

console.log( JSON.stringify(z, ["b","c"])  );

console.log( JSON.stringify(z, function(k,v){
    if(k !== 'c') return v;
})  );

