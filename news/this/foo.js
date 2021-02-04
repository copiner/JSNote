
var count = 7;

function foo(num){
    console.log("foo: " + num);

    this.count++;

//    foo.count++;
}

foo.count = 0;

var i;

foo(7);//this --> window
foo(8);

console.log(foo.count);//0


console.log(count)//9
