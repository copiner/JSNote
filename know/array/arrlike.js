//array-like

function foo(){
//    return  Array.prototype.slice.call(arguments);

//    return [].prototype.slice.call(arguments);

    return Array.from(arguments);
}

var a = foo("bar","baz");

console.log(a);


