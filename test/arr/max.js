
var arr = [2,4,7,3,9];


function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

console.log(myArrayMax(arr));
