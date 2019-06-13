

var last = new Date();
last.setDate(1);
last.setMonth(last.getMonth()-1);
console.log(last);

var lastYear = last.getFullYear();
var lastMonth = last.getMonth();

console.log(lastYear, lastMonth);
