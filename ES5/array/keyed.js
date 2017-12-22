//map对象
var saying = new Map();
saying.set('dog','woof');
saying.set('cat','meow');
saying.set('elephant','toot');
console.log(saying.size);

console.log(saying.get('fox'))
console.log(saying.has('bird'))
console.log(saying.get('dog'))
saying.delete('dog');

saying.has('dog');


for(var [key, value] of saying){
	console.log(key + 'goes' + value);
}

saying.clear();
console.log(saying.size)

var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

console.log(mySet.has(1));
mySet.delete("foo");
console.log(mySet.size)

for(let item of mySet) console.log(item);
