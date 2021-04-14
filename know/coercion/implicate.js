
var a = [1,2];
var b = [3,4];

console.log(a + b);
console.log(a + "");

//console.log(b - a);


var c = {
    valueOf:function(){
        return 39;
    },
    toString:function(){
        return 3;
    }
}

console.log( c + "" );
console.log( String(c) );

var d = [7];
var e = [9];

console.log( d-e );


console.log('---------------------')

/*
x||y  roughly equivalent to   x ? x : y
x&&y                          x ? y : x
*/
var x = 33;
var y = "abc";
var z = null;

console.log(x||y);
console.log(y||x);

console.log(x||z);
console.log(z||x);


console.log(x&&y);
console.log(y&&x);

console.log(x&&z);
console.log(z&&x);


console.log('-------------------------');

function foo(a,b){
    var a = a || "hello";
    var b = b || "world";

    console.log(a + b);
}

foo();
foo("yep","yeep");

var t = 9;

function baz(){
    console.log(t);
}

t && baz();
