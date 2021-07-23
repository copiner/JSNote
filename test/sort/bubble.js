
let arr = [8,43,9,12,67,99];

function bubbles(arr){
    let len = arr.length;
    for(let i=0; i<len-1;i++){
        for(let j=0; j<len-1-i; j++){
            if(arr[j] > arr[j+1]){

                let t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;

            }
        }
    }

    return arr;
}

console.log(bubbles(arr))
