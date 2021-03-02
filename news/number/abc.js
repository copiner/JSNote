/*
  number
*/

//42.toFixed(3);//SyntaxError

console.log( (42).toFixed(3) );

//0.1+0.2 === 0.3 //false

//es6 Number.EPSILON 
if(!Number.EPSILON){
    Number.EPSILON = Math.pow(2, -52);
}

function numbersCloseEnoughToEqual(n1, n2){
    return Math.abs(n1 - n2) < Number.EPSILON;
}

console.log( numbersCloseEnoughToEqual(0.1+0.2, 0.3) );//true
console.log( numbersCloseEnoughToEqual(0.00000001, 0.00000002) );//false


//ES6 Number.MAX_SAFE_INTEGER 2^53-1

//ES6 Number.MIN_SAFE_INTEGER -(2^53-1)


//ES6 Number.isInteger()
//polyfill
if(!Number.isInteger){
    Number.isInteger = function(num){
        return typeof num == "number" && num % 1 == 0;
    }
}

console.log(Number.isInteger(30));

