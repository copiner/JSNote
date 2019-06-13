function transfer(i){
    var temp = true;
    if(temp){
	if(i > 9){
	    temp = true;
	}else {
	    temp = false;
	}
    }

    if(temp){
	if(i>12){
	    return i++;
	}else {
	    temp = false;
	}
    }

    i--;
    return false;
    
}

var l = transfer(12);

console.log(l);
