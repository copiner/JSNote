var obj = {
    name: '1',
    objSayName: function (f) {
      var g = f.bind(this);
	  console.log(g());
    }
};
function sayName(){
    return this.name;
}
obj.objSayName(sayName);
