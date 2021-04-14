
var a = [2,4,7];

console.log( [...a.keys()] )
console.log( [...a.values()] )
console.log( [...a.entries()] )

console.log( [...a[Symbol.iterator]()] )


function unique(arr){
    const res = new Map();
    return arr.filter((a)=> !res.has(a) && res.set(a,1));
}

var arr = [1,6,8,8,3,2];

let temp = unique(arr);

console.log(temp);

