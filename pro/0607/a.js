/*

*/
function sum(sum1, sum2){
    return sum1 + sum2;
}

var othersum = sum;

sum = null;

var r = othersum(1,4);

console.log(r);
