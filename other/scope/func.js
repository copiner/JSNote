//[[scope]]
function fun(){
    console.log(num);//num is not defined  //error
}
fun();

function func(){
    console.log(num);//undefined
    var num = 1;
    console.log(num);//1
}
func();
