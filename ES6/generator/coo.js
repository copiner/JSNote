var co = require('co');

var gen = function* (){
	var f1 = yield readFile('demo.js');
	var f2 = yield readFile('test.js');
	console.log(f1.toString());
	console.log(f2.toString());
}

cg(gen)

co(gen).then(function(){
	console.log('generator');
})
