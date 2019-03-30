function outputNumbers(count){
    for(var i=0;i<count;i++){
	     console.log(i);
    }
    console.log("*"+i+"*");
}

outputNumbers(4);


function outputNumber(count){
    for(var i=0;i<count;i++){
	     console.log(i);
    }
    var i;
    console.log("**"+i+"**");
}
outputNumber(3);


function outputNo(count){
    (function(){
    	for(var i=0;i<count;i++){
    	     console.log(i);
    	}
    })()
    console.log("*"+i+"*");//i is not defined
}

outputNo(5);
