
var foo = true;

if(foo){
    let bar = foo * 2;
    var tar = foo * 2;    
    console.log(bar);
    console.log(tar);
}


console.log("tar",tar);
//console.log("bar",bar);

{
    let j;
    for(j=0;j<10;j++){
        let i = j;
        console.log(i);
    }
}


