var dta = {
    initData:function(){
	var flag = Math.floor(Math.random()*10+1);
	setTimeout(function(){dta.loop(flag)},3000);
    },
    loop:function(flag){
       	
       if(flag<5){
       	    console.log("111111")
       }else{
  	var flag = Math.floor(Math.random()*10+1);
       	   setTimeout(function(){dta.loop(flag)},3000);
       }

    },
    init:function(){
	dta.initData()
    }
}

dta.init();

