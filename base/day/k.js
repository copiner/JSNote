const Discover = {

    temp : [
	{
	    id:1,
	    name:'wdaonngg'
	},
	{
	    id:2,
	    name:'xjx'
	},
	{
	    id:3,
	    name:'nike'
	},
	{
	    id:4,
	    name:'kim'
	}	
	
    ],

    discoverCard : function(name){
	var temp = [];
        var arr = Discover.temp;
        for(var i=0;i<arr.length;i++){
           if(arr[i].name == name){
            temp = arr[i];
           }
        }
        return temp;
    },
    
    discoverName : function(name){
        var arr = Discover.temp;
        for(var i=0;i<arr.length;i++){
           if(arr[i].name == name){
             return arr[i];
           }
        }
    },

    gotIt : function(){
	var obj = Discover.discoverCard('xjx');
	console.log(obj);
    }

}

Discover.gotIt();
