
let arr = [23,55,90,17,22,11];
function insertions(arr){

    arr = arr.concat();
    let len = arr.length;

    for(let i=0; i<len; i++){
    
        for(let j=i+1; j>0 && arr[j] < arr[j-1]; j--){
            let t = arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=t;
        }
        
    }

    return arr;
}
console.log(arr);
console.log(insertions(arr));

console.log(arr);
