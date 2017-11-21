var fs = require('fs');

var readFile = function(fileName){
	return new Promise(function(resolve, reject){
		fs.readFile(fileName, function(error, data){
			if(error) reject(error);
			resolve(data);
		})
	})
}

var gen = function* (){
	var f1 = yield readFile('gene.js');
	var f2 = yield readFile('gener.js');
	// var f3 = yield readFile('genera.js');
	// var f4 = yield readFile('generat.js');
	console.log(f1.toString());
	console.log(f2.toString());
}

var g = gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

//result:
// { value: Promise { <pending> }, done: false }
// { value: Promise { <pending> }, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }

g.next().value.then(function(data){
	//console.log("1----"+data);
	g.next(data).value.then(function(data){
		//console.log("2----"+data);
		g.next(data);
		//console.log("3----"+g.next().done);
	})
})

//next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。

function run(gen){
	var g = gen();
	function next(data){
		var result = g.next(data);
		if(result.done) return result.value
		result.value.then(function(data){
			next(data);
		})
	}
	next()
}

//run(gen);
