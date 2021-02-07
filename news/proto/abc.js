
var anotherObject = {
    a:2
}

var myObject = Object.create(anotherObject);

console.log(myObject.a);

for(var k in myObject){
    console.log("k", k);
}

console.log("a" in myObject);
