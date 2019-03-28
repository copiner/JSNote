
console.log(typeof false);
console.log(typeof 0);
console.log(typeof '');
console.log(typeof null);
console.log(typeof undefined);

console.log('1---------------------')
var obj = null;

var user = undefined;

//user.toString();

//obj.toString();

console.log(user == false);
console.log(user === false);
console.log(obj == false);
console.log(obj === false);
console.log('2---------------------')

console.log(!obj);
console.log(!user)

console.log('3---------------------')

obj = {};

console.log(obj == true);//false
console.log(obj === true);//false
console.log(!obj);
if(obj){
    console.log("defined");
}

console.log('4---------------------')
var str = '';
var num = 0;

console.log('' == false);
console.log('' === false);
console.log(0 == false);
console.log('' === false);

console.log('5--------------------');

console.log(!!"");
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!0);

console.log('6--------------------');
