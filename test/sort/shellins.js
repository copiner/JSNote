
let arr = [99,56,89,11,34,10];

function shellins(arr){

    arr = arr.concat();
    var len = arr.length;
    for(let fraction = Math.floor(len/2); fraction > 0; fraction = Math.floor(fraction/2)){
        for(let i = fraction; i< len; i++){
            for(let j = i-fraction; j>=0 && arr[j] > arr[fraction + j]; j-= fraction){
                var temp = arr[j];
                arr[j] = arr[fraction + j];
                arr[fraction + j] = temp;
            }
        }
    }

    return arr;
}

console.log( shellins(arr) );
