//全部删除：按esc后，然后ggdG
//全部复制：按esc后，然后ggyG
//全选高亮显示：按esc后，然后ggvG或者ggVG 
//:w filename
//:w>>filename

var myArray = new Array('1','2','3');
myArray = myArray.concat('a','b','c');
console.log(myArray)

var weather = new Array("Wind","Rain","Fire");
var list = weather.join(" - ");
console.log(list)

var sl = new Array('a','b','c','d','e');
sl = sl.slice(1, 4);
console.log(sl);

//var a = [10, 20, 30];
var a = ['a', 'b', 'c'];
var total = a.reduce(function(first, second){
	return first + second;
}, 0);
console.log(total);

var numbers = [1, 2, 3, 4];
var doubled = numbers.map(function(i){return i*2;});
console.log(doubled)

var num = [1, 2, 3, 21, 22, 30];
var evens= num.filter(function(i){return i%2===0;});
console.log(evens);
