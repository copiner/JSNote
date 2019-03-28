function createFunctions(){
    var result = new Array();

    for(var i=0;i<10;i++){
        result[i] = function(){
	  return i;
	}
    }
    return result;
 };
var a = createFunctions();
console.log(a[0]());

function createFunction(){
    var res = new Array();
    for(var i=0;i<10;i++){
	res[i] = function(num){
	    return function(){
		return num;
	    }
	}(i);
    }
    return res;
}

var b = createFunction();
console.log(b[0]());
