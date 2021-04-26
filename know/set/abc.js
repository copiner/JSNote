
var s = new Set();

var x = { id: 1 },
    y = { id: 2 };

s.add(x);
s.add(y);
s.add(x);

console.log(s.size);
s.delete(y);
console.log(s.size);

s.clear();
console.log(s.size);

var z = {id: 3}
var ss = new Set([x, y]);

console.log( ss.has(x) );
console.log( ss.has(y) );

console.log( ss.has(z) );


console.log( [...ss.keys()] )
console.log( [...ss.values()] )
console.log( [...ss.entries()] ) 
