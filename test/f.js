
var arr = [1,5,77,88,33,6,9];

function findNear(n, arr){
    var temp = arr[0];
    
    for(var i = 0; i<arr.length; i++){
	
	if(Math.abs(temp-n) > Math.abs(arr[i] - n)){
	    
	    temp = arr[i];
	}

	if(Math.abs(temp-n) == Math.abs(arr[i]-n)){
	    
	    temp = temp > arr[i] ? temp : arr[i];
	}
	
    }
    return temp;
}
console.log(findNear(60 ,arr));
console.log(findNear(3,arr));
