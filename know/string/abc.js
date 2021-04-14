/*
  string && array
*/

//borrow method

var a = "foo";

var b = Array.prototype.join.call(a,"-");

var d = Array.prototype.map.call(a, function(v){
    return v.toUpperCase() + "-";
}).join("");

console.log(a, b, d);


//some method unabled to be borrowed

//console.log(Array.prototype.reverse.call(a));
//console.log(a);

//but

var f = a.split("").reverse().join("");

console.log(f);
