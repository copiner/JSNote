
function bar(){
    console.log("bar");
}

//labeled statement
{
    baz:bar()
}

foo: for(var i=0; i<4; i++){
    for(var j=0;j<4; j++){
        if(j == i){
            continue foo;
        }

        if( (j*i)%2 == 1 ){
            continue;
        }

        console.log(i, j);
    }
}

console.log('------');

bax: for(var i=0; i<4; i++){

    for(var j=0;j<4; j++){
        if( (i*j)>=3 ){
            console.log("stopping", i, j);
            break bax;
        }

        console.log(i, j);
    }

}

console.log("------");

function tii(){
    tio:{
        console.log("Hello");
        break tio;
        console.log("never runs");
    }

    console.log("World");
}

tii();


console.log('------');

console.log([] + {});
console.log({} + []);

var y = {} + [];
console.log(y);
