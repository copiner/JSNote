
function getData(){
    return {
        a:42,
        b:"wdaonngg"
    }
}

var {a, b} = getData();

console.log(a, b);

var {a:a, b:b} = getData();

console.log(a, b);

var {a:c, b:d} = getData();//alias

console.log(c, d);

function foo({a,b,c}){
    console.log(a, b, c);
}

foo({
    c:[1,2,3],
    a:42,
    b:"foo"
});
