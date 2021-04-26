
//for...of

var arr = [5,9,4];

var it = arr[Symbol.iterator]();


for(let v, res; (res = it.next()) && !res.done; ){
    v = res.value;
    console.log(v);
}

for(let v of arr){
    console.log(v);
}
