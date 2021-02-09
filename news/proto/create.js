
var foo = {
    something:function(){
        console.log("Tell me something good...")
    }
}

var bar = Object.create(foo);
bar.something();

var anotherObject = {
    cool:function(){
        console.log("cool!");
    }
}

var myObject = Object.create(anotherObject);

myObject.doCool = function(){
    return this.cool()
}

myObject.doCool();
