//Variable object

/*
Many ECMAScript programmers know that variables are closely related with the execution context
*/
var a = 10; // variable of the global context
 
(function () {
  var b = 20; // local variable of the function context
})();
  
console.log(a); // 10
//console.log(b); // "b" is not defined

/*
Also, many programmers know that the isolated scope in the current version of specification is created only by execution contexts with ¡°function¡± code type. I.e., in contrast with C/C++, for example the block of for loop in ECMAScript does not create a local context:
*/

for (var k in {a: 1, b: 2}) {
  console.log(k);
}
  
console.log(k); // variable "k" still in scope even the loop is finished

/*
Let¡¯s see in more details what occurs when we declare our data.
*/

/*
If variables are related with the execution context, it should know where its data are stored and how to get them. This mechanism is called a variable object
*/


//todo
