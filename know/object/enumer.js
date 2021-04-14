
var obj = {}

Object.defineProperty(obj,"a",{
    enumerable:true,
    value:3
})


Object.defineProperty(obj,"b",{
    enumerable:false,
    value:9
})

console.log(obj.b);
console.log("b" in obj);
console.log(obj.hasOwnProperty("b"));


for(var k in obj){
    console.log(k, obj[k]);
}

console.log(obj.propertyIsEnumerable("b"));

console.log(Object.keys(obj));

console.log(Object.getOwnPropertyNames(obj));
