const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj);
console.log(o1);



const a1 = { a: 1, c: 3, d:{i:9}};
const a2 = { a: 2, b: 2 };

const obj1 = {...a1, ...a2, d:{i:0}}
const obj2 = { ...a1 }

console.log(obj1);
console.log(obj2)
console.log(a1);
console.log(a2);


const {a, ...o} = a1;

console.log(a);
console.log(o);
