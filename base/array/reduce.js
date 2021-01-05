
var arr = [9,23,5,87,12,1,34,86,19];

var max = arr.reduce(function (prev, cur) {
    return Math.max(prev,cur);
},10);


console.log(max);
