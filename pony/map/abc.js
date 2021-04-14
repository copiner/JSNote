
var map = new Map()
map.set('p','o')
map.set('n','y')
map.set('f','o')
map.set('o','!')

console.log([...map]);
console.log( [...map.entries()] );

console.log( [...map.keys()] );

console.log( [...map.values()] )

console.log( Array.from(map.values()) )


console.log(map.has('o'));

for(let [key, value] of map){
    console.log(`${key}:${value}`);
}

var _map = new Map()
_map.set('a','a')
_map.set('a','b')
_map.set('a','c')

console.log([..._map]);

console.log(NaN === NaN)

var amap = new Map()
amap.set(NaN, 'foo')
amap.set(NaN, 'bar')

console.log([...amap]);
