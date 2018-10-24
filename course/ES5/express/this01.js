var name = "The Windows";

var object = {
    name : "My Object",

    getNameFunc : function(){
	return function(){
	    return this.name;
	}
    }
};

console.log(object.getNameFunc()());

var a = "a";

var ob = {
    name : "b",

    getNameFunc : function(){
	var _this = this;
	return function(){
	    return _this.name;
	}
    }
};

console.log(ob.getNameFunc()());
