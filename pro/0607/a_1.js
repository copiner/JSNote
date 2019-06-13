/*
every function is a instance of Function
 */

function addNumber(num){
    return num + 100;
}

function addNumber(num){
    return num + 200;
}

var r = addNumber(100);//200

//==

var addNumber = function(num){
    return num + 100;
}

var addNumber = function(num){
    return num + 200;
}

var r = addNumber(100);//300
