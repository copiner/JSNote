
var arr = [99,13,35,88,12,91];

function quicks(arr){
    const sort = (arr, left=0, right=arr.length-1)=>{
        if(left >= right){
            return;
        }

        let i = left;
        let j = right;
        const base = arr[j];

        while(i<j){
            while(i<j && arr[i] <= base){
                i++;
            }
            arr[j] = arr[i];
            while(j>i && arr[j] >= base){
                j--;
            }
            arr[i] = arr[j];
        }
        arr[j] = base;
        sort(arr, left, j-1)
        sort(arr, j+1, right);
    }

    const nArr = arr.concat();//new array
    sort(nArr);

    return nArr;
    
}

console.log(arr);
console.log(quicks(arr));
