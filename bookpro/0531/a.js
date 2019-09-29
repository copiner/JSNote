var obj = {
    a: 1,
    name: 'world',
    objSayName: function (fn) {
    	fn();
    }
}
function sayName () {
	return console.log(this.name);
}
obj.objSayName(sayName);
