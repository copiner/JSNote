
//recurrence
var arr = [22,89,10,34,88,94];

function merges(arr){

    const merge = (left, right)=>{
        let result = [];
        while(left.length && right.length){
            if(left[0] <= right[0]){
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while(left.length)
            result.push(left.shift());

        while(right.length)
            result.push(right.shift());

        return result;
    }

    const nec = (arr) =>{
        var len = arr.length;
        if(len < 2){
            return arr;
        }

        let middle = Math.floor(len/2),
            left = arr.slice(0, middle),
            right = arr.slice(middle);

        return merge(nec(left), nec(right));        
    }

    return nec(arr);

}

console.log(arr);
console.log(merges(arr));
