//property sequence

var o = {};

o[Symbol("c")] = "yay";
o[2] = true;
o[1] = true;

o.b = "awesome";
o.a = "cool";

console.log( Reflect.ownKeys(o) );

console.log( Object.getOwnPropertyNames(o) );
console.log( Object.getOwnPropertySymbols(o) );

var obj = { a:1, b:2 };
var p = Object.create( obj );
p.c = 3;
p.d = 4;

//for(let prop of Reflect.enumerate(p)){
//    console.log(prop);
//}

for(let prop in p){
    console.log(prop);
}

console.log( JSON.stringify(p) );

console.log( Object.keys(p) );
