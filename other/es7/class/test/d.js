
let [a,b,c] = [1,2,3];
console.log(a,b,c);

const start = +new Date();

const end = new Date();
console.log(start);
console.log(end);

const person = {
	name:'Anna',
	age: 18,
	school: 'CUHK'
}

const str = `Hi,I am ${person.name}, and I am ${person.age} years old, I graduate from ${person.school}`

console.log(str);

const map = new Map();
map.set('key','value');
console.log(map);

class Foo{
	constructor(){
		this.name = 'Anna'
	}
	getName(){
		return this.name;
	}
}
const foo = new Foo();
console.log(foo.getName());
