var name = "This windows";

var object = {
    name : "My Object",

    getName : function(){
	return this.name;
    }
}

//object.getName();
//(object.getName)();
console.log(object.getName);
var t = (object.getName = object.getName)();//"This windows"
console.log(t);
