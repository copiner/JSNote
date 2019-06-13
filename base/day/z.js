var arr = [1,2,3,4,5,6];
var i = 0;

/*
for(;i<arr.length;i++){
    arr.splice(0,1);
    console.log(arr.length);
    console.log(arr);
    i=0;
}
*/
console.log("1**************");
console.log(arr.length);
while(i<arr.length){
    arr.splice(0,1);
    console.log("2***********");
    console.log(arr);
}

//console.log(arr);

//var ar = [6];
//ar.splice(0,1);

//console.log(ar);
//console.log([].length);
