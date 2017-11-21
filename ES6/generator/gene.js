
function *gen(x){
	console.log("1------");
	var y = yield x + 2;
	console.log("2------");
	return y;
}

var g = gen(1);

var result = g.next();
console.log(result)
