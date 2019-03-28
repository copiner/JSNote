
function test(){
    var countdown = 30;
    
    var setTime = function(obj){
	console.log(countdown);
	if(countdown == 0){
	    countdown = 30;
	} else {
	    countdown--;
	    setTimeout(function(){setTime(obj)},1000);
	}
	
    }
}

test()
