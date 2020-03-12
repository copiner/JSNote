function unique(arr){
    const res = new Map();
    return arr.filter((a)=> !res.has(a) && res.set(a,1));
    
}

var arr = [1,6,8,8,3,2];

let temp = unique(arr);

console.log(temp);
