//function declaration hoisting
var name = "xjx";
function rename(name){
	name = "wds";
}
rename(name);
console.log("1----------------------");
console.log(name);

var fruit=["apple","peach"];
function update(arr){
	arr[0]="books";
}
update(fruit);
console.log("2----------------------");
console.log(fruit);

var stu={name:"xjx", age:"21"};
function add(stu){
	stu.age="22";
}
add(stu);
console.log("3----------------------");
console.log(stu);

var stus={name:"wds", age:"23"};
function adds(stus){
	stus={age:"22"};
}
adds(stus);
console.log("4----------------------");
console.log(stus);
