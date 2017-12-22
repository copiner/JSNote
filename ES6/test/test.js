
function test(a,b){
	return a(),b();
}
console.log(test(a=>1,b=>2));

//reduceRight
var flattened = [[0,1],[2,3],[4,5]].reduceRight(function(a,b){
	return a.concat(b);
}, []);

console.log(flattened);

[0,1,2,3,4].reduceRight(function(previousValue, currentValue, index, array){
	console.log(previousValue)
	console.log(currentValue);
	console.log("\n")
	return previousValue+currentValue;
});

var a, b, rest;
[a,b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);

({a,b} = {a:10,b:20});
console.log(a);
console.log(b);

({a,b,...rest} = {a:10, b:20, c:30, d:40});
console.log(a);
console.log(b);
console.log(rest);

const middle = [1,2,3,4];
console.log(...middle);
console.log(middle);
