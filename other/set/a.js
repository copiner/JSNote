
function unique(arr){
    //return Array.from(new Set(arr));
    return [...new Set(arr)];
}

let arr = [2,5,6,3,5,5,9];
let temp = unique(arr);

console.log(temp);
