var obj = {
    a: 1,
    name: 'world',
    objSayName: function(fn) {
         fn();
    }
}
var name = 'hello';
var arr = [1, 2, 3, 4, 5];

function foo(o) {
    console.log(arr);
    var bar = arr;// || [6, 7, 8];
    var arr = [4, 2, 9];
  //  var baz = o;
//    baz.a = 2;
    console.log(bar);
    //console.log(bar, obj.a);
}

function sayName() {
    return console.log(this.name);
}

foo(obj);
//obj.objSayName(sayName);
