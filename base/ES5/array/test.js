
var colors = ['red','green','blue'];
colors.forEach(function(color){
	console.log(color);
})

var times = ['one','two', ,'four']
times.forEach(function(element){
	console.log(element);
})

if(times[2] === undefined){
	console.log('times[2] is undefined');
}

var array = ['first','second',undefined,'fourth'];
array.forEach(function(element){
	console.log(element);
})
