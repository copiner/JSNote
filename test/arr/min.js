
//Math.min()
var arr = [5,8,3,9,1];

function myArrayMax(arr) {
    return Math.min.apply(null, arr);
}

console.log(myArrayMax(arr))
