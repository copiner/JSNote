
var name = "arthur", age = 29;

var obj = {
    name:"nick",
    objAge:this.age,
    myFun:function(fm, t){
        console.log(this.name, this.age, fm, t);
    }
}

var db = {
    name:"dorb",
    age:"18"
}

obj.myFun.call(db, "A","B");
obj.myFun.apply(db, ["A","B"]);

obj.myFun.bind(db, "A","B")();
obj.myFun.bind(db, ["A","B"])();


