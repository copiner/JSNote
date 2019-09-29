/*
  node
*/
var num = 9;


//console.log(this);

console.log(global.num)

console.log(this.num);

function test(){
    console.log(this.num);
}
test();

function test1(){
    this.num = 7;
    console.log(this.num);
    console.log(global.num);
}



test1();

//var a = new test1();


