
var arr = new Array(2);
var arr1 = Array(2);

console.log(arr.length)
console.log(arr1.length)

var arr2 = [4];
var arr3 = Array(4);

var arr4 = [];
arr4.length = 42;

console.log(arr2);
console.log(arr4);

var arr5 = [];
arr5[3.4] = "nice";
console.log(arr5.length);
console.log(arr5.hasOwnProperty(3.4));
console.log(arr5[3.4])


var arr6 = new Array("hello", 123456);
var arr7 = ["hello","apple"]

console.log(arr6)
console.log(arr7)

var arr8 = ["one", "two", "three"];
console.log(arr8[2]);
console.log(arr8["length"])

//在实施层面， JavaScript实际上是将元素作为标准的对象属性来存储
//把数组索引作为属性名。长度属性是特殊的，它总是返回最后一个元素的索引值加1
var cats = []
cats[30] = ['Dusty'];
console.log(cats.length);

var dogs = ['Dusty','Misty','Twiggy']
console.log(dogs.length);

dogs.length = 2;
console.log(dogs);

dogs.length = 0;
console.log(dogs);
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
