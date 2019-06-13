var arr = [1,2,3,4,5,6];
var i = 0;

for(;i<=arr.length;i++){
    console.log("**********");
    arr.splice(0,1);
    console.log(arr.length);
    console.log(arr);
    i=0;
}

console.log(i)
