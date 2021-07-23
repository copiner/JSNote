
var arr = [86,23,90,45,9];

function selections(arr){
    let len = arr.length;
    let min;
    for(let i=0; i<len; i++){
        min = i;
        for(let j=i+1; j<len; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i != min){
            let t = arr[i];
            arr[i] = arr[min];
            arr[min] = t;
        }
        
    }

    return arr;
}

console.log(selections(arr));
