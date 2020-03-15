
var map = new Map()
map.set('p','o')
map.set('n','y')
map.set('f','o')
map.set('o','!')

console.log([...map]);

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
