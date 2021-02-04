

var count = 7;

function foo(num){
    console.log("foo: " + num);

    this.count++;
}

foo.count = 0;

var i;

foo.call(foo, 7)
foo.call(foo, 8)


console.log(foo.count);//2

console.log(count)//7
