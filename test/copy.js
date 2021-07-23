/*
shellow
*/
var a = {
    prop:"haha",
    desc:"hi world",
    extra:{
        inner:"any"
    }
}

var b = Object.assign({},a);

console.log(a.obj === b.obj);

var c = {...a}

console.log(a.obj === c.obj)

c.extra.inner = "shallow";

console.log(a)
console.log(b)
console.log(c)

/*
deep
*/

console.log('------------')

var d = JSON.parse(JSON.stringify(a));

d.extra.inner = "deep";

console.log(d)
console.log(a);

console.log(undefined === undefined);
console.log({} === {});


function deepClone(obj){
    //
    if(typeof obj !== 'object'){
        return obj;
    }

    var result = Array.isArray(obj)?[]:{};

    for(let p in obj){
        if(obj.hasOwnProperty(p)){
            result[p] = deepClone(obj[p]);
        }
    }

    return result;
    
}

var e = deepClone(a);
console.log(e.extra === a.extra);


