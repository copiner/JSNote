function A(callback){
    console.log("I am A");
    callback(); 
}
function B(){
   console.log("I am B");
}
//----------1------

A(B);

//----------2-----

A();
B();
