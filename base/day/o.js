

function kim(){

    var oldArr = '9CB515CD|73054217|20181125|20191231|20181125|2|00|01|02'.split('|');
    var newArr = [];

    
    for(var i=1;i<oldArr.length;i++){

	if(i!=4){
	    console.log(i);
	    newArr.push(oldArr[i]);
	}
    }
    return newArr.join('|');
}

console.log(kim());

