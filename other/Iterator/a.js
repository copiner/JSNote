var arr = ['a','b','c'];

//1
for(let i in arr){
    console.log(arr[i]);
}

for(var i in arr){
    console.log(arr[i]);
}


//console.log(i);

for(var v of arr){
    console.log(v);
}


var str = '123';
for(let v of str){
    console.log(v);
}

var obj = {1:"abc",2:"def"};

for(let v of obj){
    console.log(v);
}


